import React from 'react';
import "./style.css"
import Project from "../../components/Project/Project"
import Section from "../../components/Section/Section"

function PortfolioView(props) {
    console.log(props.show)

    const apps = () => {
        return(
            <Section show={true}>
            {
              props.projectState.map((x,i) => {
                return <Project value={props.projectState[i]}/>
              })
            }
            </Section>
        )
    }

    const websites = () => {
        return(
            <Section show={true}>
                {
                  props.websiteState.map((x,i) => {
                    return <Project value={props.websiteState[i]}/>
                  })
                }
                </Section>
        )
    }
    const show = () => {
        if(props.show === "apps"){
            return (
                <div>
                <h1 style={{width:"100%",textAlign:"center"}}>Applications</h1>
                {apps()}
                </div>
            )
        }

        if(props.show === "websites"){
            return (
                <div>
                <h1 style={{width:"100%",textAlign:"center"}}>Websites</h1>
                {websites()}
                </div>
                
            )
        }

        if(props.show === "all" || !props.show){
            return (
                <div>
                <h1 style={{width:"100%",textAlign:"center"}}>Applications</h1>
                {apps()}
                <hr />
                <h1 style={{width:"100%",textAlign:"center"}}>Websites</h1>
                {websites()}
                </div>
            )
        }        
    }
    
    return (
        <div>
            {show()}
        </div>
    );
  }
  
  export default PortfolioView;

