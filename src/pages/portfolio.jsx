import React from 'react';
import '../styles/portfolio.css';
import Console from '../images/Console.png';
import QtBS from '../images/QtBS4.png';
import trace from '../images/Trace.png';
import sbbe from '../images/SBBE.png'

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
                    <img src={trace} />
                    <h3>Trace</h3>
                    <p>A platform that is shortens urls and tracks IPs. <br/>
                        <a href="https://traceer.herokuapp.com/">Link</a>
                    </p>
                </article>
                <article>
                    <img src={sbbe} />
                    <h3>Shadow Browser</h3>
                    <p>
                        Browser extention that decrypts any know encrypeted text on a page and looks for encryption keys. <br/>
                        <a href="https://github.com/damiano-cmd/ShadowBrowser">Gitrepo</a>
                    </p>
                </article>
            </div>
        </div>
    )
}