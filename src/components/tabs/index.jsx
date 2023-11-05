import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./index.module.css";
import { Wallet1Icon } from "../../icons";
import { useState } from "react";
import Chart from '../chart'
import   './style.css'
const Tabss = () => {
  const [activehover, setActivehover] = useState("balance");
  return (
    <Tabs className={"tabs"}>
      <TabList>
        <div className={styles.price}>
          <Tab>
            <div
              onClick={() => setActivehover("balance")}
              className={
                activehover == "balance" ? styles.activehover : styles.button1
              }
            >
              <div className={styles.svgback}>
                <Wallet1Icon />
              </div>
              <div className={styles.texts}>
                <h2>Total Balance</h2>
                <p>$5240.21</p>
              </div>
            </div>
          </Tab>
          <Tab>
          <div
            onClick={() => setActivehover("spending")}
            className={
              activehover == "spending" ? styles.activehover : styles.button2
            }
          >
            <div className={styles.svgback}>
              <Wallet1Icon />
            </div>
            <div className={styles.texts}>
              <h2>Total spending</h2>
              <p>$250.80</p>
            </div>
          </div>
          </Tab>
          <Tab>

          <div
            onClick={() => setActivehover("saved")}
            className={
              activehover == "saved" ? styles.activehover : styles.button3
            }
          >
            <div className={styles.svgback}>
              <Wallet1Icon />
            </div>
            <div className={styles.texts}>
              <h2>Total saved</h2>
              <p>$550.25</p>
            </div>
          </div>
          </Tab>
        </div>

        
      </TabList>

      <TabPanel>
        <Chart/>
      </TabPanel>
      <TabPanel>
      <Chart/>
      </TabPanel>
      <TabPanel>
      <Chart/>
      </TabPanel>
    </Tabs>
  );
};
export default Tabss;
