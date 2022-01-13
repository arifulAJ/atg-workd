import React from 'react';
import './Cards.css'

const Cards = () => {
    return (
        <div className='row row-cols-lg-2 container mx-auto pt-3'>
            <div>
             <div class="col">
            <div class="card">
            <img  src="https://images.unsplash.com/photo-1547016058-bc22b729f0bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&w=1000&q=80" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei….</p>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"gray",width:""}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             <div class="col">
            <div class="card">
            <img  src="https://images.unsplash.com/photo-1547016058-bc22b729f0bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&w=1000&q=80" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei….</p>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"gray",width:""}}><i class="fas fa-share-alt"></i></li>
                    </ul>
                </div>
            </div>
         </div> 
         </div>
             <div class="col">
            <div class="card">
            <img  src="https://images.unsplash.com/photo-1547016058-bc22b729f0bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&w=1000&q=80" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei….</p>
                <div >
                    <ul className='cardFeet'>
                        <li > <img className='images' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" /></li>
                        <li><i class="fas fa-eye"></i> 1.4k views</li>
                        <li style={{backgroundColor:"gray",width:""}}><i class="fas fa-share-alt"></i></li>
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