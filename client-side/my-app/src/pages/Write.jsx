import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";



const Write = () => {
 const state = useLocation().state;   
 const [value, setvalue] = useState( state?.title || "");
 const [title, setTitle] = useState( state?.desc || ""); 
 const [file, setFile] = useState("");
 const [cat, setCat] = useState( state?.cat || "");


   const upload = async ()=> {
    try{
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("/upload", formData);
        return res.data
    } catch(err){
        console.log(err)
    }
   }


   const handleClick = async e => {
    e.preventDefault();
    const imgUrl = upload();
    try{
    state ? await axios.put(`/posts/${state.id}`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : "",
        }) : await axios.post(`/posts/`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYY-MM-DD HH:mm:ss")
        });
    } catch(err){
        console.log(err);
    }
   };

    return(
        <div className="add">
            <diV className="content">
                <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                <div className="editorContainer">
                  <ReactQuill className="editor" theme="snow" value={value} onChange={setvalue} />
                </div>
            </diV>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input step={{display: "name"}} type="file" id="file" name=""  onChange={e => setFile(e.target.files[0])}/>
                    <label className="file" htmlFor="file">Upload Image</label>
                   <div className="buttons">
                    <button>Save as a draft</button>
                    <button onClick={handleClick}>Publish</button>
                   </div> 
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                    <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="art">Art</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "Science"} name="cat" value="Science" id="Science" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="Science">Science</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "Technology"} name="cat" value="Technology" id="Technology" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="Technology">Technology</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "Cinema"} name="cat" value="Cinema" id="Cinema" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="Cinema">Cinema</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "Design"} name="cat" value="Design" id="Design" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="Design">Design</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "Food"} name="cat" value="Food" id="Food" onChange={e => setCat(e.target.value)}/>
                    <label htmlfor="Food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Write;