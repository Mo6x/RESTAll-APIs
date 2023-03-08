import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/posts.js";
import postRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express();

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
    cb(null, ".../client-side/my-app/public/upload");
   },
   filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
   }
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function(req, res){
    const file = req.file;
    res.status(200).json("file.filename");
})

app.use("api/auth", authRoutes);
app.use("api/user", userRoutes);
app.use("api/post", postRoutes);



app.listen(5000, ()=> {
    console.log("Server Connected Successfully");
});
