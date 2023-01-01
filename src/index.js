import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import info from './images/info.JPG'
import spacex from './images/spacex.JPG'

//nav bar component
function Header() {
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


//main component
function Main() {
    return (
        <div>
            <button className='back-button'>
                <i class="fa-sharp fa-solid fa-arrow-left" id='bbi'></i>Back
            </button>

            <div className='top-span'>
                <div className='span-extra'>
                    <div>
                        <h1>Earth - G-001</h1>
                        <div className='departure-return-date'>
                            <p><b>Departure:</b></p>
                            <p className='dr-date'>15 Dec, 2021</p>
                        </div>
                    </div>
                    <h1><i class="fa-sharp fa-solid fa-arrow-right-arrow-left" id='right-left-arrow'></i></h1>
                    <div className='another-display'>
                        <h1>Mars - HW023</h1>
                        <div className='departure-return-date'>
                            <p><b>Return:</b></p>
                            <p className='dr-date'>10 May, 2022</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='top-span-payment-h1'>$9,650</h1>
                    <p className='top-span-date'>per 1 person</p>
                </div>
            </div>

            <div className='middle-span'>
                <div>
                    <div className='outer'>
                        <div>
                            <div className='icon-text-spacing'>
                                <i class="fa-sharp fa-solid fa-rocket" id='icon1-spacing'></i>
                                <h1>Departure</h1>
                            </div>
                            <p className='outer-date'>Flight date: 15 Dec, 2021</p>
                        </div>
                        <button className='change-button'>Change</button>
                    </div>
                    <div className='inner'>
                        <div className='inner-extra-spacing'>
                            <div>
                                <p className='inner-date'>15 Dec, 2021</p>
                                <h1>03:55</h1>
                            </div>
                            <p><i class="fa-solid fa-arrow-right-long" id='arrow-div-spacing'></i></p> 
                            <div>
                                <p className='inner-date'>16 Jan, 2022</p>
                                <h1>15:00</h1>
                            </div>
                        </div>
                        <div>
                            <p className='inner-date'>31 days in flight</p>
                            <h1 className='inner-date-payment'>$4,800</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom-span'>
                <div>
                    <div className='outer'>
                        <div>
                            <div className='icon-text-spacing'>
                                <i class="fa-sharp fa-solid fa-rocket fa-flip-vertical" id='icon2-spacing'></i>
                                <h1>Return</h1>
                            </div>
                            <p className='outer-date'>Flight date: 10 May, 2022</p>
                        </div>
                        <button className='change-button'>Change</button>
                    </div>
                    <div className='inner'>
                        <div className='inner-extra-spacing'>
                            <div>
                                <p className='inner-date'>10 April, 2022</p>
                                <h1>03:55</h1>
                            </div>
                            <p><i class="fa-solid fa-arrow-right-long" id='arrow-div-spacing'></i></p>
                            <div>
                                <p className='inner-date'>10 May, 2022</p>
                                <h1>15:00</h1>
                            </div>
                        </div>
                        <div>
                            <p className='inner-date'>30 days in flight</p>
                            <h1 className='inner-date-payment'>$4,850</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

//footer component
function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-div'>
                <img src={info} className='info-image' alt='icon-image' />
                <p className='footer-p'>You cannot book a one way ticket. <br /> The ticket price includes a round-trip flight.</p>
            </div>
            <button className='next-step-button'>Next step</button>
        </footer>
    )
}

//function page, to contains all the content of the app
function Page () {
    return (
        <div className='whole-page'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDom.render(<Page />, document.getElementById("root"));