import React, { FC, useRef, useEffect } from 'react';
import styles from './sideNav.module.scss';
import * as assets from '@/assets';
import Link from 'next/link';
import LangPicker from '@/components/LangPicker';
import { useRouter } from 'next/router';
import darkModeUtility from './../../utility/darkMode.utility';

interface Props {
    darkMode: boolean;
    setDarkMode: any;
}

const index: FC<Props> = ({ darkMode, setDarkMode }) => {
    const router = useRouter();
    const sideRef: any = useRef();

    const handleDarkMode = () => {
        setDarkMode((currentMode: boolean) => {
            darkModeUtility(currentMode);

            if (currentMode) {
                localStorage.setItem('darkMode', 'false')
            } else {
                localStorage.setItem('darkMode', 'true')
            }

            return !currentMode;
        });
    }

    useEffect(() => {
        setDarkMode((currentMode: boolean) => {
            if (localStorage.getItem('darkMode') == 'false') {
                darkModeUtility(true);
                return false;
            } else if (localStorage.getItem('darkMode') == 'true') {
                darkModeUtility(false);
                return true;
            } else {
                darkModeUtility(currentMode);
                return !currentMode;
            }
        });
    }, []);

    return (
        <div className={styles.sideNav} id={'nav'}>
            <Link href='/home'>
                <span className={('/home' == router.asPath) ? styles.active : styles.inActive} style={{ marginTop: '1.5rem' }}>
                    <img src={!darkMode ? assets.navIcon1 : assets.navIcon1N} alt='' />
                    <p>Create Presale</p>
                </span>
            </Link>

            <Link href='/manage'>
                <span className={('/manage' == router.asPath) ? styles.active : styles.inActive}>
                    <img src={!darkMode ? assets.navIcon2 : assets.navIcon2N} alt='' />
                    <p>Manage Presale</p>
                </span>
            </Link>

            <Link href='/list'>
                <span className={('/list' == router.asPath) ? styles.active : styles.inActive}>
                    <img src={!darkMode ? assets.navIcon3 : assets.navIcon3N} alt='' />
                    <p>List Presale</p>
                </span>
            </Link>

            <div className={styles.navBottom}>
                <span className={styles.darkModeIcon} onClick={handleDarkMode}>
                    {darkMode ?
                        <img src={assets.darkMode} /> :
                        <img src={assets.lightMode} />}
                </span>
                <LangPicker></LangPicker>
            </div>

            <div className={styles.terms}>
                <Link href='/terms'>
                    <span className={('/terms' == router.asPath) ? styles.activeB : styles.inActiveB}>
                        <p>Terms and Conditions</p>
                    </span>
                </Link>

                <Link href='/privacy'>
                    <span className={('/privacy' == router.asPath) ? styles.activeB : styles.inActiveB}>
                        <p>Privacy Policy</p>
                    </span>
                </Link>
            </div>
        </div>

    );
};

export default index;