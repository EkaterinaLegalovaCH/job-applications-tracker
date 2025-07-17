import { useEffect, useState } from "react";
import ApplicationModel from "../../models/ApplicationModel";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import Dashboard from "./components/Dashboard";
import { NewApplicationForm } from "../../components/NewApplicationForm";
import "./ApplicationsDashboardPage.css";

export const ApplicationsDashboardPage = () => {
  const [showAddApplForm, setShowAddApplForm] = useState(false);
  const [applications, setApplications] = useState<ApplicationModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const baseUrl: string = `${process.env.REACT_APP_API_BASE_URL}/applications`;

      const url: string = `${baseUrl}?page=0&size=100`;

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
          dateApplying: responseData[key].dateApplying,
          nameOfCompany: responseData[key].nameOfCompany,
          jobTitle: responseData[key].jobTitle,
          jobUrl: responseData[key].jobUrl,
          dateResponse: responseData[key].dateResponse,
          jobAddResourse: responseData[key].jobAddResourse,
          applicationStatus: responseData[key].applicationStatus,
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
    );
  }

  if (httpError) {
    return (
      <div className="container mt-5">
        <p>Hi there!{httpError}</p>
      </div>
    );
  }

  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <h1>My Job Applications</h1>
        <button className="btn_add" onClick={() => setShowAddApplForm(true)}>
          + New Application
        </button>
      </div>

      <Dashboard
        applications={applications}
        deleteApplication={(id: number) =>
          setApplications(applications.filter((app) => app.id !== id))
        }
      />

      <NewApplicationForm 
        show={showAddApplForm} 
        setShow={setShowAddApplForm} 
        onApplicationAdded={(app: ApplicationModel) =>
          setApplications((prev) => [...prev, app])
        }
      />
    </div>
  );
};
