import React from "react";

export const ReturnApplication = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                <img
                    src={require("../../../Images/BooksImages/book-luv2code-1000.png")}
                    width="151"
                    height="233"
                    alt="application"/>
                <h6 className="mt-2">Application</h6>
                <p>BlaBlaBla</p>
                <a className="btn main-color text-white" href="#">
                    Update
                </a>
            </div>
        </div>
    );
}
