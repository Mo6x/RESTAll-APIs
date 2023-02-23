import React from "react";
import Logo from "../asserts/blog-mn.png";

const Footer = () => {
    return(
        <footer>
          <img src={Logo} alt="" />
          <span>
            Made with <b>React.js</b>
          </span>
        </footer>
    )
}
export default Footer;