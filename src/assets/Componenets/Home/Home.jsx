import React, { useEffect, useState } from 'react';
import './home.css';
import Hero from './HeroSection/Hero';
import HowItWorks from './How_it_works/HowItWorks';
import SimilarRooms from './Similar_rooms/SimilarRooms';
import Specifications from './Specifications/Specifications';
import Reviews from './Reviews/Reviews';

const Home = () => {


    return (
        <div className='home'>
            <Hero />
            <div className="hr"></div>
            <HowItWorks />
            <div className="hr" id='after-h-t-w'></div>
            <SimilarRooms />
            <div className="hr"></div>
            <Specifications />
            <div className="hr"></div>
            <Reviews />
        </div>
    );
};

export default Home;
