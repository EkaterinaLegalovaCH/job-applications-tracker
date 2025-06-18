import ApplicationModel from "../../models/ApplicationModel";
import InterviewModel from "../../models/InterviewModel";
import { useEffect, useState } from "react";
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
    
          const baseUrl: string = `http://localhost:8080/api/applications/${applicationId}`;
    
          const response = await fetch(baseUrl);
    
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          
          const responseJson = await response.json();
    
          const LoadedApplication: ApplicationModel =  {
            id: responseJson.id,
            dateApplying: responseJson.applicationDate,
            nameOfCompany: responseJson.companyName,
            jobTitle: responseJson.jobTitle,
            jobUrl: responseJson.applicationUrl,
            dateResponse: responseJson.responseDate,
            jobAddResourse: responseJson.source,
            applicationStatus: responseJson.status

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
          const interviewUrl: string = `http://localhost:8080/api/interviews/search/findByApplicationId?applicationId=${applicationId}`;

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
      companyName: nameOfCompany,
      jobTitle: jobTitle,
      applicationUrl: jobUrl,
      responseDate: dateResponse,
      source: jobAddResourse,
      status: applicationStatus,
      applicationDate: application?.dateApplying
    };

    try {
      const response = await fetch(`http://localhost:8080/api/applications/${application?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      console.log("PUT status:", response.status, await response.text());
      if (!response.ok) throw new Error("Failed to update application");

      alert("Application updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Update failed.");
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

        <button className="btn btn-primary mt-3" onClick={updateApplication}>
          Save Changes
        </button>
      </div>

      <LatestInterviews
        interviews={interviews}
        applicationId={application?.id}
        mobile={false}
      />
    </div>
  );
};