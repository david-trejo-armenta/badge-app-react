import React from "react"
import "../components/style/MainButton.css"

const Button = props =>{
    return(
        <React.Fragment>
            <a className="Button" href=""></a>
            <p>{props.contentText}</p>

        </React.Fragment>
    )
}

export default Button

