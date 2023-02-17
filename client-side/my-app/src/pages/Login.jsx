import React from "react";

const Login = () => {
    return(
        <div className="auth">
             <h1>Login</h1>
             <form>
              <input type="text" placeholder="userName" />
              <input password="text" placeholder="passWord" />
              <button>Login</button>
             </form>
        </div>
    )
};

export default Login;