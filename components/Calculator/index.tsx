import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './connectWallet.module.scss';

interface props {
    setIsCalculatorVisible: any;
}

const Switch: FC = () => {
    const [on, setOn] = useState<boolean>(false);
    return (
        <div className={styles.textSwitch}>
            <div className={styles.switch} onClick={() => { setOn(s => !s) }}>
                {
                    on ? <div className={styles.switchBtnOn}>
                        <div className={styles.state}>
                            <p>On</p>
                            <span className={styles.sCircle} />
                        </div>
                    </div> :
                        <div className={styles.switchBtnOff}>
                            <div className={styles.state}>
                                <span className={styles.sCircle} />
                                <p>OFF</p>
                            </div>
                        </div>
                }
            </div>
            <input placeholder={'1000'} />
        </div>
    )
}

const Calculator: FC<props> = ({ setIsCalculatorVisible }) => {

    return (
        <div className={styles.popUpContainer} id={'con'}
            onClick={(e: any) => {
                if (e.target.id == 'con') {
                    setIsCalculatorVisible((s: any) => { return (!s) });
                }
            }}>
            <div className={styles.popUp}>
                <div className={styles.walletCon}>
                    <span className={styles.header}>
                        <p>Manage Calculator Settings</p>
                    </span>

                    <span className={styles.body}>
                        <span className={styles.switchInput}>
                            <p className={styles.sTitle}>Tokens allocated for Private sale/marketing</p>
                            <Switch />
                        </span>

                        <span className={styles.switchInput}>
                            <p className={styles.sTitle}>Amount to Deployer to keep</p>
                            <Switch />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Calculator;