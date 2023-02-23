import React from "react";
import Flower from "../asserts/smart-flower.jpeg";
import Christ from "../asserts/Christ.jpeg";



const Single = () => {
    return(
        <div className="single">
            <div className="content">
                <img src={Flower} alt="" />
                <div className="user">
                    <img src={Christ} alt="" />
                    <div className="info">
                        <span>Christ</span>
                        <p>Posted 2 days ago</p>
                    </div>
                </div>
            </div>
            <div className="menu">M</div>
        </div>
    )
}
export default Single;