import ApplicationModel from "../../models/ApplicationModel";
import InterviewModel from "../../models/InterviewModel";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { LatestInterviews } from "./components/LatestInterviews";
import "./ApplicationCheckoutPage.css";



export const ApplicationCheckoutPage = () => {
    const [application, setApplication] = useState<ApplicationModel>();
    const [isLoadingApplication, setIsLoadingApplication] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // Interview state
    const [interviews, setInterviews] = useState<InterviewModel[]>([]);
    const [isLoadingInterviews, setIsLoadingInterviews] = useState(true);

    const applicationId = (window.location.pathname).split("/")[2];
    
    const [nameOfCompany, setNameOfCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobUrl, setJobUrl] = useState("");
    const [dateResponse, setDateResponse] = useState("");
    const [jobAddResourse, setJobAddResourse] = useState("");
    const [applicationStatus, setApplicationStatus] = useState("");
    

    useEffect(() => {
        const fetchApplication = async () => {
    
          const baseUrl: string = `${process.env.REACT_APP_API_BASE_URL}/applications/${applicationId}`;
    
          const response = await fetch(baseUrl);
    
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          
          const responseJson = await response.json();
    
          const LoadedApplication: ApplicationModel =  {
            id: responseJson.id,
            dateApplying: responseJson.dateApplying,
            nameOfCompany: responseJson.nameOfCompany,
            jobTitle: responseJson.jobTitle,
            jobUrl: responseJson.jobUrl,
            dateResponse: responseJson.dateResponse,
            jobAddResourse: responseJson.jobAddResourse,
            applicationStatus: responseJson.applicationStatus

          };

          setApplication(LoadedApplication);
          setNameOfCompany(LoadedApplication.nameOfCompany);
          setJobTitle(LoadedApplication.jobTitle);
          setJobUrl(LoadedApplication.jobUrl);
          setDateResponse(LoadedApplication.dateResponse);
          setJobAddResourse(LoadedApplication.jobAddResourse);
          setApplicationStatus(LoadedApplication.applicationStatus);
          setIsLoadingApplication(false);
        };
    
        fetchApplication().catch((error: any) => {
          setIsLoadingApplication(false);
          setHttpError(error.message);
        });
    
      }, []);

      useEffect(() => {
        const fetchInterviews = async () => {
          const interviewUrl: string = `${process.env.REACT_APP_API_BASE_URL}/interviews/search/findByApplicationId?applicationId=${applicationId}`;

          const responseInterviews = await fetch(interviewUrl);

          if (!responseInterviews.ok) {
            throw new Error("Something went wrong!");
          }

          const responseInterviewsJson = await responseInterviews.json();

          const responseData = responseInterviewsJson._embedded.interviews;

          const loadedInterviews: InterviewModel[] = [];

          for (const key in responseData) {
            loadedInterviews.push({
              id: responseData[key].id,
              userEmail: responseData[key].userEmail,
              date: responseData[key].date,
              type: responseData[key].type,
              tasks: responseData[key].tasks,
              performanceRating: responseData[key].performanceRating,
              applicationId: responseData[key].applicationId,
              feedback: responseData[key].feedback
            })
          }
          setInterviews(loadedInterviews);
          setIsLoadingInterviews(false);
        };

        fetchInterviews().catch((error: any) => {
          setIsLoadingInterviews(false);
          setHttpError(error.message);
        });

      }, [])

      const updateApplication = async () => {
        const payload = {
          id: application?.id,
          nameOfCompany: nameOfCompany,
          jobTitle: jobTitle,
          jobUrl: jobUrl,
          dateResponse: dateResponse,
          jobAddResourse: jobAddResourse,
          applicationStatus: applicationStatus,
          dateApplying: application?.dateApplying
        };
        
        try {
          const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/applications/${application?.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
      console.log("PUT status:", response.status, await response.text());
      if (!response.ok) throw new Error("Failed to update application");

      
    } catch (error) {
      console.error("Update error:", error);
      
    }
  };
      const deleteApplication = async () => {
        
        const confirmDeletion = window.confirm("Are you sure you want to delete this application?");
        if (!confirmDeletion) return;
        
        try {
          const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/applications/${application?.id}`, {
            method: "DELETE"});
          if (!response.ok) throw new Error("Failed to delete application");  
           window.location.href = "http://localhost:3000/applications";
          
        } catch (error) {
          console.error("Delete error:", error);
          alert("Something went wrong while deleting the application.");
        }
        
      };

  if (isLoadingApplication || isLoadingInterviews) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return <div>Error: {httpError}</div>;
  }

  return (
    <div className="application-checkout">
      <div className="company-header">
        <img
          src={`https://logo.clearbit.com/${nameOfCompany?.toLowerCase().replace(/\s+/g, "")}.com`}
          alt={`${nameOfCompany} logo`}
          className="company-logo"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/default-logo.png";
          }}
        />
        <div className="company-info">
          <h2>{nameOfCompany}</h2>
          <h5>{jobTitle}</h5>
          <a href={jobUrl} target="_blank" rel="noopener noreferrer">
            View Job Posting
          </a>
        </div>
      </div>

      <div className="application-card">
        <div className="form-section">
          <div className="form-group">
            <label>Company Name</label>
            <input
              className="form-control"
              type="text"
              value={nameOfCompany}
              onChange={(e) => setNameOfCompany(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Application URL</label>
            <input
              className="form-control"
              type="text"
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Response Date</label>
            <input
              className="form-control"
              type="date"
              value={dateResponse}
              onChange={(e) => setDateResponse(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Source</label>
            <input
              className="form-control"
              type="text"
              value={jobAddResourse}
              onChange={(e) => setJobAddResourse(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-control"
              value={applicationStatus}
              onChange={(e) => setApplicationStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="Sent">Sent</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="button-group">
          <button className="btn-custom btn-update" onClick={updateApplication}>
            Save Changes
          </button>

          <button className="btn-custom btn-delete" onClick={deleteApplication}>
            Delete Application
          </button>
        </div>

      </div>

      <LatestInterviews
        interviews={interviews}
        applicationId={application?.id}
        mobile={false}
      />
    </div>
  );
};