class IntervieModel {
    id: number;
    userEmail: string;
    date: string;
    type: string;
    tasks: string;
    performanceRating: number;
    applicationId: number;
    feedback: string;

    constructor(
        id: number,
        userEmail: string,
        date: string,
        type: string,
        tasks: string,
        performanceRating: number,
        applicationId: number,
        feedback: string
    ) {
        this.id = id;
        this.userEmail = userEmail;
        this.date = date;
        this.type = type;
        this.tasks = tasks;
        this.performanceRating = performanceRating;
        this.applicationId = applicationId;
        this.feedback = feedback;
    }
}

export default IntervieModel;
