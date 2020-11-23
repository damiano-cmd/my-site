import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/nav.css'
import Logo from '../images/LogoOutline.png';

export default function Navigation () {
    const [styles, setStyles] = useState({ right: "-100%" })
    function slide (){
        if (styles.right == '-100%' ) {
            setStyles({ right: '0'})
        } else {
            setStyles({ right: '-100%' })
        }
    }
    return(
        <nav className='nav' >
            <img src={Logo} alt="No img"/>
            <div style={styles} className='navlinks' onClick={slide} >
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/services" >Services</Link></li>
                    <li><Link to="/portfolio" >Portfolio</Link></li>
                </ul>
            </div>
            <button className="menu" onClick={slide}>
                <div id="q" ></div>
                <div id="w" ></div>
                <div id="e" ></div>
            </button>
        </nav>
    )
}