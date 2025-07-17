import { ReturnApplication } from "./ReturnApplication";
import { useEffect, useState } from "react";
import ApplicationModel from "../../../models/ApplicationModel";
import { SpinnerLoading } from "../../utils/SpinnerLoading";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  const [applications, setApplications] = useState<ApplicationModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const baseUrl: string = `${process.env.REACT_APP_API_BASE_URL}/applications`;

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
            app.dateApplying,
            app.nameOfCompany,
            app.jobTitle,
            app.jobnUrl,
            app.dateResponse,
            app.jobAddResourse,
            app.applicationStatus
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
      <div className={styles.carouselContainer}>
        <SpinnerLoading />
      </div>
    );
  }

  if (httpError) {
    return (
      <div className={styles.carouselContainer}>
        <p>Hi there!{httpError}</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
        <h3 className={styles.title}>Check your last Applications status</h3>
        <div className={styles.applicationsRow}>
              {applications.map((application) => (
                <div className={styles.applicationCard} key={application.id}>
                  <ReturnApplication
                    application={application}
                  />
                </div>
              ))}
        </div>

        <div className={styles.footer}>
              <Link className={styles.viewMoreButton} to="/applications">
                View More.
              </Link>
        </div>
    </div>    
          
  );
};
