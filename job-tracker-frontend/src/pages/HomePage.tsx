import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";


function HomePage(props: {applications: ApplicationModel[], deleteApplication: Function}) {
    return (
        <div>
            <Navbar/>
            <Dashboard applications={props.applications} deleteApplication={props.deleteApplication}/>
            <Footer/>
        </div>
    );
}

export default HomePage;
