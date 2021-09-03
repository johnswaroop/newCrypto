import styles from './langPicker.module.scss';
import React, { FC, useState } from 'react';
import * as assets from '@/assets';
import index from '../SideNav';

const flags = [
    { name: 'English', flag: '/usa.png' },
    { name: 'Deutsch', flag: '/flag.png' },
    { name: 'Français', flag: '/france.png' },
    { name: 'हिन्दी', flag: './india.png' }
];

const Option: FC<{ index: number }> = ({ index }) => {
    return <>
        <img className={styles.flag} src={flags[index].flag} alt='' />
        <p>{flags[index].name}</p>
        <img src={'/arrow.png'} alt='' className={styles.arrow} />
    </>
}

const LangPicker: FC = () => {

    const [flagIndex, setFlagIndex] = useState(0);

    return (
        <div className={styles.con}>

            <div className={styles.dropDown}>
                {
                    flags.map((f, index) => {
                        return (
                            <div key={'f' + index} className={(flagIndex == index) ? styles.active : styles.inActive} onClick={() => { setFlagIndex(index) }}>
                                <img className={styles.flag} src={f.flag} alt='' />
                                <p >{f.name}</p>
                                <img src={''} alt='' className={styles.arrow} />
                            </div>
                        )
                    })
                }

            </div>

            <div className={styles.langPicker}>
                <Option index={flagIndex} />
            </div>
        </div>
    )
}

export default LangPicker;