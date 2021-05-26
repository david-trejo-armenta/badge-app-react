import React from "react";
import HeaderBackground from '../images/background2.png'
import ProfilePic from '../images/user.jpg'
import "./style/Badge.css";

class Badge extends React.Component {
  render() {
    return <React.Fragment>
        <div className="Badge m-5 flex-column">
            <div className="Badge__header">
                <img src={HeaderBackground} alt="Header Background" />
            </div>
            <div className="Badge__userInfo container mt-5 mb-5">
              <div className="Badge__userImage">
                <img src={this.props.picture} alt="Profile Picture"/>
              </div>
              <h4 className="text-center mt-5"> Isabella Fria<i> 666</i></h4>
              <p className="text-center"> Navo York City</p>
            </div>
              <div className="Badge__info container pt-3">
              
              <div className="row">
                <div className="col">
                  <h4 className="text-center fw bold">666 k</h4>
                  <p className="text-center">Followers</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">666 k</h4>
                  <p className="text-center">Likes</p>
                </div>
                <div className="col">
                  <h4 className="text-center fw bold">666 </h4>
                  <p className="text-center">Pictures</p>
                </div>
                
                </div>
                  </div>
                  
                

            </div>


        
    </React.Fragment>;
  }
}

export default Badge;
