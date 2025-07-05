import React, { FC } from "react";
import ApplicationModel from "../../../models/ApplicationModel";
import "./ApplicationRow.css";

export const ApplicationRow: React.FC<{
  application: ApplicationModel;
}> = (props) => {
  return (
    <tr className="application_row">
      <th scope="row" className="id">{props.application.id}</th>
      <td data-label="Applying Date">{props.application.dateApplying}</td>
      <td data-label="Company Name">{props.application.nameOfCompany}</td>
      <td data-label="Job Title">
        <a
          href={props.application.jobUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.application.jobTitle}
        </a>
      </td>
      <td data-label="Response Date">{props.application.dateResponse}</td>
      <td data-label="Resource">{props.application.jobAddResourse}</td>
      <td data-label="Status">{props.application.applicationStatus}</td>
    </tr>
  );
};
