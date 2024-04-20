import { Card, CardBody, CardTitle } from 'reactstrap';
import { useState } from 'react';

import './Job.css';

function Job({ data }) {

    const [applied, setApplied] = useState(JSON.parse(localStorage.getItem('appliedJobs'))?.includes(data.id) || false);

    function handleClick() {
        setApplied(!applied);

        let appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

        if (!applied) {
            // If the job hasn't been applied for, add it to local storage
            appliedJobs.push(data.id);
        } else {
            // If the job has been applied for, remove it from local storage
            appliedJobs = appliedJobs.filter(id => id !== data.id);
        }

        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <div className='job-title'>{data.title}</div>
                    <div className='job-company'>{data.companyHandle}</div>
                    <hr />
                    <CardBody>
                        {data.salary === null ? <p></p> : <p><strong>Salary:</strong> {data.salary}</p>}
                        {data.equity === null ? <p></p> : <p><strong>Equity:</strong> {data.equity}</p>}
                        <button onClick={handleClick}>
                            {applied ? 'Applied' : 'Apply'}
                        </button>
                    </CardBody>

                </CardBody>
            </Card>
        </div >
    );
}

export default Job;