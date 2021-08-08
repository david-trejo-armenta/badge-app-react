import React from "react"
import SkeletonItem from "../../components/SkeletonItem"
import BadgesList from "../../components/BadgesList"
import Button from "../../components/MainButton"
import api from "../../libs/fetch.js"
import Footer from "../../components/Footer"
import "./Badges.css"


class Badges extends React.Component{

    state ={
        loading:true,
        error: null,
        data: undefined,
        handle_footer: {bottom:0},
    }

    componentDidMount(){
        this.fetchData();
        this.setFetchInterval();
    }

    fetchData = async() =>{
        this.setState({loading: true, error: null})
        
        try{

        const data = await api.badges.list();
            data.reverse()
            this.setState({loading: false, data: data})

            if(data.length > 3){
                this.setState({handle_footer:{position: "relative"}})
            }
            else{
                this.setState({handle_footer:{position:0}})
            }
        }
        
        catch(error){

        this.setState({loading: false, error: error, data: []});

        }
    }

        setFetchInterval(){
            this.interval = setInterval(this.fetchData, 3000)
        }

        componentWillUnmount(){
            clearInterval(this.interval)
        }
    

    render() {
        if(this.state.loading===true && !this.state.data){
            return <SkeletonItem>
                <h1>...........Skeleton...........</h1>
            </SkeletonItem>
        }
        return(
            <React.Fragment>
                <BadgesList badges={this.state.data}></BadgesList>
                <Footer s={this.state.handle_footer}></Footer>              
            </React.Fragment>
        );
    }
}
export default Badges