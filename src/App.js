import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Project from "./components/Project/Project"
import Section from "./components/Section/Section"
import Popup from "./components/Popup/Popup"
import Button from './components/Button/Button'
import AboutMe from './components/AboutMe'

// Application Images
import winehubimg from './components/Images/winehub.PNG'
import gameswapimg from './components/Images/game-swap.PNG'
import coviddashimg from './components/Images/covid-dash.PNG'
import weatherimg from './components/Images/weather.PNG'
import googlebooksimg from './components/Images/google-books.PNG'
import employeedirimg from './components/Images/employee-dir.PNG'

// Website Images
import asiimg from './components/Images/asi.PNG'
import brocimg from './components/Images/broc.PNG'
import calyximg from './components/Images/calyx.PNG'
import gccimg from './components/Images/gcc.PNG'

// Animations
import Zoom from 'react-reveal/Zoom';

function App() {
  const imagePath = "https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/images/"
  const [projectState, setProjectState] = useState(
    [
      {
        title: "WineHub",
        description: "eCommerce application built with React, Node, Express and MongoDB. Allows users to signup, manage their inventory, and sell it to consumers.",
        githubURL: "https://github.com/grburner/project-3",
        liveURL: "https://vast-river-22849.herokuapp.com/",
        image: winehubimg
      },
      {
        title: "GameSwap",
        description: "Game trading application built with node.js, SQL, express, handelbars and others. To test, login in with test@gmail.com / password",
        githubURL: "https://github.com/jamesravelle/project-2",
        liveURL: "https://project2-rmdm.herokuapp.com/",
        image: gameswapimg
      },
      {
        title: "Covid Dash",
        description: "Web application that displays historical and current Covid-19 data, interactive map, testing locations and relevant news articles. Built with javascript, jQuery, Bulma and several APIs.",
        githubURL: "https://github.com/jamesravelle/covid-dashboard",
        liveURL: "https://afternoon-fjord-46442.herokuapp.com/",
        image: coviddashimg
      },
      {
        title: "Google Books React App",
        description: "MERN application - search Google Books API and add books to your collection",
        githubURL: "https://github.com/jamesravelle/google-books",
        liveURL: "https://lit-ravine-68144.herokuapp.com/",
        image: googlebooksimg
      },
      {
        title: "React Employee Directory",
        description: "Search and sort through a directory of contacts. Built with React.js",
        githubURL: "https://github.com/jamesravelle/employee-directory",
        liveURL: "https://jamesravelle.github.io/employee-directory/",
        image: employeedirimg
      },
      {
        title: "Weather Dashboard",
        description: "Current and 5 day future forecast weather app. Built with javascript, jQuery, Bootstrap and the Open Weather API",
        githubURL: "https://github.com/jamesravelle/weather-dashboard",
        liveURL: "https://jamesravelle.github.io/weather-dashboard/",
        image: weatherimg
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
        image: gccimg
      },
      {
        title: "Calyx Staffing",
        description: "Custom logo, branding and WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://calyxstaffing.com/",
        image: calyximg
      },
      {
        title: "Broc Kitchens and Baths",
        description: "Custom WordPress website built with Ark theme builder.",
        githubURL: "",
        liveURL: "http://www.brockitchensandbaths.com/",
        image: brocimg
      },
      {
        title: "Asset Source International",
        description: "Custom WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://www.assetsource.com/",
        image: asiimg
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

  const [showHeader, setShowHeader] = useState({show:false})
  
  return (
    <div>
      <Header heroUpdate={heroUpdate}/>
      <Main>
      <Hero />
      <Zoom>
      <AboutMe />
      </Zoom>
      <div id="work"></div>
        <Section title="Applications">
        {
          projectState.map((x,i) => {
            return (
               <Project value={projectState[i]}/>
            )
          })
        }
        </Section>
        <Section title="Websites">
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
