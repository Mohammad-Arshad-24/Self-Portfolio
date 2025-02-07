import React, { useEffect, useState } from 'react';
import '../Education.css';

function Education() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const timeouts = [];
    const sections = ['ssc', 'intermediate', 'btech'];

    sections.forEach((section, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleSections((prev) => [...prev, section]);
        }, index * 500) // Delay each section by 500ms
      );
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      {visibleSections.includes('ssc') && (
        <div className="education-item fade-in">
          <h3>Secondary School Certificate (SSC)</h3>
          <p>Elena Bettini English Medium High School</p>
          <p>Percentage: 98.5%</p>
        </div>
      )}

      {visibleSections.includes('intermediate') && (
        <div className="education-item fade-in">
          <h3>Intermediate Education</h3>
          <p>Mother Theresa Junior College</p>
          <p>Percentage: 98.0%</p>
        </div>
      )}

      {visibleSections.includes('btech') && (
        <div className="education-item fade-in">
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p>M S Ramaiah University of Applied Sciences</p>
          <p>Currently Pursuing</p>
        </div>
      )}
    </section>
  );
}

export default Education;
