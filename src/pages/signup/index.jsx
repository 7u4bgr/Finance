import React from "react";
import styles from "./index.module.css";
import Photo from "../../assets/images/Image.png";
import Logo from "../../assets/images/Logo.svg";
import Button from "../../components/UI/button";
import { GoogleIcon } from "../../icons";
import Vector1 from "../../assets/images/Vector1.svg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={styles.control}>
      <div className={styles.login}>
        <div className={styles.text1}>
          <img src={Logo} alt="" />
          <h2>Maglo.</h2>
        </div>
        <div className={styles.text2}>
          <h2>Create new account</h2>
          <p>Welcome back! Please enter your details</p>
        </div>
        <div className={styles.text3}>
          <h2>Full Name</h2>
          <input placeholder="Mahfuzul Nabil" type="email" />
        </div>
        <div className={styles.text3}>
          <h2>Email</h2>
          <input placeholder="example@gmail.com" type="email" />
        </div>
        <div className={styles.text4}>
          <h2>Password</h2>
          <input value="icon==7" type="password" />
        </div>
        <div className={styles.text8}>
          <button>Create Account</button>
        </div>
        <div className={styles.text9}>
          <Link
          target="_blank"
            to={
              "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=tr&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1928959609%3A1699096885761208&theme=glif"
            }
          >
            <GoogleIcon />
            Sign up with google
          </Link>
        </div>
        <div className={styles.text10}>
          <p>Already have an account?</p>
          <Link to={"/"}>Sign in</Link>
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

export default Signup;
