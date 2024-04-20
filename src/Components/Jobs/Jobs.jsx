import SearchBar from "../SearchBar/SearchBar";
import ComponentList from "../ComponentList/ComponentList";
import Job from "../Job/Job";
import { searchJobs } from "../../API";
import { useState } from 'react';

function Jobs({ jobArr }) {

    const [filteredJobs, setFilteredJobs] = useState(jobArr)

    function onSearch(searchTerm) {
        searchJobs(searchTerm).then((results) => {
            setFilteredJobs(results)
        })
    }

    return (
        <div>
            <h1 style={{ marginLeft: '10px' }}>Jobs</h1>
            <SearchBar onSearch={onSearch} />
            <ComponentList dataArr={filteredJobs} Component={Job} />


        </div>
    );
}

export default Jobs;