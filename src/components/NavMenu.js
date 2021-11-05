import React from 'react';

import {Link} from 'react-scroll';

export default function NavMenu(){
    return(
        <div id="navOpen">
            <input type="checkbox"/>
            <span> </span>
            <span> </span>
            <span> </span>

            <ul id="menu">
            <Link activeclass="active" to="aboutSection" spy={true} smooth={true} duration={700}><li>About</li></Link>
            <Link activeclass="active" to="projectSection" spy={true} smooth={true} duration={700}><li>Projects</li></Link>
            <Link activeclass="active" to="contactSection" spy={true} smooth={true} duration={700}><li>Contact</li></Link>
            </ul>

        </div>
    );
}