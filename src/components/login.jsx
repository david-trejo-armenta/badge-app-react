import React from "react" 
import {Link} from "react-router-dom"
import Button from "../../components/MainButton";
import "./Login.css"

class Login extends React.Component{
    render(){
        return(
            <React.Fragment>
               
                    <div className="container">
                        <div className="form">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" name="email" placeholder="email@example.com" required/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" name="password" placeholder="Password" required/>
                                </div>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputAddress">First Name</label>
                                <input type="text" class="form-control" id="inputfirst_name" name="first_name" placeholder="Name" required/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputAddress2">Last name</label>
                                <input type="text" class="form-control" id="inputlastname" name="last_name" placeholder="Last Name" required/>
                                </div>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">Birthdate</label>
                                    <input type="date" class="form-control" name="birthdate" id="inputBirthdate" placeholder="19/12/1999"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputGender">Gender</label>
                                    <select id="inputGender" name="gender" class="form-control">
                                    <option selected>M</option>
                                    <option>F</option>
                                    <option>N</option>
                                    </select>
                                    <small>M for Male, F for Female and N for Neither</small>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" name="city" id="inputCity" placeholder="Chihuahua"/>
                                </div>
                                </div>
                                <div className="col-3">
                                <Button contentText={"Login"} theme={"Button"} link={"/sign_in"}></Button>
                                </div>
                            </div>
                        </div>
                   
            </React.Fragment>
        );
    }
}

export default Login;