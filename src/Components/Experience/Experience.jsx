import React from 'react';
import './Experience.css';

const Experience = ({projectsList}) => {
  const projects = projectsList

  return (
    <div className="experience-container">
      <h2 className="section-heading">Project Experience</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-year">Year: {project.year}</p>
            <p className="project-description">Skills Learned</p>

            <ul className="skills-list">
              {project.skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>

            <p className="project-description">
            {project.description.map((skill, index) => (
                <li style={{
                  padding:"2px",
                  paddingLeft:"3px"
                }} key={index}>{skill}</li>
              ))}</p>
          </li>
        ))}
      </ul>
      <br/>
      <br/>
      <hr />
      <h2 style={{textAlign:"center"}}>Thank you</h2>
    </div>
  );
};

export default Experience;
