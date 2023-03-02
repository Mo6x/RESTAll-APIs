import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Register = () => {
    const [Inputs, setInput] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [err, setErr] = useState(null);

    const handleChange = e => {
       setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    };
    
    const  navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try{
        await axios.post("/auth/register", Inputs); 
        navigate("/login");
        }catch(err){
        setErr(err.respone.data);
        };
    };
    return(
        <div className="auth">
             <h1>Register</h1>
             <form>
              <input required type="text" placeholder="userName" name="username" onChange={handleChange} />
              <input required="email" placeholder="email" name="email" onChange={handleChange} />
              <input required type="password" placeholder="passWord" name="password" onChange={handleChange} />
              <button onClick={handleSubmit}>Register</button>
              {err && <p>err!</p>} 
              <span> Do you have an account? <Link to="/login">Login</Link> </span>
             </form>
        </div>
    )
};

export default Register;