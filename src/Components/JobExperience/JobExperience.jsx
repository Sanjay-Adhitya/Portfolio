import React from 'react';
import './JobExperience.css';

const JobExperience = ({jobExperiencesList}) => {
  const jobExperiences = jobExperiencesList

  return (
    <div className="job-experience-container">
      <h2 className="section-heading">Job Experience</h2>
      <ul className="job-experience-list">
        {jobExperiences.map((experience, index) => (
          <li key={index} className="job-experience-item">
            <h3 className="company-name">{experience.company}</h3>
            <p className="position">{experience.position}</p>
            <p className="position">{experience.notice}</p>
            <p className="duration">{experience.duration}</p>
            <p className="project-description">
            {experience.points.map((skill, index) => (
                <li style={{
                  padding:"2px",
                  paddingLeft:"3px"
                }} key={index}>{skill}</li>
              ))}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobExperience;
