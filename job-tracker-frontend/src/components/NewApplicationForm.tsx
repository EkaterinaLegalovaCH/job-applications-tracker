import React, { useState } from "react";
import axios from "axios";
import ApplicationModel from "../models/ApplicationModel";

interface NewApplicationFormProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onApplicationAdded: (app: ApplicationModel) => void;
}


export const NewApplicationForm: React.FC<NewApplicationFormProps> = ({ show, setShow, onApplicationAdded }) => {
  const [nameOfCompany, setNameOfCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [dateResponse, setDateResponse] = useState("");
  const [jobAddResourse, setJobAddResourse] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");

  const submitApplication = async () => {
    if (nameOfCompany && jobTitle && jobUrl && dateResponse && jobAddResourse && applicationStatus) {
      const payload = {
        nameOfCompany: nameOfCompany,
        jobTitle: jobTitle,
        jobUrl: jobUrl,
        dateResponse: dateResponse,
        jobAddResourse: jobAddResourse,
        applicationStatus: applicationStatus,
        dateApplying: new Date().toISOString().split("T")[0],
        nextStep: "",
        notes: "",
        img: ""
      };

      try {
        const response = await axios.post<ApplicationModel>(`${process.env.REACT_APP_API_BASE_URL}/applications`, payload, {
          headers: {
            "Content-type": "application/json",        
          },
        });
        
        const saved = response.data;

        console.log("Response from backend:", saved);
       



        const formattedApp = {
        id: saved.id,
        dateApplying: saved.dateApplying,
        nameOfCompany: saved.nameOfCompany,
        jobTitle: saved.jobTitle,
        jobUrl: saved.jobUrl,
        dateResponse: saved.dateResponse,
        jobAddResourse: saved.jobAddResourse,
        applicationStatus: saved.applicationStatus,
      };
        onApplicationAdded(formattedApp);

      
        alert("Application added successfully!");  

        setNameOfCompany("");
        setJobTitle("");
        setJobUrl("");
        setDateResponse("");
        setJobAddResourse("");
        setApplicationStatus("");
      
        setShow(false); // Close modal after submitting
      } catch (error) {
        console.error("Error submiting application:", error);
        alert("Failed to submit application. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex={-1} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Application</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" value={nameOfCompany} onChange={(e) => setNameOfCompany(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job URL</label>
                    <input type="text" className="form-control" value={jobUrl} onChange={(e) => setJobUrl(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Response</label>
                    <input type="date" className="form-control" value={dateResponse} onChange={(e) => setDateResponse(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Ad Resource</label>
                    <input type="text" className="form-control" value={jobAddResourse} onChange={(e) => setJobAddResourse(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Application Status</label>
                    <input type="text" className="form-control" value={applicationStatus} onChange={(e) => setApplicationStatus(e.target.value)} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={submitApplication}>Add Application</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



