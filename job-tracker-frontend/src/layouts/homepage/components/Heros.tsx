export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-ms-6 ">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2 ">
              <h1>Where did you apply?</h1>
              <p className="lead">
                The your application tracker team would love to kmow where did
                you apply. We would love to provide our assistance, whether you
                are tracking applications or preparing for interviews.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
            <div className="col-4 col-md-4  container d-flex justify-content-center align-items-center">
                <div className="ml-2">
                    <h1>Our resources a the most updated.</h1>
                    <p className="lead">
                        Stay ahead in your job search with our daily updated resources. 
                        From resume tips to interview preparation, we have got you covered.
                    </p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="col-image-right"></div>
            </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
            <div className="container">
                <div className="m-2">
                    <div className="col-image-left"></div>
                    <div className="mt-2">
                        <h1>Where did you apply?</h1>
                        <p className="lead">
                            The your application tracker team would love to kmow where did
                            you apply. We would love to provide our assistance, whether you
                            are tracking applications or preparing for interviews.
                        </p>
                        <a className="btn main-color btn-lg text-white" href="#">
                            Sign Up
                        </a> 
                    </div>
                </div>
                <div className="m-2">
                    <div className="col-image-right"></div>
                    <div className="mt-2">
                        <h1>Our resources a the most updated.</h1>
                        <p className="lead">
                            Stay ahead in your job search with our daily updated resources. 
                            From resume tips to interview preparation, we have got you covered.
                        </p>
                    </div>
                </div>
            </div>
      </div>

    </div>
  );
};
