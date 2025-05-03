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
    return(
        <div>
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-2">
                      <div>
                        {application && <ReturnApplication key={application.rowNumber} application={application} />}
                      </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}