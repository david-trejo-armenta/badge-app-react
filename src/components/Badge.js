import React from "react";
import HeaderBackground from '../images/background2.png'
import ProfilePic from '../images/user.png'
import "./style/Badge.css";

class Badge extends React.Component {
  render() {
    return <React.Fragment>
        <div className="Badge m-5 flex-column">
            <div className="Badge__header">
                <img src={HeaderBackground} alt="Header Background" />
            </div>
            <div className="Badge__userInfo container mt-5 mb-1">

            </div>
            <div className="Badge__info container pt-3">

            </div>


        </div>
    </React.Fragment>;
  }
}

export default Badge;
