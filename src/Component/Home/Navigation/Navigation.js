import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>
        <div className='row row-cols-lg-3 row-cols-md-3 py-5 mx-auto text-center container-fluid navigationLg'>
            <div>
            <h1><span style={{color:"green"}}>ATG</span>, W<i style={{color:"green"}}  class="fas fa-cog "></i>RLD</h1>
            </div>
            <div>
                
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            {/* <span class="input-group-text" id="basic-addon2">@example.com</span> */}
            </div>
            </div>
            <div>
                <h3>Create account ,<span style={{color:"blue"}}>it's free</span></h3>
            </div>
        </div>
        <div className='navigationSm px-2'>
            <ul className='nvaSm '>
                <li> <i class="fas fa-square"></i></li>
                <li><i class="fas fa-circle"></i></li>
                <li className='fs-1 '><i class="fas fa-caret-down "></i></li>
            </ul>
        </div>
        </div>
    );
};

export default Navigation;