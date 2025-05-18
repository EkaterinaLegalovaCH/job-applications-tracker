import { useEffect, useState } from "react";
import ApplicationModel from "../../models/ApplicationModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import Dashboard from "./components/Dashboard";
import { NewApplicationForm } from "../../components/NewApplicationForm";


export const ApplicationsDashboardPage = () => {
    const [showAddApplForm, setShowAddApplForm] = useState(false);
    const [applications, setApplications] = useState<ApplicationModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
    
          const baseUrl: string = "http://localhost:8080/api/applications";
    
          const url: string =  `${baseUrl}?page=0&size=6`;
    
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          
          const responseJson = await response.json();
    
          const responseData = responseJson._embedded.applications;
    
          const LoadedApplications: ApplicationModel[] = [];
          for (const key in responseData) {
            LoadedApplications.push({
              id: responseData[key].id,
              dateApplying: responseData[key].applicationDate,
              nameOfCompany: responseData[key].companyName,
              jobTitle: responseData[key].jobTitle,
              jobUrl: responseData[key].applicationUrl,
              dateResponse: responseData[key].responseDate,
              jobAddResourse: responseData[key].source,
              applicationStatus: responseData[key].status
            });
          }
          setApplications(LoadedApplications);
          setIsLoading(false);
        };
    
        fetchApplications().catch((error: any) => {
          setIsLoading(false);
          setHttpError(error.message);
        });
    
      }, []);

    if (isLoading) {
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

    return (
        <div>
            <Dashboard applications={applications} deleteApplication={(id: number) => {
                setApplications(applications.filter(app => app.id !== id));
            }} />
            <button className="btn btn-primary" onClick={() => setShowAddApplForm(true)}>
            New Application
            </button>
            <NewApplicationForm show={showAddApplForm} setShow={setShowAddApplForm} />
        </div>
    );
}