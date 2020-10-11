import React, {useState} from 'react';
import "../Project/Project.css"
import Button from "../Button/Button"

function Project(props) {

    const [hoverState, setHover] = useState(false);

    return (
                <div className="project-wrapper">
                <div className="row">
                    <div className="col-md-6">
                        <div className="project-description">
                            <h1>{props.value.title}</h1>
                            <p>{props.value.description}</p>
                            <Button url={props.value.liveURL}>Live Application</Button>
                            {props.value.githubURL ? <Button url={props.value.githubURL}>GitHub</Button> : <div></div>}
                        </div>
                    </div>
                    <div className={hoverState ? "col-md-6 screenshot-overlay" : "col-md-6"} >
                        <a 
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            href={props.value.liveURL} 
                            className={hoverState ? "screenshot-hover screenshot" : "screenshot"} 
                            style={{backgroundImage:`url('${props.value.image}')`}}
                        >
                        </a>
                    </div>
                    
                </div>
            </div>
    );
  }
  
  export default Project;