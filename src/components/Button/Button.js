import React, {useState} from 'react';
import "../Button/Button.css"

function Button({children, url}) {
    const [hoverState, setHover] = useState(false);

    return (
        <div className="buttonWrapper">
            <a href={url}>
                <button 
                className={hoverState ? "hover-class cta" : "cta"}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                    {children}
                </button>
            </a>
        </div>
    );
  }
  
  export default Button;