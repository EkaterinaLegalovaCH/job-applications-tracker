import React from "react";
import ApplicationModel from "../../../models/ApplicationModel";

export const ReturnApplication: React.FC<{application: ApplicationModel}> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                <img
                    src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                    width="151"
                    height="233"
                    alt="application"/>
                <h6 className="mt-2">{props.application.jobTitle}</h6>
                <p>{props.application.nameOfCompany}</p>
                <a className="btn main-color text-white" href="#">
                    Update
                </a>
            </div>
        </div>
    );
}
