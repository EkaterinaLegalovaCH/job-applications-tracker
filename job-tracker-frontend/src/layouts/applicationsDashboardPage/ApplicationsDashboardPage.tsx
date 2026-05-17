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

  const response = await fetch(url, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const responseJson = await response.json();

  // NEW: works with BOTH old HATEOAS format AND new plain array
  const responseData = Array.isArray(responseJson) 
    ? responseJson 
    : responseJson._embedded?.applications || [];

  const LoadedApplications: ApplicationModel[] = [];
  for (const key in responseData) {
    const app = responseData[key];
    LoadedApplications.push({
      id: app.id,
      dateApplying: app.dateApplying || app.applicationDate || "",
      nameOfCompany: app.nameOfCompany || app.companyName || "",
      jobTitle: app.jobTitle || "",
      jobUrl: app.jobUrl || app.applicationUrl || "",
      dateResponse: app.dateResponse || app.responseDate || "",
      jobAddResourse: app.jobAddResourse || app.jobAddResource || "",
      applicationStatus: app.applicationStatus || "",
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
