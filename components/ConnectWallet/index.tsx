import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './connectWallet.module.scss';

interface props {
    setIsWalletVisible: any;
}

const PopUp: FC<props> = ({ setIsWalletVisible }) => {

    return (
        <div className={styles.popUpContainer} id={'con'}
            onClick={(e: any) => {
                if (e.target.id == 'con') {
                    setIsWalletVisible((s: any) => { return (!s) });
                }
            }}>
            <div className={styles.popUp}>
                <div className={styles.walletCon}>
                    <span className={styles.header}>
                        <p>Connect to Wallet</p>
                        <img className={styles.close} src={assets.closeToast}
                            onClick={() => {
                                setIsWalletVisible((s: any) => { return (!s) });
                            }} />
                    </span>

                    <span className={styles.body}>
                        <div className={styles.row} style={{ marginBottom: '1.5rem' }}>
                            <span className={styles.iconCon}>
                                <img className={styles.icon} src={assets.w1} alt='' />
                                <p>Metamask</p>
                            </span>
                            <span className={styles.iconCon}>
                                <img className={styles.icon} src={assets.w4} alt='' />
                                <p>Wallet Connect</p>
                            </span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.iconCon}>
                                <img className={styles.icon} src={assets.w2} alt='' />
                                <p>Trust Wallet</p>
                            </span>
                            <span className={styles.iconConMore}>
                                <img className={styles.icon} src={assets.w3} alt='' />
                                <p>More</p>
                            </span>
                        </div>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default PopUp;