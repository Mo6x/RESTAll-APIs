import React from "react";
import flower from "../asserts/smart-flower.jpeg";
import christ from "../asserts/Christ.jpeg";



const Single = () => {
    return(
        <div className="single">
            <div className="content">
            <img src={flower} className="Single-flower" alt="flower" />
                <div className="user">
                <img src={christ} className="App-logo" alt="logo" />
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