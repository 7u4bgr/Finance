import React from "react";
import styles from "./index.module.css";
import Logo from "../../assets/images/Logo.svg";
import {
  DashboardIcon,
  HelpIcon,
  InvoicesIcon,
  LogoutIcon,
  SettingsIcon,
  TransactionIcon,
  WalletIcon,
} from "../../icons/";
import { Link } from "react-router-dom";
const Menu = ({active}) => {
  
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <Link to={'/dashboard'} className={styles.text1}>
          <img src={Logo} alt="Logo" />
          <h2>Maglo.</h2>
        </Link>
        <div className={styles.icons}>
          <Link to={'/dashboard'} className={active=="dashboard"?styles.active:styles.dashboard}>
            <div className={styles.icon1}>
              <DashboardIcon />
            </div>
            <h2>Dashboard</h2>
          </Link>
          <Link to={'/transaction'} className={active=="transaction"?styles.active:styles.dashboard}>
            <div className={styles.icon1}>
              <TransactionIcon />
            </div>
            <h2>Transaction</h2>
          </Link>
          <Link to={'/invoices'} className={active=="invoices"?styles.active:styles.dashboard}>
            <div className={styles.icon1}>
              <InvoicesIcon />
            </div>
            <h2>Invoices</h2>
          </Link>
          <Link to={'/wallets'} className={active=="wallets"?styles.active:styles.dashboard}>
            <div className={styles.icon1}>
              <WalletIcon />
            </div>
            <h2>My Wallets</h2>
          </Link>
          <Link to={'/settings'} className={active=="settings"?styles.active:styles.dashboard}>
            <div className={styles.icon1}>

            <SettingsIcon />
            </div>
            <h2>Settings</h2>
          </Link>
        </div>
        <div className={styles.icons1}>
        <Link to={'/helps'} className={active=="helps"?styles.active:styles.dashboard1}>
            <div className={styles.icon1}>
              <HelpIcon/>
            </div>
            <h2>Help</h2>
          </Link>
          <Link to={'/'} className={styles.dashboard1}>
            <div className={styles.icon1}>
              <LogoutIcon/>
            </div>
            <h2>Logout</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
