import React from 'react';
import "../Hero/Hero.css"
import Button from "../Button/Button"

function Hero(props) {
    const heightComp = props.height;
    const bgColor = props.bgColor;
    const introText = 
    <p>
Hello, my name is James Ravelle! Thank you for visiting my portfolio - I built it with <a href="https://reactjs.org/">React.js</a> :) I am an experienced web developer with several years of experience building websites and applications.
</p>;

const connectLinks = 
<div className="row">
    <a href="mailto:james.ravelle@gmail.com" className="col-md-3"><i class="fa fa-envelope" aria-hidden="true"></i><span className="connect-icon-text">Email</span></a>
    <a href="https://github.com/jamesravelle/" target="_blank" className="col-md-3"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i><span className="connect-icon-text">GitHub</span></a>
    <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank" className="col-md-3"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i><span className="connect-icon-text">LinkedIn</span></a>
    <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank" className="col-md-3"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i><span className="connect-icon-text">Resume</span></a>
</div>

    const intro = (showIntro) => {
        if(showIntro){
            return (
                <div>
                <div className="intro">
                    {introText}
                    <div className="row">
                        <div className="col-md-6">
                            <Button url={"projects"} heroUpdate={props.heroUpdate}>View Projects</Button>
                        </div>
                        <div className="col-md-6">
                            <Button url={"websites"} heroUpdate={props.heroUpdate}>View Websites</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="connect-with-me">
                    <h3>Connect With Me:</h3>
                    <hr style={{backgroundColor:"white"}} />
                    {connectLinks}
                </div>
                </div>
            )
        } else {
            return (
                <div>
                <div className="intro" style={{opacity: "0", height:"0"}}>
                    {introText}                            
                </div>
                <div className="connect-with-me"  style={{opacity: "0", height:"0"}}>
                    <h3>Connect With Me:</h3>
                    <hr style={{backgroundColor:"white"}} />
                    {connectLinks}
                </div>
                </div>
            )
        }
    }

    return (
        <div class="content">
           <div id="large-header" class="large-header"  style={{height: heightComp, backgroundColor: bgColor}}>
              <canvas id="demo-canvas"></canvas>
              <div class="main-title">
                  <h1>{props.text}</h1>
                  {intro(props.showIntro)}
                      </div>
                  </div>
              </div>
    );
  }
  
  export default Hero;