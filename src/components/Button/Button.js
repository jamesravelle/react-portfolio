import React, {useState} from 'react';
import "../Button/Button.css"

function Button({children, url, heroUpdate, onClick}) {
    const [hoverState, setHover] = useState(false);
    return (
        <a className="buttonWrapper" href={url}>
                <button 
                className={hoverState ? "hover-class cta" : "cta"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={onClick}
                >
                    {children}
                </button>
        </a>
    );
  }
  
  export default Button;