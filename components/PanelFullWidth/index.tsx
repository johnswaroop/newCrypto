import { FC, ReactNode } from 'react';
import styles from './panelFullWidth.module.scss';

interface Props {
    children?: ReactNode;
}

const PanelFullWidth: FC<Props> = ({ children }) => {
    return (
        <div className={styles.fullWidthPanel}>
            {children}
        </div>
    );
};

export default PanelFullWidth;