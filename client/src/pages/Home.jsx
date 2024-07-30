import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/index";
import Header from "../components/Header/index";
import SearchBar from "../components/SearchBar/index";
import JobCard from "../components/JobCard/index";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase.config"; // Assuming you have auth imported

function Home() {

  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  
  if (!token) {
    navigate('/login');
  } 

  const fetchJobs = async () => {
    setLoading(true);
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    try {
      const req = await getDocs(q);
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setLoading(true);
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    try {
      const req = await getDocs(q);
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching custom jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebase sign-out method
      localStorage.removeItem('token');
  navigate('/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-500 min-h-screen">
      <Navbar />
      <Header />
      <div className="flex justify-end px-8 py-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 mr-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
        </button>
      )}
      {loading ? (
       <div className="flex justify-center align-center">
        <h1 className="text-white text-2xl">Loading....</h1> 
          </div>
      ) : (
        jobs.map((job) => <JobCard key={job.id} {...job} />)
      )}
    </div>
  );
}

export default Home;
