import ApplicationModel from "../../models/ApplicationModel";
import InterviewModel from "../../models/InterviewModel";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { ReturnApplication } from "../homepage/components/ReturnApplication";
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

        if (isLoadingApplication || isLoadingInterviews) {
          return (
            <div className="application-checkout">
              <SpinnerLoading />
            </div>
          )
        }
      
        if (httpError) {
          return (
            <div className="application-checkout">
              <p>Hi there!{httpError}</p>
            </div>
          )
        
        }
        if (application) {
            const sanitizedName = application.nameOfCompany.toLowerCase().replace(/\s+/g, '');
            const logoUrl = `https://logo.clearbit.com/${sanitizedName}.com`;
            console.log("🛠️ Generated logo URL:", logoUrl);
          }
          return (
            <div className="application-checkout">
              <div className="company-header">
                  <img
                    src={`https://logo.clearbit.com/${application?.nameOfCompany?.toLowerCase().replace(/\s+/g, '')}.com`}
                    alt={`${application?.nameOfCompany ?? ""} logo`}
                    width="120"
                    height="120"
                    className="company-logo"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/default-logo.png";
                    }}
                  />
                  <div className="company-info">
                    <h2>{application?.nameOfCompany}</h2>
                    <h5>{application?.jobTitle}</h5>
                    <a href={application?.jobUrl} target="_blank" rel="noopener noreferrer">
                      View Job Posting
                    </a>
                  </div>
              </div>
          
              <div className="application-card">
                <div className="form-section">
                  <div className="form-group">
                    <label className="form-label">Application Date</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.dateApplying || ""}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Response Date</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.dateResponse || "—"}
                      readOnly
                    />
                  </div>
                </div>
          
                <div className="form-section">
                  <div className="form-group">
                    <label className="form-label">Source</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.jobAddResourse || ""}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.applicationStatus || ""}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <LatestInterviews
                interviews={interviews}
                applicationId={application?.id}
                mobile={false}
              />
            </div>
          );
}