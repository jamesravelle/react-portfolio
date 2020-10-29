import React, {useState} from 'react';
import "../Header/Header.css"

function Header(props) {
// Sticky Header
var header = '';
var sticky = '';
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  // Get the header
  header = document.getElementById('icon-links');

  // Get the offset position of the navbar
  sticky = document.getElementById('icon-links').offsetTop;
  stickyFilter();
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFilter() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    document.getElementById('menu-icons-bg').classList.add('white-bg');
  } else {
    header.classList.remove('sticky');
    document.getElementById('menu-icons-bg').classList.remove('white-bg');
  }
}
    return (
        <header>
          <nav className="navbar navbar-dark navbar-expand-md">
            <a href="#" className="navbar-brand nav-link">James Ravelle</a>
              <div id="menu-icons-bg">
              <div class="menu-icons-wrap" id="icon-links">
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