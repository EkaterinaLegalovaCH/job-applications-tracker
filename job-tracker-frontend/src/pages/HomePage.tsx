import React from "react";
import { Navbar } from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import { CheckLastApplications } from "../components/CheckLastApplications";
import { Carousel } from "../components/Carousel";
import { Heros } from "../components/Heros";


function HomePage(props: {applications: ApplicationModel[], deleteApplication: Function}) {
    return (
        <div>
            <Navbar/>
            <CheckLastApplications/>
            <Carousel/>
            <Heros/>
            <Dashboard applications={props.applications} deleteApplication={props.deleteApplication}/>
            <Footer/>
        </div>
    );
}

export default HomePage;
