import { Card, CardBody, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './CompanyCard.css';

function Company({ data }) {

    const Navigate = useNavigate();

    function handleClick() {
        Navigate(`/companies/${data.handle}`);
    }

    return (
        <Card onClick={handleClick}>
            <CardBody>
                <div className='company-title'>{data.name}</div>
                <hr />
                <p>{data.description}</p>
            </CardBody>
        </Card>
    );
}

export default Company;