import React from "react";
import ApplicationModel from "../../../models/ApplicationModel";

export const ReturnApplication: React.FC<{application: ApplicationModel}> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
            <img
                        src={`https://logo.clearbit.com/${props.application?.nameOfCompany?.toLowerCase().replace(/\s+/g, '')}.ai`}
                        alt={`${props.application?.nameOfCompany ?? ""} logo`}
                        width="151"
                        height="151"
                        onError={(e) => {
                        (e.target as HTMLImageElement).src = "/default-logo.png";
                        }}
                    />
                <h6 className="mt-2">{props.application.jobTitle}</h6>
                <p>{props.application.nameOfCompany}</p>
                <a className="btn main-color text-white" href="#">
                    Update
                </a>
            </div>
        </div>
    );
}
