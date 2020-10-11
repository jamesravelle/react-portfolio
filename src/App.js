import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Project from "./components/Project/Project"
import Section from "./components/Section/Section"

function App() {
  const [projectState, setProjectState] = useState(
    [
      {
        title: "GameSwap",
        description: "Game trading application built with node.js, SQL, express, handelbars and others. To test, login in with test@gmail.com / password",
        githubURL: "https://github.com/jamesravelle/project-2",
        liveURL: "https://project2-rmdm.herokuapp.com/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
      {
        title: "Covid Dash",
        description: "Web application that displays historical and current Covid-19 data, interactive map, testing locations and relevant news articles. Built with javascript, jQuery, Bulma and several APIs.",
        githubURL: "https://github.com/jamesravelle/covid-dash",
        liveURL: "https://jamesravelle.github.io/covid-dash/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
      {
        title: "Weather Dashboard",
        description: "Current and 5 day future forecast weather app. Built with javascript, jQuery, Bootstrap and the Open Weather API",
        githubURL: "https://github.com/jamesravelle/weather-dashboard",
        liveURL: "https://jamesravelle.github.io/weather-dashboard/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
    ]
  );
  const projectIntroText = 
  `These are some projects I built`

  const [websiteState, setWebsiteState] = useState(
    [
      {
        title: "The GOCC",
        description: "Custom WordPress website built with HTML, CSS, Javascript, jQuery, PHP and Bootstrap. Designed logo and branding.",
        githubURL: "",
        liveURL: "http://thegocc.com/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
      {
        title: "Calyx Staffing",
        description: "Custom logo, branding and WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://calyxstaffing.com/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
      {
        title: "Broc Kitchens and Baths",
        description: "Custom WordPress website built with Ark theme builder.",
        githubURL: "",
        liveURL: "http://www.brockitchensandbaths.com/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      },
      {
        title: "Asset Source International",
        description: "Custom WordPress website built with Elementor.",
        githubURL: "",
        liveURL: "https://www.assetsource.com/",
        image: "https://api.time.com/wp-content/uploads/2019/03/kitten-report.jpg?quality=85&w=1200&h=628&crop=1"
      }
    ]
  );
  const websiteIntroText = 
  `These are some websites I built`

  const [heroState, setHeroState] = useState({
    text: "Welcome",
    height: "100vh",
    location: "home",
    showIntro: true
  })

  const heroUpdate = (title, height, location, intro) => {
    setHeroState({
      text: title,
      height: height,
      location: location,
      showIntro: intro
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
      />

        <Section title={projectIntroText} show={heroState.location === "projects" ? true : false}>
        {
          projectState.map((x,i) => {
            return <Project value={projectState[i]}/>
          })
        }
        </Section>
        <Section title={websiteIntroText} show={heroState.location === "websites" ? true : false}>
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
