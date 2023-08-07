import React from 'react';
import './PortfolioIntro.css';

const PortfolioIntro = ({ name, description, photo }) => {
  return (
    <div class="pic">
      <img src={photo} alt="ProfoileImage" style={{
        "height":"150px",
        "width":"150px",
        "borderRadius":"65px"
      }}/>
      <h2>{name}</h2>
      <p>{description}  </p>
      <a href="Sanjay_Adhitya_Resume_2023.pdf" download="Sanjay_Adhitya_S" target="_blank">
        <button style={{
          backgroundColor: "#FFAC1C",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer"
        }}>Resume</button>
      </a>
      <a href="https://www.linkedin.com/in/sanjay-adhitya-s-218774210/" target="_blank">
        <button style={{
          backgroundColor: "#0A66C2",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer"
        }}>LinkedIn</button>
      </a>
      <a href="https://github.com/Sanjay-Adhitya" target="_blank">
        <button style={{
          backgroundColor: "#39D353",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer"
        }}>Github</button>
      </a>
      {/* <a href="https://pro-man.onrender.com/" target="_blank">
        <button style={{
          backgroundColor: "#df5aeb",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer"
        }}>Side Project</button>
      </a> */}
      <br />
      <br />
    </div>

  );
};

export default PortfolioIntro;


