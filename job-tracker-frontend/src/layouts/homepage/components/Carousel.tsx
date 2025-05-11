import { ReturnApplication } from "./ReturnApplication";
import { useEffect, useState } from "react";
import ApplicationModel from "../../../models/ApplicationModel";
import { SpinnerLoading } from "../../utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [applications, setApplications] = useState<ApplicationModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const baseUrl: string = "http://localhost:8080/api/applications";

      const url: string = `${baseUrl}?page=0&size=3`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.applications;

      const LoadedApplications: ApplicationModel[] = [];
      for (const key in responseData) {
        const app = responseData[key];
        const idHref = app._links?.self?.href || "";
        

        LoadedApplications.push(
          new ApplicationModel(
            app.id,
            app.applicationDate,
            app.companyName,
            app.jobTitle,
            app.applicationUrl,
            app.responseDate,
            app.source,
            app.status
          )
        );
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
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Check your last Applications status</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-intevalr="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {applications.map((application) => (
                <ReturnApplication
                  key={application.id}
                  application={application}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {applications.map((application) => (
                <ReturnApplication
                  key={application.id}
                  application={application}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {applications.map((application) => (
                <ReturnApplication
                  key={application.id}
                  application={application}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          {applications.map((application) => (
            <ReturnApplication
              key={application.id}
              application={application}
            />
          ))}
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <Link className="btn btn-outline-secondary btn-lg" to="/applications">
          View More
        </Link>
      </div>
    </div>
  );
};
