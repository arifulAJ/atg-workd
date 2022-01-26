import React from 'react';
import Cards from './CardCopmonent/Cards';
import Carosule from './Carosule/Carosule';
import Navigation from './Navigation/Navigation';
import SecondNav from './Navigation/SecondNav';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Carosule/>
            <SecondNav/>
            <Cards/>
        </div>
    );
};

export default Home;