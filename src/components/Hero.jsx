import React from "react"
import "../components/style/Hero.css"
import HeroImage from "../images/hero_image.png"
const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src={HeroImage} alt=""/>
                </div>
                </div>
            
            
        </React.Fragment>
    )
}

export default Hero