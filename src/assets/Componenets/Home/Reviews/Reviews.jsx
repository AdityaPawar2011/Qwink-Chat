import React, { useRef, useEffect } from 'react';
import './Reviews.css';
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Reviews = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const slider = scrollRef.current;
    
        if (!slider) return;
    
        const interval = setInterval(() => {
            const card = slider.querySelector('.review-card');
            if (!card) return;
    
            const cardWidth = card.offsetWidth + 20; // 20px gap
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    
            console.log('Current scrollLeft:', slider.scrollLeft);
            console.log('Max scrollLeft:', maxScrollLeft);
    
            if (slider.scrollLeft + cardWidth >= maxScrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 3000);
    
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="reviews">
            <h2 className="reviews-title">What Our Users Say</h2>
            <div className="reviews-list">
                <div className="review-card" id='review-card-1'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"I've tried many similar apps before, but this one truly stands out. It's intuitive, efficient, and constantly gets better with updates. Highly recommended for anyone who values productivity."</p>
                    <h4>- User 1</h4>
                </div>
                <div className="review-card" id='review-card-2'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"The attention to detail and the smooth user experience are what keep me coming back. This app makes complex tasks simple and has improved my daily workflow tremendously."</p>
                    <h4>- User 2</h4>
                </div>
                <div className="review-card" id='review-card-3'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"A sleek design combined with powerful features – that’s what I love most about this app. It’s been an essential part of my routine ever since I downloaded it."</p>
                    <h4>- User 3</h4>
                </div>
                <div className="review-card" id='review-card-4'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"The developers clearly care about their users. Every update brings thoughtful improvements, and the support team is quick and helpful. It's refreshing to see this kind of dedication."</p>
                    <h4>- User 4</h4>
                </div>
                <div className="review-card" id='review-card-5'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"It’s rare to find an app that balances functionality and design so well. Whether I’m at work or managing personal tasks, this app has made everything easier."</p>
                    <h4>- User 5</h4>
                </div>
                <div className="review-card" id='review-card-6'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"I’ve seen noticeable improvements in my productivity since using this app. It's intuitive, responsive, and packed with useful tools. Honestly, I wish I found it sooner!"</p>
                    <h4>- User 6</h4>
                </div>
                <div className="review-card" id='review-card-7'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"This app is a lifesaver. From task management to reminders, it does it all. I never miss a deadline anymore, and everything stays organized with zero hassle."</p>
                    <h4>- User 7</h4>
                </div>
                <div className="review-card" id='review-card-8'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"I was skeptical at first, but after just a week of use, I’m hooked. It’s streamlined so many parts of my day and helped me become way more efficient."</p>
                    <h4>- User 8</h4>
                </div>
                <div className="review-card" id='review-card-9'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"Fantastic app! The user interface is clean and easy to navigate. Even if you're not tech-savvy, you'll have no trouble using it effectively. Definitely worth the download."</p>
                    <h4>- User 9</h4>
                </div>
                <div className="review-card" id='review-card-10'>
                    <div className="quote">
                        <BiSolidQuoteSingleLeft className='quote1'/>
                        <BiSolidQuoteSingleLeft className='quote2'/>
                    </div>
                    <p>"From planning projects to collaborating with my team, this app handles everything smoothly. It's fast, reliable, and actually fun to use. Can't recommend it enough!"</p>
                    <h4>- User 10</h4>
                </div>
            </div>
            <h2 className='h2'>Stay Connected to Enjoy More</h2>

        </div>
    );
}

export default Reviews;
