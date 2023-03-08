import { db } from "../db.js";
import jwt from "jsonwebtoken";


export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.send(err);
        return res.status(500).json(data);
    });
};


export const getPost = (req, res) => {
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img, `cat`, `date`, FROM users u JSON posts p ON u.id=p.uid WHERE p.id = ? "

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data[0]);
    });
};

export const addPost = (req, res) => {
    res.json("from controller")
};


export const deletePost = (req, res) => {
    const token = req.cookie.access_token
    if(!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

        const postId =  req.params.id
        const q = "DELETE FROM post WHERE `id` = ? AND `uid` = ?";

        db.query(q, [postId, userInfo.id], (err, data) => {
            if(err) return res.status(403).json("You can delete only your post");
            return res.json("post has been deleted");
        })
    })
};


export const updatePost = (req, res) => {
    res.json("from controller")
};
