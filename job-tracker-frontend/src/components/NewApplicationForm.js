import React, { useState } from "react";

function NewApplicationForm({ show, setShow, addAplication }) {
  const [nameOfCompany, setNameOfCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [dateResponse, setDateResponse] = useState("");
  const [jobAddResourse, setJobAddResourse] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");

  const submitApplication = () => {
    if (nameOfCompany && jobTitle && jobUrl && dateResponse && jobAddResourse && applicationStatus) {
      addAplication(nameOfCompany, jobTitle, jobUrl, dateResponse, jobAddResourse, applicationStatus);
      setNameOfCompany("");
      setJobTitle("");
      setJobUrl("");
      setDateResponse("");
      setJobAddResourse("");
      setApplicationStatus("");
    }
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1">
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

export default NewApplicationForm;
