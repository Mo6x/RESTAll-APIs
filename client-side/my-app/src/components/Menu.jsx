import React, {
     useEffect, 
     useState 
    } from "react";
import axios from "axios";    
// import IMG1 from "../asserts/Apricots.jpeg";
// import IMG2 from "../asserts/banana.jpeg";
// import IMG3 from "../asserts/flower.jpeg";
// import IMG4 from "../asserts/beerbean.jpeg";




const Menu = ({cat}) => {
      const [posts, setPosts] = useState([]);

      useEffect(() => {
         const fetchData = async ()=> {
            try{
                const res = await axios.get(`/posts/?cat=${cat}`); 
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            };
         };
         fetchData();
      }, [cat]);



    // const posts = [ 
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    //         desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
    //         img: IMG1
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    //         desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
    //         img: IMG2
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    //         desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
    //         img: IMG3
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    //         desc: "Nihil laudantium, suscipit suscipit voluptates tempora ullam amet  Dicta eius voluptatem natus ipsam, Exercitationem officia ea id asperiores dolorem facere debitis natus! Dolorem.",
    //         img: IMG4
    //     },
    // ]

    return(
        <div className="menu">
            <h1>Other Posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                  <img src={post.img} alt="" />
                  <h2>{post.title}</h2>
                  <button>Read More</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;