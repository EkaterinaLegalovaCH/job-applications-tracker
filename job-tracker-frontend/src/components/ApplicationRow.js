function ApplicationRow(props) {

    return (
        <tr onClick={() => props.deleteApplication(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.dateApplying}</td>
            <td>{props.nameOfCompany}</td>
            <td>{props.jobTitle}</td>
            <td>{props.jobUrl}</td>
            <td>{props.dateResponse}</td>
            <td>{props.jobAddResourse}</td>
            <td>{props.applicationStatus}</td>
        </tr>
    )

}

export default ApplicationRow