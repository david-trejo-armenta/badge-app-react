import React, { Component } from "react";
import './Login.css';

class Login extends Component {
    render(){
        return (
            <React.Fragment>
                <center>
                <div className="BadgeForm m-5 ">
                    <form >
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                E Mail
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "E-mail"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Password
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "password"
                            
                            />
                        </div>
                        <button type = "Submit" className = "Submit_button">
                            Save
                        </button>
                    </form>
                </div>
                </center>
            </React.Fragment>
        );
    }
}

export default Login;