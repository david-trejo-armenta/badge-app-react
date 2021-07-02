import React from "react";
import Error from "../../images/Err.svg"
import Footer from "../../components/Footer"
import "./NotFound.css"

const NotFound = () =>{
    return(
        <React.Fragment>
            <div className ="container NotFound">
                <img src = {Error} alt = "Not Found"/>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default NotFound