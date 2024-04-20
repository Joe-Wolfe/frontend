import { v4 as uuidv4 } from 'uuid';
import './ComponentList.css';

function ComponentList({ dataArr, Component }) {

    return (
        <div>
            {dataArr.map((data) => {
                return <Component data={data} key={uuidv4()} />
            })}

        </div>
    );
}

export default ComponentList;