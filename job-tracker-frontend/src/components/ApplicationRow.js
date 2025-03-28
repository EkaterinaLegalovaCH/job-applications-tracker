function ApplicationRow(props) {

    return (
        <tr onClick={() => props.deleteApplication(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.dateApplying}</td>
            <td>{props.nameOfCompany}</td>
            <td><a href={props.jobUrl} target="_blank" rel="noopener noreferrer">{props.jobTitle}</a></td>
            <td>{props.dateResponse}</td>
            <td>{props.jobAddResourse}</td>
            <td>{props.applicationStatus}</td>
        </tr>
    )

}

export default ApplicationRow