import React from "react";
import styles from "./index.module.css";
import Menu from "../../components/menu";
import Users from "../../components/users";
import { CreateIcon, FiltersIcon, PendingIcon, SearchIcon } from "../../icons";
import InvoicesData from "../../components/invoicesdata.json";
import { Link } from "react-router-dom";
const Transaction = () => {
  const getBackground=(color)=>{
      if(color=="Paid"){
        return"#D9FFE9"
      }
      else if(color=="Unpaid"){
        return"#FFEFEF"
      }
      
  }
  const getColor=(color)=>{
      if(color=="Paid"){
        return"#27AE60"
      }
      else if(color=="Unpaid"){
        return"#EB5757"
      }
      
  }
  return (
    <div className={styles.control}>
      <Menu active={"invoices"} />
      <div className={styles.flexcontrol}>
        <Users title={"Invoices"} />
        <div className={styles.filters}>
        <div className={styles.input}>
          <SearchIcon />
          <input
            placeholder="Search anything on Transactions"
            type="text"
          ></input>
        </div>
        <div className={styles.creates}>

      <Link to={"/newinvoices"} className={styles.button1}><CreateIcon/>Create Invoice</Link>
      <button className={styles.button2}><FiltersIcon/>Filters</button>
        </div>
        </div>
        <hr />
        <div className={styles.transactionnames}>
          <div className={styles.typesnames}>
            <h2 className={styles.texth2}>NAME/CLIENT</h2>
            <h2>DATE</h2>
            <h2>ORDERS/TYPE</h2>
            <h2>AMOUNT</h2>
            <h2>STATUS</h2>
            <h2>ACTION</h2>
          </div>
        </div>
        <div className={styles.datacontrol}>
          {InvoicesData.map((item) => {
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
                    <div className={styles.uhr}>
                      <h2>{item.date}</h2>
                      <p>{item.uhr}</p>
                    </div>
                    <h2>{item.type}</h2>
                    <h3>{item.price}</h3>
                    <div className={styles.button}>

                    <button style={{background:getBackground(item.button),color:getColor(item.button)}}>{item.button}</button>
                    </div>
                    <PendingIcon/>
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
