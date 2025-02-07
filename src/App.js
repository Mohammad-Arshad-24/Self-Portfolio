import React, { useEffect, useState } from "react";
import linkedinIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import backgroundImage from "./images/bg.jpg";
import gmailIcon from "./images/gmail.jpg";
import Header from "./mycomp/Header.js"; // Import the Header component
import "./App.css";

function App() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ["LEARNER", "PROGRAMMER", "WEB DESIGNER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="App">
      <Header />

       
      <section id="home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-content">
          <h1>HEY, I'M MOHAMMED ARSHAD</h1>
          <h2>
            I AM A PASSIONATE <span className="animated-skill">{skills[currentSkillIndex]}</span>
          </h2>
        </div>
      </section>


      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="education-item fade-in">
          <h3>Secondary School Certificate (SSC)</h3>
          <p>Elena Bettini English Medium High School</p>
          <p>Percentage: 98.5%</p>
        </div>
        <div className="education-item fade-in">
          <h3>Intermediate Education</h3>
          <p>Mother Theresa Junior College</p>
          <p>Percentage: 98.0%</p>
        </div>
        <div className="education-item fade-in">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p>M S Ramaiah University of Applied Sciences</p>
          <p>Currently Pursuing</p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-item fade-in">
          <h3>Bank Operations Mini Project</h3>
          <p>
            This project simulates basic bank operations using JSON files to store customer names and bank balances. 
            Users can perform transactions by referencing the bank name, allowing for efficient balance management and updates.
          </p>
          <a href="https://github.com/Mohammad-Arshad-24/Mini-project" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="project-link">
            View on GitHub
          </a>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>React</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </section>


      <footer className="footer">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mohammed-arshad-b19887288/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Mohammad-Arshad-24" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="mailto:arshad141024@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;