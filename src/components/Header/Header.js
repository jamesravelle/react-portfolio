import React, {useState} from 'react';
import "../Header/Header.css"

function Header(props) {
  const [hoverState, setHover] = useState(false);


    return (
        <header>
          <nav className="navbar navbar-expand-lg fixed-top">
            <span className="navbar-brand"  onClick={()=>props.heroUpdate("Welcome!","100vh","home", true)}>James Ravelle</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Welcome!","100vh","home", true)}>Home</span>
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Projects","300px","projects", false)}>Projects</span>
                <span className="nav-item nav-link" onClick={()=>props.heroUpdate("Websites","300px","websites", false)}>Websites</span>
              </div>
            </div>
            <div>
              <a href="mailto:james.ravelle@gmail.com" className="menu-icons"><i class="fa fa-envelope" aria-hidden="true"></i></a>
              <a href="https://github.com/jamesravelle/" target="_blank"  className="menu-icons"><i class="fa fa-github" aria-hidden="true" title="GitHub"></i></a>
              <a href="https://www.linkedin.com/in/james-ravelle-bb640067/" target="_blank"  className="menu-icons"><i class="fa fa-linkedin-square" aria-hidden="true" title="LinkedIn"></i></a>
              <a href="./files/Resume.pdf" target="_blank"  className="menu-icons"><i class="fa fa-file-text" aria-hidden="true" title="Resume"></i></a>
            </div>
          </nav>
        </header>
    );
  }
  
  export default Header;