import React from "react";
import Hero from "../../components/Hero";
import Badge from "../../components/Badge";
import BadgeForm from "../../components/BadgeForm";
import Footer from "../../components/Footer";
import "./NewBadge.css";
import api from "../../libs/fetch";

class NewBadge extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      header_img_url: "",
      profile_picture_url: "",
      name: "",
      age: "",
      city: "",
      followers: "",
      likes: "",
      post: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };
  
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false, error: null });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Hero h={"15vh"}></Hero>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                header_img_url={
                  this.state.form.header_img_url ||
                  "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                profile_picture_url={
                  this.state.form.profile_picture_url ||
                  "https://images.pexels.com/photos/162307/giant-tortoise-reptile-shell-walking-162307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
                name={this.state.form.name || "Mariel Aguirre"}
                age={this.state.form.age || "21"}
                city={this.state.form.city || "Tokyo, Japan"}
                followers={this.state.form.followers || "666"}
                likes={this.state.form.likes || "666"}
                post={this.state.form.post || "666"}
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              ></BadgeForm>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default NewBadge;
