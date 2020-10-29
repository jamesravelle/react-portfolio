import React from 'react';
import '../Hero/Hero.css'
import Button from '../Button/Button'
import divider from '../Images/wavy-motion-top.png'

function Hero(props) {
    const heightComp = props.height;
    const bgColor = props.bgColor;
    const introText = 
    <p>
</p>;

    return (
        <div class="content">
           <div id="large-header" class="large-header" >
              <canvas id="demo-canvas"></canvas>
              <div className="main-title">
                  <h1 className="text-shadow" style={{marginBottom: "20px"}}>Hello, I'm James Ravelle</h1>
                  <div className="intro">
                    <p>
                    Thank you for visiting my portfolio - I built it with <a href="https://reactjs.org/">React.js</a> :) I am a full stack web developer with several years of experience building websites and applications.
                    </p>
                    <div className="row">
                        <div className="col">
                            <Button url={"#work"}>View Work</Button>
                        </div>
                    </div>
                </div>
                <div className="connect-with-me">
                    <h3 className="text-shadow">Connect With Me:</h3>
                    <hr style={{backgroundColor:"white"}} />
                    <div className="row">
                        <a href="mailto:james.ravelle@gmail.com" className="col-md-3 nav-link"><i class="fa fa-envelope" aria-hidden="true"></i><span className="connect-icon-text">Email</span></a>
                        <a href="https://github.com/jamesravelle/" target="_blank" className="col-md-3 nav-link"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i><span className="connect-icon-text">GitHub</span></a>
                        <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank" className="col-md-3 nav-link"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i><span className="connect-icon-text">LinkedIn</span></a>
                        <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank" className="col-md-3 nav-link"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i><span className="connect-icon-text">Resume</span></a>
                    </div>
                </div>
                
              </div>
        </div>
        </div>
    );
  }
  
  export default Hero;