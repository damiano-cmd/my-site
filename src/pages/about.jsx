import React from 'react';
import MB from '../images/codeScreen.png';
import '../styles/about.css'

export default function About () {
    return (
        <div>
            <header className="aboutBG" >
                <div></div>
                <img src={MB} />
                <h1>Text</h1>
                <p>Text input</p>
            </header>
        </div>
    )
}