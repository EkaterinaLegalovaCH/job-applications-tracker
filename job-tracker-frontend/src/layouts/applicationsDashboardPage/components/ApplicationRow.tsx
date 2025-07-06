import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import ApplicationModel from "../../../models/ApplicationModel";
import "./ApplicationRow.css";


export const ApplicationRow: React.FC<{
  application: ApplicationModel;
}> = ({ application }) => {
  const navigate = useHistory();

  const handleRowClick = () => {
    navigate.push(`/checkout/${application?.id}`)
  };

  return (
    <tr className="application_row" onClick={handleRowClick}>
      <th scope="row" className="id">{application.id}</th>
      <td data-label="Applying Date">{application.dateApplying}</td>
      <td data-label="Company Name">{application.nameOfCompany}</td>
      <td data-label="Job Title">
        <a
          href={application.jobUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {application.jobTitle}
        </a>
      </td>
      <td data-label="Response Date">{application.dateResponse}</td>
      <td data-label="Resource">{application.jobAddResourse}</td>
      <td data-label="Status">{application.applicationStatus}</td>
    </tr>
  );
};
