import React from "react"
import "./Main.css"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"

const Main = props =>{
    return(
        <React.Fragment>
            <div className="Main">
            <div className="Main__content">
                <h1 className="Main__title"> {props.title || "Welcome"}</h1>
                <Button contentText={"Start"} link={"/new"}></Button>
            </div>
            <Hero h={"88vh"}></Hero>
            </div>

        </React.Fragment>
    )
}

export default Main;