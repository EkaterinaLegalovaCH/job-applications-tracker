import ApplicationModel from '../../../models/ApplicationModel';
import { ApplicationRow } from './ApplicationRow';
import "./ApplicationsTable.css";


export const ApplicationsTable: React.FC<{applications: ApplicationModel[], deleteApplication: Function}> = (props) => {
    
    return (
        <div className="table_container">
        <table className="applications_table">
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Applying Date</th>
                <th scope='col'>Company Name</th>
                <th scope='col'>Job Title</th>
                <th scope='col'>Response Date</th>
                <th scope='col'>Resourse</th>
                <th scope='col'>Satus</th>
              </tr>
            </thead>
            <tbody>

                {props.applications.map(application => (
                    <ApplicationRow
                        key={application.id}
                        application={application}
                    />
                ))}
                
            </tbody>
        </table>
        </div>
    )
}

