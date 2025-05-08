import React, { useEffect, useState } from 'react';
import './howItWorks.css';

const HowItWorks = () => {
        const [isScrolled, setIsScrolled] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 350);
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <div>
            <h1 className='h-in-how-it-works'>How It Works</h1>
            <div className="how-it-works">
                <div className={`step ${isScrolled ? 'scrolled' : ''}` } id='step1'>
                    <h2>Step 1</h2>
                    <p>Pick a room or start your own private space</p>
                </div>
                <div className={`step ${isScrolled ? 'scrolled' : ''}` } id='step2'>
                    <h2>Step 2</h2>
                    <p>Start chatting with strangers</p>
                </div>
                <div className={`step ${isScrolled ? 'scrolled' : ''}` } id='step3'>
                    <h2>Step 3</h2>
                    <p>Make new friends!</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;