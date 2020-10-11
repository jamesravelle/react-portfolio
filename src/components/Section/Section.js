import React from 'react';
import "../Section/Section.css"

function Section({children, title, show}) {
    console.log(show)
    if(show){
        return (
            <section className="container section-padding">
                <div className="sectionHeading"><p>{title}</p></div>
                        {children}
            </section>
        )
    } else {
        return (
            <div></div>
        )
    }
  }
  
  export default Section;