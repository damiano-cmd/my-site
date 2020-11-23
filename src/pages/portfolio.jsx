import React from 'react';
import '../styles/portfolio.css';
import Console from '../images/Console.png';
import QtBS from '../images/QtBS4.png';
import animeJS from '../images/animeJS.png';
import trace from '../images/Trace.png';

export default function Portfolio () {
    return(
        <div className="portfolio" >
            <h2>My Project list</h2>
            <div>
                <article>
                    <img src={Console} />
                    <h3>Simple Custom Console</h3>
                    <p>Made this console in python useing os and requests.</p>
                </article>
                <article>
                    <img src={QtBS} />
                    <h3>BeautifulSoupGUI</h3>
                    <p>This is a GUI for BeautifulSoup4 build with PyQt5, it scrapes the web and return the results.</p>
                </article>
                <article>
                    <img src={animeJS} />
                    <h3>AnimeJS animations</h3>
                    <p>This site contains animeJS animations I made.</p>
                </article>
                <article>
                    <img src={trace} />
                    <h3>Trace</h3>
                    <p>A platform that is shortens urls and tracks IPs.</p>
                </article>
            </div>
        </div>
    )
}