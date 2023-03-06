import React, { 
    useState,
   useLocation,
   useEffect,
   useContext,
} from "react";
//import fruit from "../asserts/tropical-fruits.jpeg";
import christ from "../asserts/Christ.jpeg";
import Edit from "../asserts/edit.png";
import Delete from "../asserts/delete.jpeg";
import { Link} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "react"
import { AuthContext } from "../components/context/authContext";


const Single = () => {
     const [post, setPosts] = useState({});
     const location = useLocation()
     const postId = location.pathname.split("/")[2];
     const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const res = await axios.get(`/posts/${postId}`);
                setPosts(res.data);
            }catch (err) {

            }
        };
        fetchData();
    }, [postId]); 

    return(
        <div className="single">
            <div className="content">
            <img src={post?.img} alt="" />
                <div className="user">
                <img src={christ} className="App-logo" alt="logo" />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted { moment(post.date).fromNow() }</p>
                    </div>
                 {currentUser.username === post.username && (
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                       <img src={Edit} alt="edit pics" />
                        </Link>
                       <img src={Delete} alt="delete pic" />
                    </div>
                )}    
                </div>
                <h1>{post.title}</h1>
                {post.desc}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam, animi laborum molestiae ad temporibus ut consequuntur, officia sed quae sit at nesciunt delectus accusamus aliquid, nobis vero fuga deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus.
                    <br />
                    <br />
                 <p>a.Beatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus aBeatae adipisci eius dolor animi hic, officia dolore enim quo maiores iste! Est aspernatur blanditiis maiores aperiam ea nihil rerum, repellendus a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam perspiciatis, veniam hic repellendus illo commodi dolorem sapiente natus, obcaecati pariatur magni iusto quidem! Illum libero debitis expedita nemo consequatur!
                     <br />
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat dolorum illo similique voluptas totam, sequi fugiat nulla error quas, consequatur facilis. Eius veritatis quae perferendis qui alias quos sed?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa at voluptas in similique vel saepe autem deleniti velit, a consequuntur ipsum ut. Itaque possimus est facere reprehenderit repudiandae, nihil dolore?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt doloremque neque at reprehenderit quibusdam, labore rem aut saepe alias voluptate itaque beatae ipsam quasi explicabo atque totam ipsum officia.
                     <br />
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium in, enim consequatur temporibus porro et earum, consectetur sit nisi deleniti! Animi consectetur est perspiciatis quam voluptatibus fuga magni eum.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam enim, blanditiis voluptatum, suscipit quae architecto aliquid unde accusantium natus hic possimus, ipsum illo eum aliquam molestiae voluptate doloremque iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nobis ipsa delectus quos eaque quisquam, reprehenderit doloribus mollitia officia velit inventore ad neque itaque nesciunt error. Sunt voluptatum sapiente fuga.
                      
                    
                    </p>
                     </p>
            </div>
            <Menu />
        </div>
    );
};
export default Single;