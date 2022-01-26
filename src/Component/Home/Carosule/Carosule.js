import React from 'react';
import { Link } from 'react-router-dom';
import './Carousele.css'

const Carosule = () => {
    return (
        <div className='mgpt  backgroundSet container-fluid'>
            <div className='styleSm '>
            {/* <button className='btn btn-black text-white border buttonsmall '>Join Group</button> */}
            

           
            <button type="" class="btn btn-black text-white border buttonsmall mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Join Group</button>
            </div>

<div class="modal stylebox  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
      <div class="modal-header">
         
        <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
        <p style={{marginLeft:"auto"}}>Already have an account? <Link to="/signIn"><button type="" class="btn  border buttonsmall " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> signup</button></Link> </p>
        
        
        <button   type="button" class=" croseButton" data-bs-dismiss="modal" aria-label="Close">
        <i class="fas fa-times "></i>

        </button>
      </div>
      <div class="modal-body">
        <form>
          <div style={{display:"flex"}} class=" ">
            
            <input style={{width:"40%"}} type="text" class="form-control pr-2" placeholder="first-name"/>
          
            <input style={{width:"40%"}} type="text" class="form-control" placeholder="last-name"/>
          </div>
          <div class="mb-3">
          <input class="form-control" type="email" name="" placeholder=' Enter Your email' id="" /> 
          <input class="form-control" type="password" name="" placeholder=' Enter Your Password' id="" />
          <input class="form-control" type="password" name="" placeholder=' conform Your Password' id="" />
          <p className='creatAccount'>Create account</p>
          <p className='creatAccounts'> <i class="fab fa-facebook-f"></i> Sign up with Facebook</p>
          <p className='creatAccounts'> <i class="fab fa-google"></i> Sign up with Gmail</p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
           <div className=' text-white '>
             
           <h1 className='fixedPlace h1font ' >Computer Engineering</h1><br />
            <p className='fixedPlace pfont '>142, 765 computer engineering follow this</p>
           </div>
        </div>
    );
};

export default Carosule;