import React from "react";
import ApplicationModel from "../../../models/ApplicationModel";
import { Link } from "react-router-dom";
import styles from "./ReturnApplication.module.css";

export const ReturnApplication: React.FC<{application: ApplicationModel}> = (props) => {
    console.log("Mapped application:", props.application)
    return (
        <div className={styles.card}>
            
            <img
                        src={`https://logo.clearbit.com/${props.application?.nameOfCompany?.toLowerCase().replace(/\s+/g, '')}.com`}
                        alt={`${props.application?.nameOfCompany ?? ""} logo`}
                        className={styles.logo}
                        onError={(e) => {
                        (e.target as HTMLImageElement).src = "/default-logo.png";
                        }}
                    />
                <h6 className={styles.title}>{props.application.jobTitle}</h6>
                <p className={styles.company}>{props.application.nameOfCompany}</p>
                <Link className={styles.button} to={`/checkout/${props.application?.id}`}>
                    Update
                </Link>
        
        </div>
    );
}
