import React, { useState } from "react";
import styles from "./index.module.css";
import Photo from "../../assets/images/Image.png";
import Logo from "../../assets/images/Logo.svg";
import Button from "../../components/UI/button";
import { GoogleIcon } from "../../icons";
import Vector1 from "../../assets/images/Vector1.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const [pass, setPass] = useState("aaaaaaaaa");
  const handleChange = (event) => {
    setPass(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={styles.control}>
      <div className={styles.login}>
        <div className={styles.text1}>
          <img src={Logo} alt="" />
          <h2>Maglo.</h2>
        </div>
        <div className={styles.text2}>
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details</p>
        </div>
        <div className={styles.text3}>
          <h2>Email</h2>
          <input placeholder="Enter your email" type="email" />
        </div>
        <div className={styles.text4}>
          <h2>Password</h2>
          <input value={pass} onChange={handleChange} type="password" />
        </div>
        <div className={styles.text5}>
          <div className={styles.text6}>
            <input type="checkbox" />
            <h2>Remember for 30 Days</h2>
          </div>
          <div className={styles.text7}>
            <Link target="_blank" to={"https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmyaccount.google.com%2F&dsh=S1745039620%3A1699097053514657&ec=GAlAwAE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=tr&service=accountsettings&theme=glif&authuser=0"}>Forgot Password</Link>
          </div>
        </div>
        <div className={styles.text8}>
          <Link to={"/dashboard"}>Sign In</Link>
        </div>
        <div className={styles.text9}>
          <Link target="_blank"
            to={
              "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=tr&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1928959609%3A1699096885761208&theme=glif"
            }
          >
            <GoogleIcon />
            Sign in with google
          </Link>
        </div>
        <div className={styles.text10}>
          <p>Don’t have an account?</p>
          <Link to={"/signup"}>Sign up for free</Link>
        </div>
        <div className={styles.text11}>
          <img src={Vector1} alt="Vector1" />
        </div>
      </div>
      <div className={styles.photo}>
        <img src={Photo} alt="Photo" />
      </div>
    </div>
  );
};

export default Login;
