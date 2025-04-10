class ApplicationModel {
    rowNumber: number;
    dateApplying: string;
    nameOfCompany: string;
    jobTitle: string;
    jobUrl: string;
    dateResponse: string;
    jobAddResourse: string;
    applicationStatus: string;
    

    constructor(
        rowNumber: number,
        dateApplying: string,
        nameOfCompany: string,
        jobTitle: string,
        jobUrl: string,
        dateResponse: string,
        jobAddResourse: string,
        applicationStatus: string
        
    ) {
        this.rowNumber = rowNumber;
        this.dateApplying = dateApplying;
        this.nameOfCompany = nameOfCompany;
        this.jobTitle = jobTitle;
        this.jobUrl = jobUrl;
        this.dateResponse = dateResponse;
        this.jobAddResourse = jobAddResourse;
        this.applicationStatus = applicationStatus;
        
    }
}