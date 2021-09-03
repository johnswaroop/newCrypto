import { FC, ReactNode } from 'react';
import styles from './content.module.scss';

interface Props {
    children?: ReactNode;
    styling?: {};
}

const Content: FC<Props> = ({ children, styling }) => {
    return (
        <div className={styles.content} style={styling}>
            {children}
        </div>
    );
};

export default Content;