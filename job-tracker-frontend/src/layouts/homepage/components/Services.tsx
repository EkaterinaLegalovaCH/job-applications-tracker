export const Services = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">Have Questions?</h1>
                    <p className="lead">If you have problems with app, send us a personal message!</p>
                    <div className="d-grid gap-2 justify-contend-md-start mb-4 mb-lg-3">
                        <a className="btn main-color btn-lg text-white" href="#">
                            Sign Up.
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
            </div>
        </div>
    );
}