import React from 'react';
import './Cards.css'

const Cards = () => {
   
    function showMenu(){
        let add = document.getElementsById("addPost")
        if (add.style.display === "none" ){
            add.style.display = "block"
        } else {
            add.style.display = "none"
        }
    }
 

    return (
        <div className='row row-cols-lg-2 pb-5  container mx-auto pt-3'>
            <div>
             <div class="col pb-4">
            <div class="card">
            <img  src="https://i.ibb.co/CVBLVFn/atcn.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <p >✍️ Article</p>
                <div className='newAgent'>
                <h5 class="card-title w-75">What if famous brands had regular fonts? Meet RegulaBrands!  </h5> 
                 <span className='threeDot'>
                 <div class="accordion" id="accordionExample">
                <div class="">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="threeDotes" type="" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                    </h2>
                    <div id="collapseTwo" class=" collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="">
                    <ul id='addPost'  className='listOf '>
                                    <li>Edit</li>
                    <li>Report</li>
                    <li>Option 3</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                
                     </span>
                </div>
                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei….</p>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://i.ibb.co/Kr09bDd/Rectangle-3.png" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"#EBEBEB",width:"30px",textAlign:"center"}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             <div class="col">
            <div class="card">
            <img  src="https://i.ibb.co/h8NsT98/atcb.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <p>🔬️ Education</p>
                <div className='newAgent'>
                <h5 class="card-title w-75">Tax Benefits for Investment under National Pension Scheme launched by Government  </h5>  
                <span className='threeDot'>
                <div class="accordion" id="accordionExample">
                <div class="">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="threeDotes" type="" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                    </h2>
                    <div id="collapseThree" class=" collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="">
                    <ul id='addPost'  className='listOf '>
                                    <li>Edit</li>
                    <li>Report</li>
                    <li>Option 3</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                
                    </span>
                </div>
               
                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei….</p>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://i.ibb.co/HB4Dhw4/Rectangle-3-1.png" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"#EBEBEB",width:"30px",textAlign:"center"}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             <div class="col pb-4 pt-4">
            <div class="card">
            <img  src="https://i.ibb.co/gDhKz2d/atgc.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <p>🗓️ Meetup</p>
                <div className='newAgent'>
                <h5 class="card-title w-75">Finance & Investment Elite Social Mixer @Lujiazui  </h5> 
                 <span className='threeDot'>
                 <div class="accordion" id="accordionExample">
                <div class="">
                    <h2 class="accordion-header" id="headingFour">
                    <button class="threeDotes" type="" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                    </h2>
                    <div id="collapseFour" class=" collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="">
                    <ul id='addPost'  className='listOf '>
                                    <li>Edit</li>
                    <li>Report</li>
                    <li>Option 3</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                
                     </span>
                </div>
               <div  className='  w-75 mx-auto text-center   p-3'>
              
               <p className='clickable'>visit website</p>
               </div>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://i.ibb.co/sbFm7B2/Rectangle-3-2.png" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"#EBEBEB",width:"30px",textAlign:"center"}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             <div class="col">
            <div class="card">
            {/* <img  src="https://i.ibb.co/gDhKz2d/atgc.png" class="card-img-top" alt="..."/> */}
            <div class="card-body">
                <p>💼️ Job</p>
                <div className='newAgent'>
                <h5 class="card-title w-75">Software Developer </h5>
                  <span  className='threeDot'>
                     
                <div class="accordion" id="accordionExample">
                <div class="">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="threeDotes" type="" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                    </h2>
                    <div id="collapseOne" class=" collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="">
                    <ul id='addPost'  className='listOf '>
                    <li>Edit</li>
                    <li>Report</li>
                    <li>Option 3</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                
                    </span>
                </div>
                <div  className='  w-75 mx-auto text-center   p-3'>
              
               <p className='clickables'>Apply on Times jobs</p>
               </div>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://i.ibb.co/ZdwfzwT/Rectangle-3-3.png" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"#EBEBEB",width:"30px",textAlign:"center"}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             
             
          </div>
         <div >
            <div className='w-50 mx-auto '>
            <p ><i class="fas fa-map-marker-alt"></i>  Noida ,India <i class="fas fa-pen pen"></i></p>
            <hr />
            <p className='pt-5'><i class="fas fa-exclamation-circle"></i> your location help us serve better <br /> extend and personalized experience</p>

            </div>
         </div>
        </div>
    );
};

export default Cards;