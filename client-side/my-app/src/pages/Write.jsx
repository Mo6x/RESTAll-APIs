import React from "react";
import flower from "../asserts/smart-flower.jpeg";
import christ from "../asserts/Christ.jpeg";
import Edit from "../asserts/edit.png";
import Delete from "../asserts/delete.jpeg";
import { Link } from "react-router-dom";



const Write = () => {
    return(
        <div className="single">
            <div className="content">
            <img src={flower} className="Single-flower" alt="flower" />
                <div className="user">
                <img src={christ} className="App-logo" alt="logo" />
                    <div className="info">
                        <span>Susan</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                       <img src={Edit} alt="edit pics" />
                        </Link>
                       <img src={Delete} alt="delete pic" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam, animi laborum molestiae ad temporibus ut consequuntur, officia sed quae sit at nesciunt delectus accusamus aliquid, nobis vero fuga deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus a.Beatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus aBeatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus a</p>
            </div>
            <div className="menu">M</div>
        </div>
    )
}
export default Write;