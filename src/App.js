import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Project from "./components/Project/Project"
import Section from "./components/Section/Section"

function App() {
  const imagePath = "https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/images/"
  const [projectState, setProjectState] = useState(
    [
      {
        title: "GameSwap",
        description: "Game trading application built with node.js, SQL, express, handelbars and others. To test, login in with test@gmail.com / password",
        githubURL: "https://github.com/jamesravelle/project-2",
        liveURL: "https://project2-rmdm.herokuapp.com/",
        image: imagePath + "game-swap.PNG"
      },
      {
        title: "Covid Dash",
        description: "Web application that displays historical and current Covid-19 data, interactive map, testing locations and relevant news articles. Built with javascript, jQuery, Bulma and several APIs.",
        githubURL: "https://github.com/jamesravelle/covid-dash",
        liveURL: "https://jamesravelle.github.io/covid-dash/",
        image: imagePath + "covid-dash.PNG"
      },
      {
        title: "Weather Dashboard",
        description: "Current and 5 day future forecast weather app. Built with javascript, jQuery, Bootstrap and the Open Weather API",
        githubURL: "https://github.com/jamesravelle/weather-dashboard",
        liveURL: "https://jamesravelle.github.io/weather-dashboard/",
        image: imagePath + "weather.PNG"
      },
    ]
  );

  const [websiteState, setWebsiteState] = useState(
    [
      {
        title: "The GOCC",
        description: "Custom WordPress website built with HTML, CSS, Javascript, jQuery, PHP and Bootstrap. Designed logo and branding.",
        githubURL: "",
        liveURL: "http://thegocc.com/",
        image: imagePath + "gcc.PNG"
      },
      {
        title: "Calyx Staffing",
        description: "Custom logo, branding and WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://calyxstaffing.com/",
        image: imagePath + "calyx.PNG"
      },
      {
        title: "Broc Kitchens and Baths",
        description: "Custom WordPress website built with Ark theme builder.",
        githubURL: "",
        liveURL: "http://www.brockitchensandbaths.com/",
        image: imagePath + "broc.PNG"
      },
      {
        title: "Asset Source International",
        description: "Custom WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://www.assetsource.com/",
        image: imagePath + "asi.PNG"
      }
    ]
  );

  const [heroState, setHeroState] = useState({
    text: "Welcome",
    height: "100vh",
    location: "home",
    showIntro: true,
    bgColor: "#282828"
  })

  const heroUpdate = (title, height, location, intro, color) => {
    setHeroState({
      text: title,
      height: height,
      location: location,
      showIntro: intro,
      bgColor: color
    })
  }

  return (
    <div>
      <Header heroUpdate={heroUpdate}/>
      <Main>
      <Hero 
          text={heroState.text}
          height={heroState.height}
          showIntro={heroState.showIntro}
          bgColor = {heroState.bgColor}
          heroUpdate={heroUpdate}
      />
        <Section show={heroState.location === "projects" ? true : false}>
        {
          projectState.map((x,i) => {
            return <Project value={projectState[i]}/>
          })
        }
        </Section>
        <Section show={heroState.location === "websites" ? true : false}>
        {
          websiteState.map((x,i) => {
            return <Project value={websiteState[i]}/>
          })
        }
        </Section>
      </ Main>
      <Footer />
      
      </div>
  );
}

export default App;
