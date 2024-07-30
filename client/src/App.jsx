import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup'; 
import Welcome from './pages/Welcome';
import Career from './pages/Career';
import Hero from './pages/Hero';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage /> } />
        <Route path="/welcome" element={<Welcome/> } />
        <Route path="/career" element={<Career /> } />
        <Route path="/features" element={<Features /> } />

      </Routes>
    </Router>
  );
}

export default App;