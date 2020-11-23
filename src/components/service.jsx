import React from 'react';
import '../styles/serv.css';
import pylogo from '../images/pyLogo.png';
import websimp from '../images/basicWebApp.png';
import reactnext from '../images/react-next.png';
import nodeexpress from '../images/node-express.png';
import db from '../images/mongodb.png';


export default function Services () {
    return (
        <div className="serv" >
        <article>
            <div>
                <img src={pylogo} />
            </div>
            <h2>Python</h2>
            <p>I know basics of python w/ BS4, sockets, json, requests and PyQT5. </p>
        </article>
        <article>
            <div>
                <img src={websimp} />
            </div>
            <h2>Static Web App</h2>
            <p>With HTML, CSS w/Sass, JavaScript i can make a simple or complex static web app. </p>
        </article>
        <article>
            <div>
                <img src={reactnext} />
            </div>
            <h2>React w/ NextJS</h2>
            <p>
                With React I can make a single page app with client side routing or
                a server side rendering app thats better for SEO and reduce the client side
                load.
            </p>
        </article>
        <article>
            <div>
                <img src={nodeexpress} />
            </div>
            <h2>NodeJS w/Express</h2>
            <p>
                With NodeJS and Express I can make server for handel serving pages and 
                custom APIs.
            </p>
        </article>
        <article>
            <div>
                <img src={db} />
            </div>
            <h2>MongoDB</h2>
            <p>I can manage a mongo database and integrate it in to a node app/server. </p>
        </article>
    </div>
    )
}