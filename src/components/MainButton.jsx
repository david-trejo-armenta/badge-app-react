import React from "react"
import {Link} from "react-router-dom"
import "./style/MainButton.css"

const Button = props =>{
    return(
        <React.Fragment>
            <Link className={props.theme} to={props.link}>
            <p>{props.contentText}</p>
            </Link>

        </React.Fragment>
    )
}

export default Button

