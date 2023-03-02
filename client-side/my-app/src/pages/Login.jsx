import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [Input, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("/auth/login", Input);
            navigate("/");
        }catch(err){
            setErr(err.response.data);
        }
    };
    
    return(
        <div className="auth">
             <h1>Login</h1>
             <form>
              <input type="text" placeholder="userName" name="username" onChange={handleChange} />
              <input password="text" placeholder="passWord" name="password" onChange={handleChange}/>
              <button>Login</button>
              {err && <p>{err}</p>}
              <span> Don't you have an account? <Link to="/register">Register</Link> </span>
             </form>
        </div>
    )
};

export default Login;