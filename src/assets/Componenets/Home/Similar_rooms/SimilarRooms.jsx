import React from 'react';
import './similarRooms.css';
import img from './../../../img/similar-interests.png';
const SimilarRooms = () => {
    return (
        <div className='similar-rooms'>
            <div className="left-in-similar-rooms">
                <h1 className= 'h-in-similar-rooms'>Chat with Random Strangers in your favourite topics</h1>
                <p>Search by topics and Talk to strangers who like what yiu like, Chat in rooms on the topics you are interested in.</p>
            </div>
            <div className="right-in-similar-interests">
                <img src={img} alt="" className='img-in-similar-rooms'/>
            </div>

        </div>
    );
}

export default SimilarRooms;
