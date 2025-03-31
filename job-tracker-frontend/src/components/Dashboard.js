import React from "react";
import ApplicationsTable from "./ApplicationsTable";

function Dashboard(props) {
    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>
            <ApplicationsTable applications={props.applications} deleteApplication={props.deleteApplication}/>
        </div>
    );
}

export default Dashboard;