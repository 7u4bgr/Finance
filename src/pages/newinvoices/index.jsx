import React from "react";
import styles from './index.module.css'


import Ellipse1 from "../../assets/images/Ellipse1.svg";
import Profilphoto1 from "../../assets/images/Profilphoto1.svg";
import { DownloadIcon, Preview, PreviewIcon, VerifiedIcon } from "../../icons";
import Menu from "../../components/menu";
import Users from "../../components/users";

const NewInvoices = () => {
  return (
    <>
      <div className={styles.control}>
       <Menu active={"invoices"}/>
        <div className={styles.control1}>
          <Users title={"New Invoices:  MGL524874"}/>

          <div className={styles.flexwrap}>
            <div className={styles.part1}>
              <div className={styles.column1}>
                <div className={styles.text1}>
                  <img src={Ellipse1} alt="" />
                  <div className={styles.text2}>
                    <h2>Maglo</h2>
                    <p>sales@maglo.com</p>
                  </div>
                </div>
                <div className={styles.text3}>
                  <h2>1333 Grey Fox Farm Road</h2>
                  <h2>Houston, TX 77060</h2>
                  <h2>Bloomfield Hills, Michigan(MI), 48301</h2>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.textscontrol}>
                  <div className={styles.text4}>
                    <div className={styles.invoicenumber}>
                      <h2>Invoice Number</h2>
                    </div>
                    <div className={styles.invoicenumber1}>
                      <p>MAG 2541420</p>
                      <p>Issued Date: 10 Apr 2022</p>
                      <p>Due Date: 20 Apr 2022</p>
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <div className={styles.invoicenumber2}>
                      <h2>Billed to</h2>
                    </div>
                    <div className={styles.invoicenumber3}>
                      <p>Sajib Rahman</p>
                      <p>3471 Rainy Day Drive</p>
                      <p>Needham, MA 02192</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column3}>
                <h2>Item Details</h2>
                <p>Details item with more info</p>
              </div>
              <div className={styles.column4}>
                <div className={styles.text6}>
                  <h2>ITEM</h2>
                </div>
                <div className={styles.text7}>
                  <h2>ORDER/TYPE</h2>
                  <h2>RATE</h2>
                  <h2>AMOUNT</h2>
                </div>
              </div>
              <div className={styles.column5}>
                <div className={styles.text8}>
                  <h2>Iphone 15 Pro Max</h2>
                </div>
                <div className={styles.text9}>
                  <div className={styles.text10}>
                    <h2>01</h2>
                  </div>
                  <div className={styles.text10}>
                    <h2>$244</h2>
                  </div>
                  <div className={styles.text10}>
                    <h2>$244.00</h2>
                  </div>
                </div>
              </div>
              <div className={styles.column5}>
                <div className={styles.text8}>
                  <h2>Netflix Subscription</h2>
                </div>
                <div className={styles.text9}>
                  <div className={styles.text10}>
                    <h2>01</h2>
                  </div>
                  <div className={styles.text10}>
                    <h2>$420</h2>
                  </div>
                  <div className={styles.text10}>
                    <h2>$420.00</h2>
                  </div>
                </div>
              </div>
              <div className={styles.column7}>
                <div className={styles.text12}>
                  <h2>Add Item</h2>
                </div>
                <div className={styles.text13}>
                  <div className={styles.text14}>
                    <h2>Subtotal</h2>
                    <h2>Discount</h2>
                    <h2>Tax</h2>
                    <hr />
                    <h2>Total</h2>
                  </div>
                  <div className={styles.text15}>
                    <h2>$664.00</h2>
                    <h3>Add</h3>
                    <h3>Add</h3>
                    <hr />
                    <h2>$664.00</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.part2}>
              <div className={styles.row}>
                <div className={styles.rowtext1}>
                  <h2>Client Details</h2>
                </div>
                <div className={styles.rowtext2}>
                  <div className={styles.rowimg}>
                    <img src={Profilphoto1} alt="" />
                  </div>
                  <div className={styles.rowtext3}>
                    <h2>Sajib Rahman</h2>
                    <p>rahmansajib@uihut.com</p>
                  </div>
                </div>
                <hr />
                <div className={styles.rowtext4}>
                  <div className={styles.verified}>
                  <h2>UIHUT Agency LTD</h2>
                  <VerifiedIcon/>
                  </div>
                  <p>3471 Rainy Day Drive Tulsa, USA</p>
                  <button>Add Customer</button>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.rows1}>
                        <h2>Basic Info</h2>
                </div>
                <div className={styles.rows2}>
                      <div className={styles.date1}>
                        <p>Invoice Date</p>
                      </div>
                      <div className={styles.dateinput}>
                          <input placeholder="14 Apr 2023" value="2023-04-14" type="date" />
                      </div>
                </div>
                <div className={styles.rows2}>
                      <div className={styles.date1}>
                        <p>Due Date</p>
                      </div>
                      <div className={styles.dateinput}>
                          <input placeholder="14 Apr 2023" value="2023-04-22" type="date" />
                      </div>
                  <button>Send Invoice</button>
                  <div className={styles.buttons}>
                    <button>
                      <PreviewIcon/>
                      Preview
                    </button>
                    <button>
                      <DownloadIcon/>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewInvoices;
