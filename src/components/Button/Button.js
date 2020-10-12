import React, {useState} from 'react';
import "../Button/Button.css"

function Button({children, url, heroUpdate}) {
    const [hoverState, setHover] = useState(false);

    const buttonClick = (url) => {
        console.log(url);
        if(url === "projects"){
            heroUpdate("Projects","300px","projects", false, "#4087FF")
        }
        if(url === "websites"){
            heroUpdate("Websites","300px","websites", false, "#863BFF")
        }
    }

    return (
        <div className="buttonWrapper">
                <button 
                className={hoverState ? "hover-class cta" : "cta"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={()=>buttonClick(url)}
                >
                    {children}
                </button>
        </div>
    );
  }
  
  export default Button;