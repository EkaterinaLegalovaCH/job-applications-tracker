import ApplicationModel from "../../models/ApplicationModel";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { ReturnApplication } from "../homepage/components/ReturnApplication";


export const ApplicationCheckoutPage = () => {
    const [application, setApplication] = useState<ApplicationModel>();
    const [isLoadingApplication, setIsLoadingApplication] = useState(true);
    const [httpError, setHttpError] = useState(null);

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
            rowNumber: responseJson.id,
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

        if (isLoadingApplication) {
          return (
            <div className="container mt-5">
              <SpinnerLoading />
            </div>
          )
        }
      
        if (httpError) {
          return (
            <div className="container mt-5">
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
            <div className="container mt-5">
              <div className="row mb-4">
                <div className="col-md-2 text-center">
                  <img
                    src={`https://logo.clearbit.com/${application?.nameOfCompany?.toLowerCase().replace(/\s+/g, '')}.com`}
                    alt={`${application?.nameOfCompany ?? ""} logo`}
                    width="120"
                    height="120"
                    className="img-fluid rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/default-logo.png";
                    }}
                  />
                </div>
                <div className="col-md-10 d-flex flex-column justify-content-center">
                  <h2>{application?.nameOfCompany}</h2>
                  <h5 className="text-primary">{application?.jobTitle}</h5>
                  <a href={application?.jobUrl} target="_blank" rel="noopener noreferrer">
                    View Job Posting
                  </a>
                </div>
              </div>
          
              <div className="card p-4 shadow-sm">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Application Date</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.dateApplying || ""}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Response Date</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.dateResponse || "—"}
                      readOnly
                    />
                  </div>
                </div>
          
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Source</label>
                    <input
                      className="form-control"
                      type="text"
                      value={application?.jobAddResourse || ""}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6">
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
            </div>
          );
}