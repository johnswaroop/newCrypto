import styles from './toast.module.scss';
import * as assets from '@/assets';
import React, { FC } from 'react';

interface props {
    type: boolean;
}

const Toast: FC<props> = ({ type }) => {
    return (
        <div className={styles.toast}>
            <span className={styles.imgCon}>
                <img src={assets.failed} alt='' />
            </span>

            <span className={styles.textCon}>
                <h4>Transaction successful</h4>
                <p>Token has been alloted</p>
            </span>

            <img src={assets.closeToast} className={styles.closeToast} alt='' />
        </div>
    )
}

export default Toast;