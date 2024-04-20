import SearchBar from '../SearchBar/SearchBar';
import ComponentList from '../ComponentList/ComponentList';
import CompanyCard from '../CompanyCard/CompanyCard';
import { useState } from 'react';
import { searchCompanies } from '../../API';

function Companies({ companyArr }) {

    const [filteredCompanies, setFilteredCompanies] = useState(companyArr)

    const onSearch = (searchTerm) => {
        searchCompanies(searchTerm).then((results) => {
            setFilteredCompanies(results)
        })
    }

    return (
        <div>
            <h1 style={{ marginLeft: '10px' }}>All Companies</h1>
            <SearchBar onSearch={onSearch} />
            <ComponentList dataArr={filteredCompanies} Component={CompanyCard} />

        </div>
    );
}

export default Companies;