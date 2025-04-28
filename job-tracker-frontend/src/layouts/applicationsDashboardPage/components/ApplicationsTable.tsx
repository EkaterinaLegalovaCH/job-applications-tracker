import ApplicationModel from '../../../models/ApplicationModel';
import { ApplicationRow } from './ApplicationRow';


export const ApplicationsTable: React.FC<{applications: ApplicationModel[], deleteApplication: Function}> = (props) => {
    
    return (
        <table className="table table-hover">
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
                        key={application.rowNumber}
                        application={application}
                    />
                ))}
                
            </tbody>
        </table>
    )
}

