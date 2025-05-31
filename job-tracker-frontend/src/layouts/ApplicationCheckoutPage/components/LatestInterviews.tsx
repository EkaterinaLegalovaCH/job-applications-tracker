import { Link } from "react-router-dom";
import InterviewModel from "../../../models/InterviewModel";
import { Interview } from "../../utils/Interview";
import './LatestInterviews.css';

export const LatestInterviews: React.FC<{
    interviews: InterviewModel[]; 
    applicationId: number | undefined; 
    mobile: boolean;
}> = (props) => {
    return (
        <div className={`latest-interviews ${props.mobile ? "mobile" : "desktop"}`}>
                <h3 className="latest-interviews_heading">Latest Interviews: </h3>
            
              
                {props.interviews.length > 0 ?
                    <>
                        <div className="latest-interviews_list">
                            {props.interviews.slice(0, 3).map(eachInterview => (
                                <Interview 
                                    interview={eachInterview} 
                                    key={eachInterview.id}
                                />
                            ))}
                        </div>
  

                        <div className="latest-intervies_footer">
                            <Link className="latest-interviews_view-all" to='#'>
                                View All Interviews.
                            </Link>
                        </div>
                    </>
                    :
                    
                        <p className="latest-interviews_none">
                            Currently there are no interviews for this application.
                        </p>

                }
        </div>
    );
}