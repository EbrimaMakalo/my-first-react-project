import React from "react";
import info from './images/info.JPG'

//footer component
export default function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-div'>
                <img src={info} className='info-img' alt='icon-img' />
                <p className='footer-p'>You cannot book a one way ticket. <br /> The ticket price includes a round-trip flight.</p>
            </div>
            <button className='next-step-button'>Next step</button>
        </footer>
    )
}
