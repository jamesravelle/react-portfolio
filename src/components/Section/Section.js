import React from 'react';
import "../Section/Section.css"

function Section({children, title, show}) {
    console.log(show)

        return (
            <div style={{padding:"50px"}}>
            <section className="row row-eq-height">
                <div className="sectionHeading"><h1>{title}</h1></div>
                        {children}
            </section>
            </div>
        )
    } 

  
  export default Section;