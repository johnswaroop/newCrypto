import { FC, ReactNode } from 'react';
import styles from './panelVerticle.module.scss';

interface Props {
    children?: ReactNode;
}

const PanelVerticle: FC<Props> = ({ children }) => {
    return (
        <div className={styles.panelVerticle}>
            {children}
        </div>
    );
};

export default PanelVerticle;