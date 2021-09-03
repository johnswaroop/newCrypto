import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './toolTip.module.scss';

interface Props {
    closeToolTip?(): void;
    infoBoxText: string[];
}

const ToolTip: FC<Props> = ({ closeToolTip, infoBoxText }) => {

    const [infoIndex, setInfoIndex] = useState<number>(0);

    const nextInfo = () => {
        setInfoIndex((i) => {
            if (i < infoBoxText.length - 1) {
                ++i;
            }
            return i;
        });
    }

    const prevInfo = () => {
        setInfoIndex((i) => {
            if (i > 0) {
                --i;
            }
            return i;
        });
    }

    return (
        <span className={styles.toolTipCon}>
            <span className={styles.arrow} />

            <div className={styles.toolTip}>
                <p className={styles.info}>
                    {infoBoxText[infoIndex]}
                </p>
            </div>
        </span >
    );
};

export default ToolTip;