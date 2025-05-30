import IntervieModel from "../../models/InterviewModel";

export const Interview: React.FC<{ interview: IntervieModel}> = (props) => {
    const date = new Date(props.interview.date);

    const longMonth = date.toLocaleString("en-us", { month: "long"})
    const dateDay = date.getDate();
    const dateYear = date.getFullYear();

    const dateRender = longMonth + " " + dateDay + ", " + dateYear;

    return (
        <div>
            <div className="col-sm-8 col-md-8">
                <h5>Email:{props.interview.userEmail}</h5>
                <div className="row">
                    <div className="col">
                        {dateRender}
                    </div>
                    <div className="col">
                        {props.interview.feedback}
                    </div>
                </div>
                <div className="mt-2">
                    <p>{props.interview.type}</p>
                </div>
            </div>
            <hr/>
        </div>
    );
}