import React from 'react';
import './style.css'

import profilepicture from '../Images/me.jpg'
function AboutMe() {

    return (
        <div className="about-me">
        <div className="row">
        <div className="col-md-3">
            <div className="about-me-picture" style={{backgroundImage: `url(${profilepicture})`}}>
                &nbsp;
            </div>
        </div>
            <div className="col-md-9">
                <div style={{padding:"20px"}}>
            <h2>About Me</h2>
            <p>Full stack web developer with strong digital marketing and graphic design background. Recently earned a certificate in full stack development from the University of Pennsylvania to complement my pre-existing web development abilities. Successfully built and managed several applications, custom WordPress websites, designed branding for several companies and managed numerous development projects. Enthusiastic about learning and applying new skills with a graduate level education.  I stay calm in fast-paced situations and rely on logic to persevere when code isn’t working how I planned. I adapt quickly and communicate effectively; this strength came in handy when coding in teams. Passionate about solving programming challenges and creative thinking. </p>
            <hr />
<p>
<strong>Languages and Frameworks:</strong> Javascript (ES5 / ES6), HTML, CSS, jQuery, Bootstrap, Node, React, PHP, Express, MongoDB, SQL, Unit Testing
</p>
<hr />
<p>
<strong>Applications:</strong> Visual Studio, Microsoft Office, Adobe Creative Suite (Photoshop, InDesign, Illustrator, Dreamweaver, Premiere, After Effects), HubSpot, WordPress
</p>
<hr />
<p>
<strong>Other:</strong> Graphic Design, Video Editing, Animation, SEO, Social Media, Content Marketing, Ads (Display, PPC, Social), Google Analytics, Email 
</p>
</div>
            </div>

        </div>
        </div>
    )
  }
  
  export default AboutMe;