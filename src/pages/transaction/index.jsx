import React from "react";
import styles from "./index.module.css";


import { SearchIcon } from "../../icons";
import ActionData from "../../components/actiondata.json";
import Menu from "../../components/menu";
import Users from "../../components/users";
const Transaction = () => {
  return (
    <div className={styles.control}>
     <Menu active={"transaction"}/>
      <div className={styles.flexcontrol}>
       <Users title={"Transaction"}/>
        <div className={styles.input}>
          <SearchIcon />
          <input
            placeholder="Search anything on Transactions"
            type="text"
          ></input>
        </div>
        <hr />
        <div className={styles.transactionnames}>
                    <div className={styles.names}>
                      <h2>NAME/BUSINESS</h2>
                    </div>
                    <div className={styles.typesnames}>
                      <h2>TYPE</h2>
                      <h2>AMOUNT</h2>
                      <h2>DATE</h2>
                      <h2>INVOICE ID</h2>
                      <h2>ACTION</h2>
                    </div>
                  </div>
        <div className={styles.datacontrol}>
          {ActionData.map((item) => {
            return (
              <>
                <div className={styles.namescontrol}>
                  <div className={styles.names1}>
                    <div className={styles.imagecontrol}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={styles.imageflex}>
                      <h2>{item.name}</h2>
                      <p>{item.model}</p>
                    </div>
                  </div>
                  <div className={styles.typesnames1}>
                    <h1>{item.type}</h1>
                    <h3>{item.price}</h3>
                    <div className={styles.uhr}>
                      <h2>{item.date}</h2>
                      <p>{item.uhr}</p>
                    </div>
                    <h4>{item.invoice}</h4>
                    <div className={styles.button}>

                    <button>View</button>
                    </div>
                    
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
