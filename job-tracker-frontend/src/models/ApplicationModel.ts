class ApplicationModel {
    id: number;
    dateApplying: string;
    nameOfCompany: string;
    jobTitle: string;
    jobUrl: string;
    dateResponse: string;
    jobAddResourse: string;
    applicationStatus: string;   

    constructor(
        id: number,
        dateApplying: string,
        nameOfCompany: string,
        jobTitle: string,
        jobUrl: string,
        dateResponse: string,
        jobAddResourse: string,
        applicationStatus: string,
        
    ) {
        this.id = id;
        this.dateApplying = dateApplying;
        this.nameOfCompany = nameOfCompany;
        this.jobTitle = jobTitle;
        this.jobUrl = jobUrl;
        this.dateResponse = dateResponse;
        this.jobAddResourse = jobAddResourse;
        this.applicationStatus = applicationStatus;
    
    }
    static fromJson(json: any): ApplicationModel {
        return new ApplicationModel(
          json.id,
          json.applicationDate,
          json.companyName,
          json.jobTitle,
          json.applicationUrl,
          json.responseDate,
          json.source,
          json.status
        );
      }
}
export default ApplicationModel;