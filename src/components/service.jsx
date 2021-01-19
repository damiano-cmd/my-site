import React from 'react';
import '../styles/serv.css';
import pylogo from '../images/pyLogo.png';
import websimp from '../images/basicWebApp.png';
import reactnext from '../images/react-next.png';
import nodeexpress from '../images/node-express.png';
import db from '../images/mongodb.png';
import bel from '../images/BEL.png';


export default function Services () {
    return (
        <div className="serv" >
        <article>
            <div>
                <img src={pylogo} />
            </div>
            <h2>Python</h2>
            <p>I know basics of Python and additional libraries. I can make a webscraper, desktop or console app. Contact me for more details. </p>
        </article>
        <article>
            <div>
                <img src={websimp} />
            </div>
            <h2>Static Web App</h2>
            <p>Building a static HTML, CSS and JavaScript site, with no frameworks. </p>
        </article>
        <article>
            <div>
                <img src={reactnext} />
            </div>
            <h2>React w/ NextJS</h2>
            <p>
                I can build you a frontend UI with either React (for webapps/sites up to 7 page or less) or 
                with NextJS (for bigger webapps with more pages).
            </p>
        </article>
        <article>
            <div>
                <img src={nodeexpress} />
            </div>
            <h2>NodeJS w/Express</h2>
            <p>
                With NodeJS I can build a backend server (with API) for your webapp/website and 
                hook it up to a MongoDB database.
            </p>
        </article>
        <article>
            <div>
                <img src={db} />
            </div>
            <h2>MongoDB</h2>
            <p>I know how to manage a MongoDB database and use MongoDB Atlas. </p>
        </article>
        <article>
            <div>
                <img src={bel} />
            </div>
            <h2>Browser Extention</h2>
            <p>I know how to make a custom browser extention for chrome, firefox ...</p>
        </article>
    </div>
    )
}