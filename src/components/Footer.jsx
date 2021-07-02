import React from "react"
import "./style/Footer.css"

const  Footer = (props) =>{
    return(
    <React.Fragment>
        <div className="Footer" style={props.s}>
            <p> 🐉  Powered by React JS UTCH BIS  🐉 </p>
        </div>
    </React.Fragment>
    );
}

export default Footer;
