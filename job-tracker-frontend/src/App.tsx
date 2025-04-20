import React, { useState } from "react";
import "./App.css";
import { HomePage } from "./layouts/homepage/HomePage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NewApplicationForm } from "./components/NewApplicationForm";

export const App = () => {
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
      applicationStatus: "rejected",
    },
    {
      rowNumber: 2,
      dateApplying: "15.03.2025",
      nameOfCompany: "Antaes Consulting",
      jobTitle: "Développeur(euse) Fullstack Web et Mobile",
      jobUrl: "https://www.linkedin.com/jobs/view/4175884518",
      dateResponse: "18.03.2025",
      jobAddResourse: "LinkedIn",
      applicationStatus: "rejected",
    },
  ]);

  const addAplication = (nameOfCompany: string, jobTitle: string, jobUrl: string, dateResponse: string, jobAddResourse: string, applicationStatus: string) => {
    let rowNumber = applications.length > 0 ? applications[applications.length - 1].rowNumber + 1 : 1;
    
    const newApplication = {
      rowNumber,
      dateApplying: new Date().toISOString().split("T")[0], // Current date
      nameOfCompany,
      jobTitle,
      jobUrl,
      dateResponse,
      jobAddResourse,
      applicationStatus,
    };

    setApplications((prevApplications) => [...prevApplications, newApplication]);
    setShowAddApplForm(false); // Close modal after submitting
  };

  const deleteApplication = (deleteApplicationRowNumber: number) => {
    setApplications(applications.filter((value) => value.rowNumber !== deleteApplicationRowNumber));
  };

  return (
        <>
          <Navbar/>
          <HomePage applications={applications} deleteApplication={deleteApplication} />
          
          {/* Button to open modal */}
          <button className="btn btn-primary" onClick={() => setShowAddApplForm(true)}>
            New Application
          </button>

          {/* New Application Form Modal */}
          <NewApplicationForm show={showAddApplForm} setShow={setShowAddApplForm} addAplication={addAplication} />
          <Footer/>
    </>
  );
}

