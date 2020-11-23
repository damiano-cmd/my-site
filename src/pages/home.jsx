import React from 'react';
import MB from '../images/codeScreen.png';
import '../styles/home.css';
import Services from '../components/service';

export default function Home (){
    return(
        <div className="page" >
            <header className="landBG" >
                <div></div>
                <img src={MB} />
                <h1>Enterportfolio</h1>
            </header>
            <main>
                <div className="tldr" >
                    <h1>Summery</h1>
                    <p>My text here</p>
                </div>
                <div className="navbg" />
                <h2>My Services</h2>
                <Services />
            </main>
        </div>
    )
}