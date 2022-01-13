import React from 'react';
import './Carousele.css'

const Carosule = () => {
    return (
        <div style={{height:"420px"}} className='  backgroundSet container-fluid'>
            <div className='styleSm'>
            <button className='btn btn-black text-white border px-5 py-2 mt-2'>Join Group</button>
            </div>
           <div className=' text-white '>
             
           <h1 className='fixedPlace  ' >Computer Engineering</h1><br />
            <p className='fixedPlace  '>142, 765 computer engineering follow this</p>
           </div>
        </div>
    );
};

export default Carosule;