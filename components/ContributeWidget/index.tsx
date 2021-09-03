import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './contributeWidget.module.scss';
import { Button } from '@material-ui/core';

interface props {
    setIsContributeVisible: any;
}

const Calculator: FC<props> = ({ setIsContributeVisible }) => {

    return (
        <div className={styles.popUpContainer} id={'con'}
            onClick={(e: any) => {
                if (e.target.id == 'con') {
                    setIsContributeVisible((s: any) => { return (!s) });
                }
            }}>
            <div className={styles.popUp}>
                <div className={styles.walletCon}>
                    <span className={styles.body}>
                        <span className={styles.minMax}>

                            <span className={styles.min}>
                                <p>Min Contribution</p>
                                <span>
                                    <h3>1000</h3>  <img src={assets.bnbCircle} alt='' />
                                </span>
                            </span>

                            <span className={styles.min}>
                                <p>Max Contribution</p>

                                <span>
                                    <h3>500</h3> <img src={assets.bnbCircle} alt='' />
                                </span>
                            </span>
                        </span>

                        <div className={styles.sec2}>
                            <span className={styles.counter}>
                                <img src={assets.minus} alt='' />

                                <span className={styles.center}>
                                    <p>100</p>
                                </span>

                                <img src={assets.plus} className={styles.plus} alt='' />
                            </span>
                        </div>

                        <div className={styles.sec3}>
                            <Button className={styles.submitBtnNewRed} color='primary' onClick={() => { setIsContributeVisible((s: any) => { return (!s) }); }}>Cancel</Button>
                            <Button className={styles.submitBtnNew} color='primary'>Confirm</Button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Calculator;