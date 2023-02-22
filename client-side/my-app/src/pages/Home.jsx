import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../asserts/spring-onion.jpeg";
import IMG2 from "../asserts/glass-cup.jpeg";
import IMG3 from "../asserts/onion.jpeg";
import IMG4 from "../asserts/oranges.jpeg";
 

const Home = () => {
   
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
            desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            img: IMG1
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
            desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            img: IMG2
        },
        {
            id: 3,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
            desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            img: IMG3
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
            desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            img: IMG4
        },
    ]

    return(
        <div className="home">
           <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                          <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                          </div>
                     </div>         
                ))}
           </div>
        </div>
    );
};

export default Home;