import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './iconChipInput.module.scss';
import ToolTip from '@/components/ToolTip';

interface Props {
    icon?: string;
    title: string;
    darkMode: boolean;
    placeholder?: string;
    type?: string;
    min?: string;
    max?: string;
}

const IconChipInput: FC<Props> = ({ title, icon, darkMode, placeholder, min, max, type }) => {

    const [inFocus, setInFocus] = useState<boolean>(false);
    const [toolTipActive, setToolTipActive] = useState<boolean>(false);

    const infoBoxText: string[] = [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.'
    ];

    const handleFocus = () => {
        setInFocus(f => !f);
    }

    return (
        <span className={styles.iconChip}>
            <span className={styles.iconContainer}>
                <img src={icon ? icon : assets.bnbIcon} />
            </span>

            <span className={inFocus ? styles.textContainerFocus : styles.textContainer} >
                <p className={styles.title}>{title}</p>

                <span className={styles.input}>
                    <input min={min} max={max} placeholder={placeholder} type={type || 'text'} onFocus={handleFocus} onBlur={handleFocus} />

                    <span className={inFocus ? styles.customBorderFocus : styles.customBorder}>
                        <span></span>
                    </span>

                    <img src={darkMode ? assets.helpDark : assets.helpLight} className={styles.help} alt='' onMouseOver={() => { setToolTipActive(true) }} onMouseLeave={() => { setTimeout(() => { setToolTipActive(false) }, 100) }} />

                    {toolTipActive && <ToolTip closeToolTip={() => { setToolTipActive(false) }} infoBoxText={infoBoxText} />}
                </span>
            </span>
        </span>
    );
};

export default IconChipInput;