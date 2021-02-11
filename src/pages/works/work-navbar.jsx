import React from 'react';
import { Link } from 'react-router-dom';


const WorkNavbar = () => {

return (
   

    <nav>
        <Link to="/work/platon-study-case" className="mr-3">Platon</Link>
        <Link to="/work/solane-study-case" className="mr-3">Solane</Link>
        <Link to="/work/sedal-study-case">Sedal</Link>
    </nav>
)

}

export default WorkNavbar;