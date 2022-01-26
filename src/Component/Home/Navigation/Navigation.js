import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>
        <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 py-5 mx-auto text-center container-fluid navigationLg '>
            <div>
            <h1><span style={{color:"green"}}>ATG</span>, W<i style={{color:"green"}}  class="fas fa-cog "></i>RLD</h1>
            </div>
            <div>
                
            <div style={{width:"30vw"}} class="input-group mb-3 mx-auto">
                <p style={{border:"1px solid  black",borderRadius:"50px", padding:"3px",background: "#F2F2F2"}}> <i class="fas fa-search"></i> Search for your favorite groups in ATG</p>
            
            {/* <input   type="text" class="form-control" placeholder="{} Search for your favorite groups in ATG" aria-label="Recipient's username" aria-describedby="basic-addon2"/> */}
            
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