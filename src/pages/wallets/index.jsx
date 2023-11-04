import React from "react";
import styles from "./index.module.css";
import Menu from "../../components/menu";
import Users3 from "../../components/users3";
import {
  DownIcon,
  GrayIcon,
  MasterIcon,
  PayIcon,
  PlusIcon,
  SearchIcon,
  UpIcon,
  VisaIcon,
} from "../../icons";
import PaymentsData from "../../components/paymentsdata.json";
import ComingsData from '../../components/comingdata.json'
const Wallets = () => {
  return (
    <div className={styles.control}>
      <Menu active={"wallets"} />
      <div className={styles.flexcontrol}>
        <Users3 title={"My Wallets"} />
        <div className={styles.partscontrol}>
          <div className={styles.part1}>
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
            <div className={styles.balanced}>
              <div className={styles.balance1}>
                <div className={styles.balancetext1}>
                  <div className={styles.yourbalance}>
                    <h2>Your Balance</h2>
                  </div>
                  <div className={styles.balanceprice}>
                    <div className={styles.balancedollar}>
                      <h2>$5240.00</h2>
                    </div>
                    <div className={styles.balanceupdown}>
                      <div className={styles.balanceup}>
                        <UpIcon />
                        <h2>23.65%</h2>
                      </div>
                      <div className={styles.balancedown}>
                        <DownIcon />
                        <h2>10.40%</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.balance2}>
                <div className={styles.usd1}>
                  <p>Currency</p>
                  <h2>USD / US Dollar</h2>
                </div>
                <div className={styles.usd1}>
                  <p>Status</p>
                  <h2>Active</h2>
                </div>
              </div>
            </div>
            <button>
              <PlusIcon />
              Add New Card
            </button>
          </div>
          <div className={styles.part2}>
            <div className={styles.rows}>
              <div className={styles.payments}>
                <h2>My Payments</h2>
              </div>
              <div className={styles.paymentscontrol}>
                <div className={styles.allpayments}>
                  <h2>All Payments</h2>
                  <h3>Regular Payments</h3>
                </div>
                <div className={styles.search}>
                  <SearchIcon />
                  <h2>Search</h2>
                </div>
              </div>
              <hr />
              <div className={styles.today}>
                <h2>Today</h2>
              </div>
              {PaymentsData.map((item) => {
                return (
                  <div className={styles.map1}>
                    <div className={styles.left1}>
                      <div className={styles.mapimg}>
                        <img src={item.image} alt="" />
                      <div className={styles.lefttext}>
                        <h2>{item.name}</h2>
                        <p>{item.date}</p>
                      </div>
                      </div>
                    </div>
                    <div className={styles.right1}>
                        <h2>{item.price}</h2>
                    </div>
                  </div>
                );
              })}
              <div className={styles.upcomingh2}>
                <h2>Upcoming Payments</h2>
                <p>Next month</p>
              </div>
              {ComingsData.map((item) => {
                return (
                  <div className={styles.map1}>
                    <div className={styles.left1}>
                      <div className={styles.mapimg}>
                        <img src={item.image} alt="" />
                      <div className={styles.lefttext}>
                        <h2>{item.name}</h2>
                        <p>{item.date}</p>
                      </div>
                      </div>
                    </div>
                    <div className={styles.right1}>
                        <h2>{item.price}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
