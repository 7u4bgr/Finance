import React, { useState } from "react";
import styles from "./index.module.css";
import Menu from "../../components/menu";
import Wrapper from "../../components/UI/wrapper/";
import Users from "../../components/users";
import Data from "../../components/data.json";
import Recent from "../../components/recent.json";
import {
  ExpencesIcon,
  GrayIcon,
  IncomeIcon,
  MasterIcon,
  PayIcon,
  RotateIcon,
  VisaIcon,
  Wallet1Icon,
} from "../../icons";
import Chart from "../../components/chart";
import Card1 from "../../assets/images/blackcard.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activehover, setActivehover] = useState("balance");
  const [data, setData] = useState([
    [4000, 7000, 5000, 10000, 5000, 4000, 1000],
    [5000, 4000, 7000, 8000, 5000, 3000, 2000],
  ]);
  const ChangeData = (active, data1) => {
    setActivehover(active);
    setData(data1);
  };
  return (
    <div className={styles.background}>
      <Menu active={"dashboard"} />
      <div className={styles.control}>
        <Users title={"Dashboard"} />
        <Wrapper>
          <div className={styles.flexwrap}>
            <div className={styles.control1}>
              <div className={styles.control4}>
                <div className={styles.price}>
                  <div
                    onClick={() => {
                      ChangeData("balance", [
                        [4000, 7000, 5000, 10000, 5000, 4000, 1000],
                        [5000, 4000, 7000, 8000, 5000, 3000, 2000],
                      ]);
                    }}
                    className={
                      activehover == "balance"
                        ? styles.activehover
                        : styles.button1
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
                  <div
                    onClick={() =>
                      ChangeData("spending", [
                        [1000, 6000, 8000, 5000, 11000, 9000, 4500],
                        [3500, 4200, 7000, 12000, 15000, 13000, 19000],
                      ])
                    }
                    className={
                      activehover == "spending"
                        ? styles.activehover
                        : styles.button2
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
                  <div
                    onClick={() => ChangeData("saved", [
                      [12000, 16500, 18200, 15150, 17000, 19000, 4100],
                      [500, 14200, 17050, 13000, 17300, 8200, 13020],
                    ])}
                    className={
                      activehover == "saved"
                        ? styles.activehover
                        : styles.button3
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
                </div>
                <div className={styles.lines}>
                  <div className={styles.linetexts}>
                    <div className={styles.working}>
                      <h2>Working Capital</h2>
                    </div>
                    <div className={styles.incomes}>
                      <div className={styles.income}>
                        <IncomeIcon />
                        <h2>Income</h2>
                      </div>
                      <div className={styles.expences}>
                        <ExpencesIcon />
                        <h2>Expences</h2>
                      </div>
                    </div>
                    <select>
                      <option>Last 1 days</option>
                      <option>Last 3 days</option>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 6 months</option>
                      <option>Last 1 year</option>
                    </select>
                  </div>
                  <div className={styles.chartcontrol}>
                    <Chart data={data} />
                  </div>
                </div>
                <div className={styles.transactionbar}>
                  <div className={styles.transactioncontrol}>
                    <div className={styles.recent}>
                      <h2>Recent Transaction</h2>
                    </div>

                    <Link to={"/transaction"} className={styles.rotates}>
                      <button>View All</button>
                      <RotateIcon />
                    </Link>
                  </div>
                  <div className={styles.transactionnames}>
                    <div className={styles.names}>
                      <h2>NAME/BUSINESS</h2>
                    </div>
                    <div className={styles.typesnames}>
                      <h2>TYPE</h2>
                      <h2>AMOUNT</h2>
                      <h2>DATE</h2>
                    </div>
                  </div>
                  <div className={styles.datacontrol}>
                    {Data.map((item) => {
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
                              <h2>{item.type}</h2>
                              <h3>{item.price}</h3>
                              <h1>{item.date}</h1>
                            </div>
                          </div>
                          <hr />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.wallets}>
              <div className={styles.wallettext}>
                <h2>Wallets</h2>
              </div>
              <div className={styles.imagescard}>
                <div className={styles.cardtext}>
                  <div className={styles.texts3}>
                    <h2>Maglo.</h2>
                    <hr />
                    <h3>Universal Bank</h3>
                  </div>
                  <div className={styles.texts4}>
                    <div className={styles.gray}>
                      <GrayIcon />
                    </div>
                    <div className={styles.pay}>
                      <PayIcon />
                    </div>
                  </div>
                  <div className={styles.cardnumber}>
                    <p>5495 7381 3759 2321</p>
                  </div>
                  <div className={styles.mastericon}>
                    <MasterIcon />
                  </div>
                </div>
                <div className={styles.whitetext}>
                  <div className={styles.texts5}>
                    <h2>Maglo.</h2>
                    <hr />
                    <h3>Commercial Bank</h3>
                  </div>
                  <div className={styles.texts6}>
                    <div className={styles.gray}>
                      <GrayIcon />
                    </div>
                    <div className={styles.pay}>
                      <PayIcon />
                    </div>
                  </div>
                  <div className={styles.cardnumber1}>
                    <p>85952548****</p>
                  </div>
                  <div className={styles.visaicon}>
                    <p>09/25</p>
                    <VisaIcon />
                  </div>
                </div>
              </div>
              <div className={styles.transactioncontrol1}>
                <div className={styles.recent1}>
                  <h2>Recent Transaction</h2>
                </div>

                <Link to={"/transaction"} className={styles.rotates1}>
                  <button>View All</button>
                  <RotateIcon />
                </Link>
              </div>
              <div className={styles.recentcontrol}>
                {Recent.map((items) => {
                  return (
                    <>
                      <div className={styles.recentcontrols}>
                        <div className={styles.recentcontrol1}>
                          <div className={styles.imglink}>
                            <img src={items.image} alt="" />
                          </div>
                          <div className={styles.textlink}>
                            <h2>{items.name}</h2>
                            <p>{items.date}</p>
                          </div>
                        </div>
                        <div className={styles.recentcontrol2}>
                          <h2>{items.price}</h2>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Dashboard;
