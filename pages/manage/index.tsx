import { FC, useState } from "react";
import Content from "@/components/Content";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import styles from "./manage.module.scss";
import * as assets from '@/assets';
import ConnectWallet from '@/components/ConnectWallet';
import { Button } from "@material-ui/core";
import Calculator from "@/components/Calculator";

const routes: string[] = [];

interface fieldProps {
  title: string;
  value: string;
}

interface cPanelProps {
  title: string;
  panelNo: number;
  activePanelNo: number;
  handleExpand(no: number): any;
}

interface socialProps {
  icon: string
}

const Field: FC<fieldProps> = ({ title, value }) => {
  return (
    <span className={styles.field}>
      <p className={styles.key}>{title} :</p>
      <h4 className={styles.value}>{value}</h4>
    </span>
  );
};

const Social: FC<socialProps> = ({ icon }) => {
  return (
    <span className={styles.link}>
      <img src={icon} alt="" />
      <span className={styles.input}>
        <input type="text" placeholder="Search Tokens" />
        <span className={styles.customBorder} />
      </span>
    </span>
  )
}

const CPanel: FC<cPanelProps> = ({
  title,
  children,
  activePanelNo,
  panelNo,
  handleExpand,
}) => {
  const active: boolean = panelNo == activePanelNo;
  return (
    <div className={styles.panel4}>
      <span className={styles.panelHead}>
        <img src={assets.success} alt="" />
        <h3 className={styles.panelTitle}>{title}</h3>
        <img
          className={active ? styles.arrowReverse : styles.arrow}
          src={assets.arrowDown}
          alt=""
          onClick={() => {
            active ? handleExpand(0) : handleExpand(panelNo);
          }}
        />
      </span>
      {children && active ? (
        <span className={styles.panelBody}>{children}</span>
      ) : null}
    </div>
  );
};

const Home: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(!false);
  const [ActivePanelNo, setActivePanelNo] = useState<number>(0);

  const handleExpand = (no: number) => {
    setActivePanelNo(no);
  };

  const [inFocus, setInFocus] = useState<boolean>(false);
  const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState<boolean>(false);
  const handleFocus = () => {
    setInFocus((f) => !f);
  };

  return (
    <>
      <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} setIsCalculatorVisible={setIsCalculatorVisible} />
      <div>
        <Content styling={isWalletVisible ? {
          overflow: "hidden",
          maxHeight: "100vh",
        } : {}}>
          {isWalletVisible && <ConnectWallet setIsWalletVisible={setIsWalletVisible} />}
          {isCalculatorVisible && <Calculator setIsCalculatorVisible={setIsCalculatorVisible} />}
          <SideNav darkMode={darkMode} setDarkMode={setDarkMode}></SideNav>
          <div className={styles.manage}>
            <span className={styles.header}>
              <h1>Manage your presale</h1>
            </span>
            <div className={styles.form}>
              <div className={styles.manageRowOne}>
                <div className={styles.panel1}>
                  <h3 className={styles.panelTitle}>Token Information</h3>
                  <div className={styles.row}>
                    <span className={styles.colLeft}>
                      <Field title={"Name"} value={"Jupiter Coin"} />
                      <Field title={"Symbol"} value={"JPC"} />
                    </span>
                    <span className={styles.colLeft}>
                      <Field title={"Address"} value={"1234651111"} />
                      <Field title={"Total Sypply"} value={"Jupiter Coin"} />
                    </span>
                  </div>
                </div>
                <div className={styles.panel2}>
                  <h3 className={styles.panelTitle}>Presale Information</h3>
                  <div className={styles.row}>
                    <div className={styles.presaleRow}>
                      <span className={styles.colLeft}>
                        <Field title={"Name"} value={"Jupiter Coin"} />
                        <Field title={"Symbol"} value={"JPC"} />
                      </span>
                      <span className={styles.colLeft}>
                        <Field title={"Address"} value={"1234651111"} />
                        <Field title={"Total Sypply"} value={"Jupiter Coin"} />
                      </span>
                    </div>
                    <div className={styles.presaleRow}>
                      <span className={styles.colLeft}>
                        <Field title={"Address"} value={"1234651111"} />
                        <Field title={"Total Sypply"} value={"Jupiter Coin"} />
                      </span>
                      <span className={styles.colRight}>
                        <Field title={"Start at"} value={"2/1/2013 7:37:08 AM"} />
                        <Field title={"End at"} value={"2/1/2013 7:37:08 AM"} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.panel3}>
                <p className={styles.panelTitle}>Share Presale Link</p>
                <h3 className={styles.valueLink}>
                  {"https://youtu.be/dQw4w9WgXcQ"}
                  <span className={styles.copyLink} style={darkMode ? {background : "white"} : {background: "#A4A5A5"}} />
                </h3>
              </div>

              <CPanel
                title={"Step 1 - Desposit Tokens"}
                activePanelNo={ActivePanelNo}
                panelNo={1}
                handleExpand={handleExpand}
              >
                <div className={styles.depositToken}>
                  <p className={styles.valueWallet}>
                    You will need atleast 1000 Tokens in your wallet :
                    0x0000000000000000000000000123
                  </p>
                  <Button className={styles.btn}>Deposit</Button>

                </div>
              </CPanel>
              <CPanel
                title={"Step 2 - Share Presale Link"}
                activePanelNo={ActivePanelNo}
                panelNo={2}
                handleExpand={handleExpand}
              >
                <span className={styles.shareLink}>
                  <p className={styles.value}>
                    Your presale is all set up ! Click here to copy the link.
                    Share this with your group so they can contribute.
                    <br />
                    Once the presale fills, head to step 3 to finalize, or to
                    cancel if it fails.
                  </p>
                </span>
              </CPanel>
              <CPanel title={"Step 3 - Finalize or Cancel"} activePanelNo={ActivePanelNo} panelNo={3} handleExpand={handleExpand} >
                <span className={styles.finalize}>
                  <p className={styles.value}>
                    Your tokens have been deposited click finalize to confirm
                    the process or cancel to abort
                  </p>
                  <Button className={styles.btn}>Finalize</Button>
                  <Button className={styles.btnRed}>Cancel</Button>
                </span>
              </CPanel>
              <CPanel title={"Optional Update Presale"} activePanelNo={ActivePanelNo} panelNo={4} handleExpand={handleExpand}>
                <span className={styles.optional}>
                  <span className={styles.input}>
                    <p className={styles.inputTitle}>Upload a Logo</p>
                    <input type="text" placeholder={"www.binance.com/sale/coin"} />
                    <span className={styles.customBorder} />
                  </span>
                  <span className={styles.logoLarge}><img src={assets.bnbIcon} alt="" /></span>
                </span>
                {/* Presale information */}
                <span className={styles.optional}>
                  <span className={styles.inputOptional}>
                    <p className={styles.inputTitle}>Presale Information</p>
                    <textarea placeholder={"Enter Information regarding the Presale Information"} rows={8} />
                    <span className={styles.customBorder} />
                  </span>
                </span>
                {/* Social Links*/}
                <span className={styles.optional}>
                  <span className={styles.socialOptional}>
                    <div className={styles.row}>
                      <Social icon={assets.facebook} />
                      <Social icon={assets.twitter} />
                    </div>
                    <div className={styles.row}>
                      <Social icon={assets.instagram} />
                      <Social icon={assets.telegram} />
                    </div>
                  </span>
                </span>
                <span className={styles.save}>
                  <Button className={styles.btn}>Save</Button>
                </span>
              </CPanel>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
