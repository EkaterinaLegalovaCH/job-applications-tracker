import React, { FC } from "react";
import ApplicationModel from "../../../models/ApplicationModel";

export const ApplicationRow: React.FC<{
    application: ApplicationModel
}> = (props) => {

    return (
        <tr >
            <th scope='row'>{props.application.rowNumber}</th>
            <td>{props.application.dateApplying}</td>
            <td>{props.application.nameOfCompany}</td>
            <td><a href={props.application.jobUrl} target="_blank" rel="noopener noreferrer">{props.application.jobTitle}</a></td>
            <td>{props.application.dateResponse}</td>
            <td>{props.application.jobAddResourse}</td>
            <td>{props.application.applicationStatus}</td>
        </tr>
    )

}
