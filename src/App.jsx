import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup'; 
import Welcome from './pages/Welcome';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage /> } />
        <Route path="/welcome" element={<Welcome/> } />
        <Route path="/career" element={<Career /> } />

      </Routes>
    </Router>
  );
}

export default App;