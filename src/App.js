import './App.css'
import profile from './Components/Assets/profile.png'
import expdata from './Components/Assets/exp.json'
import jobexpdata from './Components/Assets/job-exp.json'
import Experience from './Components/Experience/Experience';
import JobExperience from './Components/JobExperience/JobExperience';
import PortfolioIntro from './Components/PortfolioIntro/PortfolioIntro';

function App() {
  const jobexp =jobexpdata["data"]
  const exp = expdata["data"]
  return (
    <div className="App">
      <div>
        <PortfolioIntro 
          name="Sanjay Adjhitya S"
          description="Python Developer"
          photo={profile}
        />
        <JobExperience jobExperiencesList={jobexp}/>
        <Experience projectsList={exp} />
      </div>
    </div>
  );
}

export default App;
