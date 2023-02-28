import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/posts.js";
import postRoutes from "./routes/users.js";


const app = express();

app.use(express.json());
app.use("api/auth", authRoutes);
app.use("api/user", userRoutes);
app.use("api/post", postRoutes);



app.listen(5000, ()=> {
    console.log("Server Connected Successfully");
});
