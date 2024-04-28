import React from "react";
import "./Login.css";
import Logo from "../images/logo.png";

const Login = (props) => {
  return (
    <>
      <div className="signup">
        <span className="close" id="closePopup" onClick={props.toggle}>
          ×
        </span>
        <div className="structure">
          <center>
            <img src={Logo} height="300px" id="logo"/>
          </center>
          <h1 className="head1">Log In to Stellar Snap</h1>
          <center>
            <p className="para"></p>
          </center>
          <p className="para1">Email</p>
          <input type="email" placeholder="Email" className="input1" />
          <p className="para2">Password</p>
          <input type="password" placeholder="Password" className="input2" />
          <center>
            <a href="/feed">
              <button className="but1">Log In</button>
            </a>
          </center>
          <center>
            <p className="para4">OR</p>
          </center>
          <center>
            <button className="but2">
              {" "}
              <img
                className="img"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/U7MAWJlE6hZ.png"
                alt=""
                width={24}
                height={24}
              />
              Continue with Facebook
            </button>
          </center>
          <pre className="pre1">
            By continuing, you agree to Stellar Snap's {"\n"}
            <b className="bold1">Terms of Service</b> and acknowledge you've
            read our {"\n"}
            <b className="bold1"> Privacy Policy. Notice at collection.</b>{" "}
            {"\n"}
            <div className="div3">
              {" "}
            </div>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Login;
