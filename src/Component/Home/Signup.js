import React from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"

const Signup = () => {
    return (
        <div className='signup'>
            
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">sign up here </button>
{/* 

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div> */}
           <div className='styleSm '>
           
            

{/*            
            <button type="" class="btn btn-black text-white border buttonsmall mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Join Group</button> */}
            </div>

     <div class="modal stylebox  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
      <div class="modal-header">
         
        <h5 class="modal-title" id="exampleModalLabel">Sign up </h5>
        <p style={{marginLeft:"auto"}}>if don't  have an account? <Link to="/home">resister</Link> </p>
        <button   type="button" class=" croseButton" data-bs-dismiss="modal" aria-label="Close">
        <i class="fas fa-times "></i>

        </button>
      </div>
      <div class="modal-body">
        <form>
          {/* <div style={{display:"flex"}} class=" ">
            
            <input style={{width:"40%"}} type="text" class="form-control pr-2" placeholder="first-name"/>
          
            <input style={{width:"40%"}} type="text" class="form-control" placeholder="last-name"/>
          </div> */}
          <div class="mb-3">
          <input class="form-control" type="email" name="" placeholder=' Enter Your email' id="" /> 
          <input class="form-control" type="password" name="" placeholder=' Enter Your Password' id="" />
          <input class="form-control" type="password" name="" placeholder=' conform Your Password' id="" />
          <p className='creatAccount'>Resister</p>
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
</div>

        
    );
    
};

export default Signup;