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
                  <ReactQuill theme="snow" value={value} onChange={setvalue} />
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
                    <label htmlFor="">Upload Image</label>
                   <div className="buttons">
                    <button>Save as a draft</button>
                    <button>Update</button>
                   </div> 
                </div>
                <div className="item">
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}
export default Write;