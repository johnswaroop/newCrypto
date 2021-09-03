import { FC, ChangeEvent, useState } from 'react';
import styles from './inputBox.module.scss';
import * as assets from '../../assets';
import ToolTip from '../ToolTip';

interface inputBox {
    darkMode: boolean;
    placeHolder: string;
}

const InputBox: FC<inputBox> = ({ darkMode, placeHolder }) => {

    const [inFocus, setInFocus] = useState<boolean>(false);
    const [toolTipActive, setToolTipActive] = useState<boolean>(false);

    const ar: string[] = ['loading', 'success', 'failed'];

    const [inPut, setInPut] = useState<string>('');

    const handleInput = (e: any) => {
        setInPut(e.currentTarget.value);
    }

    const handleFocus = () => {
        setInFocus(f => !f);
    }

    const infoBoxText: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit'];

    return (
        <div className={inFocus ? styles.tokenInputFocus : styles.tokenInput} style={(inPut == ar[1]) ? { borderColor: 'springGreen' } : ((inPut == ar[2]) ? { borderColor: 'red' } : {})}>
            <input type='text' placeholder={placeHolder} value={inPut} onChange={(e) => { handleInput(e) }} onFocus={handleFocus} onBlur={handleFocus} />
            {inPut == ar[0] && <img className={styles.loading} src={assets.loading} alt='' />}
            {inPut == ar[1] && <img className={styles.success} src={assets.success} alt='' />}
            {inPut == ar[2] && <img className={styles.failed} src={assets.failed} alt='' />}
            {inPut.length <= 0 && <img src={darkMode ? assets.help : assets.helpLight} alt='' onMouseEnter={() => setToolTipActive(true)} onMouseLeave={() => { setTimeout(() => { setToolTipActive(false) }, 500) }} />}
            {toolTipActive && <ToolTip closeToolTip={() => { setToolTipActive(false) }} infoBoxText={infoBoxText} />}
        </div>
    );
};

export default InputBox;