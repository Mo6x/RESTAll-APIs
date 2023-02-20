import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
   
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laudantium, suscipit      voluptates tempora ullam amet. Dicta eius voluptatem natus ipsam.", 
            desc: "Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            imgs: ""
        },
        {
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laudantium, suscipit      voluptates tempora ullam amet. Dicta eius voluptatem natus ipsam.", 
            desc: "Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            imgs: ""
        },
        {
            id: 3,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laudantium, suscipit      voluptates tempora ullam amet. Dicta eius voluptatem natus ipsam.", 
            desc: "Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            imgs: ""
        },
        {
            id: 4,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laudantium, suscipit      voluptates tempora ullam amet. Dicta eius voluptatem natus ipsam.", 
            desc: "Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
            imgs: ""
        },
    ]

    return(
        <div className="home">
           <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="imgs">
                            <img src={post.imgs} alt="" />
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