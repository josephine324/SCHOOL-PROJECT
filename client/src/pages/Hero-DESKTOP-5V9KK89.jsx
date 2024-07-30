// src/components/Hero.js
import React, { useState } from 'react';
import '../assets/css/Style.css';
import Logo from '../assets/images/download (1).jpeg';
import Facebook from '../assets/images/672_fb_icon.jpg';
import Twitter from '../assets/images/1691832460x-twitter-logo-png.png';
import Linkedin from '../assets/images/linkedin-logo-3.png';
import { Link } from 'react-router-dom';

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // src/components/Hero.js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus('Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus('Failed to send message.');
  }
};


  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="SkillLink Logo" />
            <h1>Bridge Skills</h1>  
          </div>
          <nav>
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
              <li> <Link to='/signup' className='btn-primary' >Get Started </Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Bridging the Gap Between Education and Employment</h2>
          <p>Empowering Youth with Market-Ready Skills and Job Opportunities</p>
          <Link to='/signup' className='btn-primary'>Get Started</Link> &nbsp;&nbsp;
          <Link to="/home" className="btn-primary">Explore Jobs</Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>At SkillLink, we aim to empower young individuals by providing them with the necessary skills that match the demands of today's job market. Our mission is to create a seamless transition from education to employment through targeted upskilling programs.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Our Skills Programs</h2>
          <div className="skills-grid">
            <a href="web-development.html" className="skill-link">
              <div className="skill-item">
                <h3>Web Development</h3>
                <p>Learn the latest web development technologies and build real-world projects.</p>
              </div>
            </a>
            <a href="data-analysis.html" className="skill-link">
              <div className="skill-item">
                <h3>Data Analysis</h3>
                <p>Gain expertise in data manipulation and visualization using industry-standard tools.</p>
              </div>
            </a>
            <a href="digital-marketing.html" className="skill-link">
              <div className="skill-item">
                <h3>Digital Marketing</h3>
                <p>Master online marketing strategies, including SEO, social media, and content creation.</p>
              </div>
            </a>
            <a href="graphic-design.html" className="skill-link">
              <div className="skill-item">
                <h3>Graphic Design</h3>
                <p>Explore the principles of design and learn to create stunning visuals.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Job Portal Section */}
      <section id="jobs" className="jobs">
        <div className="container">
          <h2>Job Portal</h2>
          <p style={{marginBottom:"30px"}}>Our job portal connects skilled youth with potential employers. Browse job listings and apply directly on our platform.</p>
          <Link to="/home" className="btn-primary">Explore Jobs</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p>"Bridge Skills helped me land my dream job with their comprehensive web development program!"</p>
              <h4>- Alex Johnson</h4>
            </div>
            <div className="testimonial-item">
              <p>"The data analysis course was incredibly insightful and practical. Highly recommend it!"</p>
              <h4>- Maria Fernandez</h4>
            </div>
            <div className="testimonial-item">
              <p>"The job portal made my job search so much easier. I found the perfect role in no time."</p>
              <h4>- David Lee</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Bridge Skills. All Rights Reserved.</p>
          <div className="social-media">
            <a href="#">
              <img src={Facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="#">
              <img src={Twitter} alt="Twitter" className="social-icon" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
