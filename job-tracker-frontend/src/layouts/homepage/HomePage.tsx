import React from "react";
import Dashboard from "../../components/Dashboard";
import { CheckLastApplications } from "./components/CheckLastApplications";
import { Carousel } from "./components/Carousel";
import { Heros } from "./components/Heros";
import { Services } from "./components/Services";


export const HomePage = (props: {applications: ApplicationModel[], deleteApplication: Function}) => {
    return (
        <>
            <CheckLastApplications/>
            <Carousel/>
            <Heros/>
            <Services/>
            <Dashboard applications={props.applications} deleteApplication={props.deleteApplication}/>
        </>
    );
}
