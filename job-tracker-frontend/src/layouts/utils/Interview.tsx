import React from "react";
import IntervieModel from "../../models/InterviewModel";
import styles from "./Interview.module.css";



export const Interview: React.FC<{ interview: IntervieModel}> = (props) => {
    const date = new Date(props.interview.date);

    const longMonth = date.toLocaleString("en-us", { month: "long"})
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();

    const dateRender = longMonth + " " + dateDay + ", " + dateYear;

    return (
        <div className={styles.card}>
            <div className={styles.headder}>
                <span className={styles.type}>{props.interview.type}</span>
                <span className={styles.date}>{dateRender}</span>
            </div>
            <div className={styles.body}>
                <p>{props.interview.feedback || "No feedback was provided"}</p>
            </div>
            { props.interview.performanceRating && (
                <div className={styles.rating}>
                    Performance: {props.interview.performanceRating}/10
                </div>
            )}
        </div>
    );
}