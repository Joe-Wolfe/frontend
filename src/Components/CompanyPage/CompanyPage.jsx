import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCompany } from "../../API";

import ComponentList from "../ComponentList/ComponentList";
import Job from "../Job/Job";


function CompanyPage() {
    const { companyName } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        getCompany(companyName).then((company) => {
            setCompany(company);
        });
    }, [companyName]);

    if (!company) {
        return <p>Loading...</p>;
    }

    console.log(company);

    return (
        <div>
            <h1 style={{ marginLeft: '10px' }}>{company.name}</h1>
            <p style={{ marginLeft: '10px' }}>{company.description}</p>

            <h3 style={{ marginLeft: '10px' }}>Available Jobs</h3>
            <ComponentList dataArr={company.jobs} Component={Job} />

        </div>
    );
}

export default CompanyPage;