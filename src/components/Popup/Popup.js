import React, {useState} from 'react';
import "./style.css"

function Popup({show}) {
    
    return (
        <div className={show ? "popup popup-show" : "popup"}>
            <h1>Hello {show}</h1>
        </div>
    )

  }
  
  export default Popup;