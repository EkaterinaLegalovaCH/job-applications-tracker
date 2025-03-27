import React, {useState} from "react";


function NewApplicationForm(props) {
    const [nameOfCompany, setNameOfCompany] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobUrl, setJobUrl] = useState('');
    const [dateResponse, setDateResponse] = useState('');
    const [jobAddResourse, setJobAddResourse] = useState('');
    const [applicationStatus, setApplicationStatus] = useState('');
    
    const submitApplication = () => {
        if (nameOfCompany !== '' && jobTitle !== '' && jobUrl !== '' && dateResponse !== '' && jobAddResourse !== '' && applicationStatus !== '') {
            props.addAplication(nameOfCompany, jobTitle, jobUrl, dateResponse, jobAddResourse, applicationStatus);
            setNameOfCompany('');
            setJobTitle('');
            setJobUrl(''); 
            setDateResponse(''); 
            setJobAddResourse(''); 
            setApplicationStatus('');
        }
    }

    const nameOfCompanyChange = (event) => {
        console.log(event.target.value);
        setNameOfCompany(event.target.value)
    }

    const jobTitleChange = (event) => {
        console.log(event.target.value);
        setJobTitle(event.target.value)
    }

    const jobUrlChange = (event) => {
        console.log(event.target.value);
        setJobUrl(event.target.value)
    }

    const dateResponseChange = (event) => {
        console.log(event.target.value);
        setDateResponse(event.target.value)
    }

    const jobAddResourseChange = (event) => {
        console.log(event.target.value);
        setJobAddResourse(event.target.value)
    }

    const applicationStatusChange = (event) => {
        console.log(event.target.value);
        setApplicationStatus(event.target.value)
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" required onChange={nameOfCompanyChange} value={nameOfCompany} ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" required onChange={jobTitleChange} value={jobTitle}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Url</label>
                    <input type="text" className="form-control" required onChange={jobUrlChange} value={jobUrl}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of response</label>
                    <input type="text" className="form-control" onChange={dateResponseChange} value={dateResponse}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Resourse of Job Add</label>
                    <input type="text" className="form-control" onChange={jobAddResourseChange} value={jobAddResourse}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Application Status</label>
                    <input type="text" className="form-control" onChange={applicationStatusChange} value={applicationStatus}></input>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitApplication}>Add Application</button>
            </form>
        </div>
    )
}

export default NewApplicationForm