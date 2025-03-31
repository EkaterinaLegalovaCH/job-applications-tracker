import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";


function HomePage({applications, deleteApplication}) {
    return (
        <div>
            <Navbar/>
            <Dashboard applications={applications} deleteApplication={deleteApplication}/>
            <Footer/>
        </div>
    );
}

export default HomePage;
