import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"

class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null, 
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",

        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge>
                            header_picture = {this.state.form.header_picture || "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            profile_picture = {this.state.form.profile_picture || "https://i1.wp.com/www.bitme.gg/wp-content/uploads/2020/05/Demon-Slayer_-Chica-realiza-un-detallado-cosplay-de-Zenitsu-Agatsuma.jpg?resize=1280%2C720&ssl=1"}
                            
                        </Badge>
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;