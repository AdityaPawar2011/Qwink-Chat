import React, { useEffect, useState } from 'react';
import { IoIosPeople } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { FaPalette } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

import './specifications.css';

const Specifications = () => {
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="specifications">
            <h1>Specifications</h1>
            <div className="specifications-container">
                <div className={`specifications-item left ${isScrolled ? 'scrolled' : ''}` }>
                    <IoIosPeople className="icon-in-specs"/>      
                    <h2>Text Chat Rooms</h2>         
                    <p>Enjoy fast and simple real-time text chats. No webcam? No worries — just type and vibe.</p>
                </div>
                <div className={`specifications-item mid ${isScrolled ? 'scrolled' : ''}` }>
                    <IoPeopleSharp className="icon-in-specs"/> 
                    <h2>Private & Public Rooms</h2>        
                    <p>Hop into public discussions or create private rooms to chat with just your circle — your space, your rules.</p>
                </div>
                <div className={`specifications-item right ${isScrolled ? 'scrolled' : ''}` }>
                    <FaUserLock className="icon-in-specs"/> 
                    <h2>Anonymous & Secure</h2>        
                    <p>Join as a guest or stay anonymous. We don’t ask for accounts — just good vibes and real talks.</p>
                </div>
                <div className={`specifications-item left ${isScrolled ? 'scrolled' : ''}` }>
                    <IoIosFlash className="icon-in-specs"/> 
                    <h2>Real-Time Messaging</h2>        
                    <p>Built with WebSockets for smooth, live chatting — zero lag, maximum flow.</p>
                </div>
                <div className={`specifications-item mid ${isScrolled ? 'scrolled' : ''}` }>
                    <FaPalette className="icon-in-specs"/> 
                    <h2>Customizable Themes</h2>        
                    <p>Choose your vibe with customizable themes. Make your chat room feel like home.</p>
                </div>
                <div className={`specifications-item right ${isScrolled ? 'scrolled' : ''}` }>
                    <IoPersonAddSharp className="icon-in-specs"/> 
                    <h2>Friends & History</h2>        
                    <p>Found someone you vibe with? Send a friend request and stay connected beyond just one chat. Build your own list of cool connections.</p>
                </div>
            </div>
        </div>
    );
}

export default Specifications;
