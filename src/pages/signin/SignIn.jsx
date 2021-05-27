import React, { Component } from "react";
import './SignIn.css';

class SignIn extends Component {
    render(){
        return (
            <React.Fragment>
                <center>
                <div className="BadgeForm m-5 ">
                    <form >
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Name
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "name"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Profile Picture URL
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "profile_pic_url"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Badge Hero URL
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "dage_hero_url"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Age
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "age"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                City
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "city"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                eMail
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "mail"
                            
                            />
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "mb-1">
                                Password
                            </label>
                            <input 
                            type = "text"
                            className = "form-control"
                            name = "pass"
                            
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

export default SignIn;