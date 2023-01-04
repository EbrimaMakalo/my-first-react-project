import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//App function that contains all the content of the app
function App () {
    return (
        <div className='whole-page'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDom.render(<App />, document.getElementById("root"));
