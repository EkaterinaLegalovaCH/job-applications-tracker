import React from "react";
import ApplicationModel from "../../../models/ApplicationModel";
import { Link } from "react-router-dom";

export const ReturnApplication: React.FC<{application: ApplicationModel}> = (props) => {
    console.log("Mapped application:", props.application)
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
            <img
                        src={`https://logo.clearbit.com/${props.application?.nameOfCompany?.toLowerCase().replace(/\s+/g, '')}.com`}
                        alt={`${props.application?.nameOfCompany ?? ""} logo`}
                        width="151"
                        height="151"
                        onError={(e) => {
                        (e.target as HTMLImageElement).src = "/default-logo.png";
                        }}
                    />
                <h6 className="mt-2">{props.application.jobTitle}</h6>
                <p>{props.application.nameOfCompany}</p>
                <Link className="btn main-color text-white" to={`/checkout/${props.application?.id}`}>
                    Update
                </Link>
            </div>
        </div>
    );
}
