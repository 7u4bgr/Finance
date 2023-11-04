import React, { useState } from "react";
import styles from "./index.module.css";
import Menu from "../../components/menu";
import Users3 from "../../components/users3";
import { EditIcon, EmailIcon, EyeIcon, LockIcon } from "../../icons";
const Settings = () => {
  const [pwd, setPwd] = useState('password');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [pwdd, setPwdd] = useState('password');
  const [isRevealPwdd, setIsRevealPwdd] = useState(false);


  return (
    <div className={styles.control}>
      <Menu active={"settings"} />
      <div className={styles.flexcontrol}>
        <Users3 title={"Settings"} />
        <div className={styles.rows}>
          <div className={styles.account}>
            <h2>Account Information</h2>
            <p>Update your account information</p>
          </div>
          <div className={styles.edits}>
            <div className={styles.personal}>
              <h2>Personal Information</h2>
            </div>
            <div className={styles.personaledit}>
              <EditIcon />
              <h2>Edit</h2>
            </div>
          </div>
          <div className={styles.informations}>
            <div className={styles.names}>
              <div className={styles.first}>
                <h2>First Name</h2>
                <input placeholder="Mahfuzul Islam" type="text" />
              </div>
              <div className={styles.first}>
                <h2>Last</h2>
                <input placeholder="Nabil" type="text" />
              </div>
            </div>
            <div className={styles.names}>
              <div className={styles.first}>
                <h2>Date of Birth</h2>
                <input value="1998-09-27" type="date" />
              </div>
              <div className={styles.first}>
                <h2>Mobile Number</h2>
                <input placeholder="+123 456 7890" type="text" />
              </div>
            </div>
            <div className={styles.emails}>
              <div className={styles.emailh2}>
                <h2>Email</h2>
              </div>
              <EmailIcon />
              <input placeholder="hellouihut@gmail.com" type="email" />
            </div>
            <div className={styles.names1}>
              <div className={styles.first1}>
                <div className={styles.firsttext}>
                  <h2>New Password</h2>
                </div>
                <div className={styles.icons}>
                  <LockIcon />
                  <div onClick={() => setIsRevealPwd(prevState => !prevState)} className={styles.eyes}>
                    <EyeIcon />
                  </div>
                  <input type={isRevealPwd ? "text" : "password"} onChange={e => setPwd(e.target.value)} value={pwd} />
                </div>
              </div>
              <div className={styles.first1}>
                <div className={styles.firsttext}>
                  <h2>Confirm Password</h2>
                </div>
                <div className={styles.icons}>
                  <LockIcon />
                  <div onClick={() => setIsRevealPwdd(prevState => !prevState)} className={styles.eyes}>
                    <EyeIcon />
                  </div>
                  <input type={isRevealPwdd ? "text" : "password"} onChange={e => setPwdd(e.target.value)} value={pwdd} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
