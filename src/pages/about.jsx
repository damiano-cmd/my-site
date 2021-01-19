import React from 'react';
import MB from '../images/codeScreen.png';
import '../styles/about.css'
//</a> and <a href="">freelancer.com</a>
export default function About () {
    return (
        <div>
            <header className="aboutBG" >
                <div>
                    <h1>About me</h1>
                    <p>
                        I am a freelancer, my specialties consist of Full Stack Web Development and Python programming. I have a <a href="https://github.com/damiano-cmd">github
                        repository</a>, there I have some of my projects. My knowlage consistes of Frontend UI design and development in React w/ NextJS, Backend database management 
                        and server development (that includes APIs), Python scripting and programming and building Chrome and Browser extentions, My more in depth knowlage consist 
                        of HTML, CSS, JavaScript, ReactJS w/NextJS, some JavaScript dependencies, Node.js, ExpressJS, a plethora of Node.js dependencies for server development, the 
                        basics of Python programming and making Chrome and other browser extentions. For example this site was built in ReactJS.
                        <h2>Contacts</h2>
                        You can shoot me an email at damiandeni.biz@gmail.com with your questions and job offers, we can talk via text, email or call to see what you need and see what the best solution.                            
                        Also you can find me on <a href="https://www.fiverr.com/damiandenibiz?up_rollout=true">fiverr</a>.
                        <h2>Pricing</h2>
                        We can debate on the pirce, it mostly depents on what you want on you website and how expensive it si. For reference for a 3 page React website, 
                        fully designd, fully customised and fully reactive (and fancy) the price start's around at 120$ and will go up, if you want to make it a webapplication, 
                        integrate an API, make it a PWA and add custom functionality it will cost more. If you want to add a backend node.js server the price can jump up 
                        to a 1000$ and over. 
                        <br/><br/>
                        With python I can srcipt simple custom programms starting at around 35$ and goes up depending on complexity and time to complete it. I can also tutor.
                        <br/><br/>
                        Building a custom browser extention start 15-20$. If you want to make the extention work on multiple browsers the price goes up.
                    </p>
                </div>
                <img src={MB} />
            </header>
        </div>
    )
}