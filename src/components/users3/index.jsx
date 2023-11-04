import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper"
import { AssetsIcon, NotficationIcon, SearchIcon } from "../../icons";
import Users1 from '../../assets/images/users1.png'
const Users3 = ({title}) => {
  return (
    <div className={styles.background}>
        <Wrapper>

      <div className={styles.control}>
        <div className={styles.text1}>
          <h2>{title}</h2>
        </div>
        <div className={styles.text2}>
          <NotficationIcon/>
          <div className={styles.button1}>
              <img src={Users1} alt="Users1" />
              <h2>Mahfuzul Nabil</h2>
              <AssetsIcon/>
          </div>
        </div>
      </div>
        </Wrapper>
    </div>
  );
};

export default Users3;
