import React from "react"
import Skeleton from "react-loading-skeleton"
import "./style/BadgesList.css"

const SkeletonItem = () =>{
    return(
        <React.Fragment>
            
            <div className = "container center List mb-5">
                <div className = "list-unstyled">
                    <div className = "BadgesListItem mt-5">
                        <div className = "col-5">
                            <div className  = "d-flex justify-content-center mt-2">
                                <Skeleton circle = {true} height = {150} width = {150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                    <div className = "BadgesListItem mt-5">
                        <div className = "col-5">
                            <div className  = "d-flex justify-content-center mt-2">
                                <Skeleton circle = {true} height = {150} width = {150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                    <div className = "BadgesListItem mt-5">
                        <div className = "col-5">
                            <div className  = "d-flex justify-content-center mt-2">
                                <Skeleton circle = {true} height = {150} width = {150}></Skeleton>
                            </div>
                        </div>
                        <div className="col-7">
                            <div style={{padding: "2em"}}>
                                <Skeleton count={5}></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default SkeletonItem