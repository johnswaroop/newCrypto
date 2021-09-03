import { FC } from 'react';
import * as assets from '../../assets';
import styles from './iconChip.module.scss';

interface Props {
    icon?: string;
    title: string;
    value: string;
}

const IconChip: FC<Props> = ({ title, value, icon }) => {
    return (
        <span className={styles.iconChip}>
            <span className={styles.iconContainer}>
                <img src={icon ? icon : assets.bnbIcon} />
            </span>

            <span className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <h2 className={styles.value}>{value}</h2>
            </span>
        </span>
    );
};

export default IconChip;