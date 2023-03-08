import React, { 
    useState,
   useLocation,
   useEffect,
   useContext,
} from "react";
//import fruit from "../asserts/tropical-fruits.jpeg";
//import christ from "../asserts/Christ.jpeg";
import Edit from "../asserts/edit.png";
import Delete from "../asserts/delete.jpeg";
import { Link, useNavigate} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "react"
import { AuthContext } from "../components/context/authContext";


const Single = () => {
     const [post, setPosts] = useState({});
     const location = useLocation();
     const navigate = useNavigate();
     const postId = location.pathname.split("/")[2];
     const {currentUser} = useContext(AuthContext);

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

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="single">
            <div className="content">
            <img src={post?.img} alt="" />
                <div className="user">
                { post.userImg && <img src={post.userImg} alt="" /> }
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted { moment(post.date).fromNow() }</p>
                    </div>
                 {currentUser.username === post.username && (
                    <div className="edit">
                        <Link to={`/write?edit=2`} state={post}>
                       <img src={Edit} alt="edit pics" />
                        </Link>
                       <img onClick={handleDelete} src={Delete} alt="" />
                    </div>
                )}    
                </div>
                <h1>{post.title}</h1>
                {post.desc}
            </div>
            <Menu cat={post.cat}/>
        </div>
    );
};
export default Single;