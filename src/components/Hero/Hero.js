import React from 'react';
import "../Hero/Hero.css"
import Button from "../Button/Button"

function Hero(props) {
    const heightComp = props.height
    const introText = 
    <p>
Hello, my name is James Ravelle! Thank you for visiting my portfolio - I built it with <a href="https://reactjs.org/">React.js</a> :) you can see more of my projects below. I have an extensive background in building websites, applications and digital marketing.
</p>
    const intro = (showIntro) => {
        if(showIntro){
            return (
                <div className="intro">
                    {introText}
                    <Button url={"/projects"}>Click Me!</Button>
                </div>
            )
        } else {
            return (
                <div className="intro" style={{opacity: "0", height:"0"}}>
                    {introText}                            
                    <Button url={"/projects"}>Click Me!</Button>
                </div>
            )
        }
    }

    return (
        <div className="hero">
            <div className="container">
                <div className="row align-items-center hero-row" style={{minHeight: heightComp }}>
                    <div className="col-md-12 mx-auto">
                    <h1 className="hero-title">{props.text}</h1>
                        {intro(props.showIntro)}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Hero;