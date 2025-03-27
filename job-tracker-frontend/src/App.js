import React, {useState} from 'react';
import './App.css';
import ApplicationsTable from './components/ApplicationsTable';
import NewApplicationForm from './components/NewApplicationForm';

function App() {

  const [showAddApplForm, setShowAddApplForm] = useState(false);

  const [applications, setApplications] = useState([
    {
      rowNumber: 1,
      dateApplying: "15.03.2025",
      nameOfCompany: "Plexus Resource Solutions",
      jobTitle: "Java Software Engineer",
      jobUrl: "https://www.linkedin.com/jobs/view/4153687822",
      dateResponse: "18.03.2025",
      jobAddResourse: "LinkedIn",
      applicationStatus: "rejected"
    },
    {      
      rowNumber: 2,
      dateApplying: "15.03.2025",
      nameOfCompany: "Antaes Consulting",
      jobTitle: "Développeur(euse) Fullstack Web et Mobile",
      jobUrl: "https://www.linkedin.com/jobs/view/4175884518",
      dateResponse: "18.03.2025",
      jobAddResourse: "LinkedIn",
      applicationStatus: "rejected"}
  ]
  )
  
  const addAplication = (nameOfCompany, jobTitle, jobUrl, dateResponse, jobAddResourse, applicationStatus) => {
    let rowNumber = 0;

    if (applications.length > 0) {
        rowNumber = applications[applications.length - 1].rowNumber + 1;
      } else {
        rowNumber = 1;
      }
      const newApplication = {
        rowNumber: rowNumber,
        dateApplying: "new date",
        nameOfCompany: nameOfCompany,
        jobTitle: jobTitle,
        jobUrl: jobUrl,
        dateResponse: dateResponse,
        jobAddResourse: jobAddResourse,
        applicationStatus: applicationStatus
      };
      setApplications(applications => [...applications, newApplication])
    } 
  
  const deleteApplication = (deleteApplicationRowNumber) => {
    let filtered = applications.filter(function (value) {
      return value.rowNumber !== deleteApplicationRowNumber;
    });

    setApplications(filtered);
  }  
  

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          My Applications
        </div>
        <div className="card-body">
          <ApplicationsTable applications={applications} deleteApplication={deleteApplication}/>
          <button className="btn btn-primary" onClick={() => setShowAddApplForm(!showAddApplForm)}>
            {showAddApplForm ? 'Close New Application Form' : 'New Application'}
          </button>
          {showAddApplForm && <NewApplicationForm addAplication={addAplication}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
