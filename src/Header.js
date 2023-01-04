import React from "react";
import spacex from './images/spacex.JPG';

//nav bar component
export default function Header() {
    return (
        <header>
            <nav className = 'nav'>
                <img src={spacex} className='spacex-img' alt='spacex-img' />
                <ul className='nav-items'>
                    <li>Falcon 9</li>
                    <li>Falcon Heavy</li>
                    <li>Dragon</li>
                    <li>Starship</li>
                    <li>Rideshare</li>
                </ul>
                <button className='request-button'>Request a flight</button>
            </nav>
        </header>
    )
}
