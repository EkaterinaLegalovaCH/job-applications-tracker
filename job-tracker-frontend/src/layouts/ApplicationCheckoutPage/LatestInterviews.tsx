import { Link } from "react-router-dom";
import InterviewModel from "../../models/InterviewModel";
import { Interview } from "../utils/Interview";

export const LatestInterviews: React.FC<{
    interviews: InterviewModel[]; applicationId: number | undefined, mobile: boolean
}> = (props) => {
    return (
        <div className={props.mobile ? "mt-3" : "row mt-5"}>
            <div className={props.mobile ? "" : "col-sm-2 col-md-2"}>
                <h2>Latest Interviews: </h2>
            </div>
            <div className="col-sm-10 col-md-10">   
                {props.interviews.length > 0 ?
                    <>
                        {props.interviews.slice(0, 3).map(eachInterview => (
                            <Interview interview={eachInterview} key={eachInterview.id}></Interview>
                        ))}

                        <div className="m-3">
                            <Link type="button" className="btn main-color btn-md text-white" to='#'>
                                View All Interviews.
                            </Link>
                        </div>
                    </>
                    :
                    <div className="m-3">
                        <p className="lead">
                            Currently there are no interviews for this application.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}