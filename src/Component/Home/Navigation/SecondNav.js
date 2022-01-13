import React from 'react';
import './SecondNav.css'

const SecondNav = () => {
    return (
        <div className='pt-5 container'>
            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-2'>
                <ul className='secondNav'>
                    <li>All post (32)</li>
                    <li>Article</li>
                    <li>Event</li>
                    <li>Education</li>
                    <li>Job</li>

                </ul>
           
                <ul className='secondNavL'>
                    <li style={{backgroundColor:"grey"}}>Write a Post <i class="fas fa-caret-down "></i></li>
                    <li style={{backgroundColor:'#2F6CE5'}}><i class="fas fa-users"></i> Join group</li>
                </ul>

            </div>
            < hr  />
        </div>
    );
};

export default SecondNav;