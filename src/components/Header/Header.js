import React, {useState} from 'react';
import "../Header/Header.css"

function Header(props) {

    return (
        <header>
          <nav className="navbar navbar-dark navbar-expand-md">
            <span className="navbar-brand nav-link"  onClick={()=>props.heroUpdate("Welcome!","auto","home", true, "#282828")}>James Ravelle</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Welcome!","1000px","home", true, "#282828")}>Home</span>
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Projects","300px","projects", false, "#4087FF")}>Projects</span>
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Websites","300px","websites", false, "#863BFF")}>Websites</span>
              </div>
              <div class="menu-icons-wrap">
              <a href="mailto:james.ravelle@gmail.com" className="menu-icons"><i class="fa fa-envelope" aria-hidden="true"></i></a>
              <a href="https://github.com/jamesravelle/" target="_blank"  className="menu-icons"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i></a>
              <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank"  className="menu-icons"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i></a>
              <a href="https://raw.githubusercontent.com/jamesravelle/react-portfolio/main/public/files/JamesRavelle_Resume.pdf" target="_blank"  className="menu-icons"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i></a>
            </div>
            </div>
            
          </nav>
        </header>
    );
  }
  
  export default Header;