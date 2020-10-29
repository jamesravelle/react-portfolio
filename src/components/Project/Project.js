import React, {useState} from 'react';
import "../Project/Project.css"
import Button from "../Button/Button"

import Fade from 'react-reveal/Zoom';

function Project(props) {

    const [hoverState, setHover] = useState(false);

    return (
        <div className="col-sm-6 col-md-6 col-lg-4" style={{marginBottom:"20px"}}>
            <div className="project-wrapper">
             <div className={hoverState ? "screenshot screenshot-overlay" : "screenshot"} >
                        <a 
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            href={props.value.liveURL} 
                            className={hoverState ? "screenshot-hover screenshot" : "screenshot"} 
                            style={{backgroundImage:`url('${props.value.image}')`}}
                        >
                        </a>
             </div>
             <div className="project-description">
                            <div className="project-description-text">
                                <h2>{props.value.title}</h2>
                                <p>{props.value.description}</p>
                            </div>
                                <div className="project-buttons">
                                    <Button url={props.value.liveURL}>Live</Button>
                                    {props.value.githubURL ? <a href={props.value.githubURL}><Button url={props.value.githubURL}>GitHub</Button></a> : <div></div>}
                                </div>
                        </div>
          </div>
        </div>            
    );
  }
  
  export default Project;