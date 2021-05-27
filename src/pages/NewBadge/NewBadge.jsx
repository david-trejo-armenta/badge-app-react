import React from "react"
import Hero from "../../components/Hero"
import "./NewBadge.css"

class NewBadge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <h1>New Badge</h1>
            </React.Fragment>
        );
    }
}

export default NewBadge;