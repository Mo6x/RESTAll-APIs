import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const Write = () => {
 const [value, setvalue] = useState(" ");
    return(
        <div className="add">
            <diV className="content">
                <input type="text" placeholder="Title" />
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
                    <input step={{display: "name"}} type="file" id="file" name="" />
                    <label className="file" htmlFor="file">Upload Image</label>
                   <div className="buttons">
                    <button>Save as a draft</button>
                    <button>Update</button>
                   </div> 
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="cat" value="art" id="art" />
                    <label htmlfor="art">Art</label>
                    <input type="radio" name="cat" value="Science" id="Science" />
                    <label htmlfor="Science">Science</label>
                    <input type="radio" name="cat" value="Technology" id="Technology" />
                    <label htmlfor="Technology">Technology</label>
                    <input type="radio" name="cat" value="Cinema" id="Cinema" />
                    <label htmlfor="Cinema">Cinema</label>
                    <input type="radio" name="cat" value="Design" id="Design" />
                    <label htmlfor="Design">Design</label>
                    <input type="radio" name="cat" value="Food" id="Food" />
                    <label htmlfor="Food">Food</label>
                </div>
            </div>
        </div>
    )
}
export default Write;