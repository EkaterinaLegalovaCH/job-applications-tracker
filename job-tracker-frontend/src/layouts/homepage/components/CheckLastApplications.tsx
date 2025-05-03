import { Link } from "react-router-dom";

export const CheckLastApplications = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Apdate status of your last applications!</h1>
                    <p className="col-md-8 fs-4">Do you have any news?</p>
                    <Link type="button" className="btn main-color btn-lg text-white" to="/applications">Update last applications</Link>
                </div>
            </div>
        </div>
    );
}