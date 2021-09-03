import React, { FC, useEffect, useState } from 'react';
import styles from './nav.module.scss';
import * as assets from '../../assets';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

interface Props {
    routes: string[];
    activeRoute: string;
    darkMode: boolean;
    setDarkMode: any;
    setIsWalletVisible: any;
    setIsCalculatorVisible: any;
}

const Nav: FC<Props> = ({ activeRoute, routes, setDarkMode, darkMode, setIsWalletVisible, setIsCalculatorVisible }) => {

    const router = useRouter();

    const [count, setCount] = useState(0);
    const [dimmer, setDimmer] = useState(false);

    useEffect(() => {
        const nav: any = document.querySelector('#nav');
        nav.style.marginLeft = '-17rem';
    }, []);

    return (
        <div className={styles.nav}>
            <span className={styles.logo}>
                <img className={styles.navBtn} src={assets.navBtn}
                    onClick={
                        () => {
                            const nav: any = document.querySelector('#nav');

                            if (nav.style.marginLeft == '-17rem') {
                                nav.style.marginLeft = '0rem';
                                setDimmer(true);
                            } else {
                                nav.style.marginLeft = '-17rem';
                                setDimmer(false);
                            };
                        }
                    }
                />
            </span>

            <span className={styles.logo}>
                <img className={styles.logoIcon} width='40' src={assets.logoIcon} alt='' />
                <img className={styles.logoText} width='125' src={assets.logoText} alt='' />
            </span>

            <ul className={styles.routes}>
                {
                    routes.map((route: string) => {
                        if (activeRoute == route) return <li className={styles.activeRoute}>{route}</li>
                        else return <li>{route}</li>
                    })
                }
            </ul>

            <span className={styles.settings} onClick={() => { setCount(c => ++c); setIsCalculatorVisible((s: any) => { return !s }) }} >
                {('/home' == router.asPath) && <img src={assets.settings} style={{ transform: `rotate(${60 * count}deg)` }} className={styles.setIcon} />}
            </span>

            <Button className={styles.walletBtn} onClick={() => { setIsWalletVisible((s: any) => { return !s }) }}>Connect to wallet</Button>

            {dimmer && <div className={styles.dimmer}
                onClick={
                    () => {
                        const nav: any = document.querySelector('#nav');
                        nav.style.marginLeft = '-17rem';
                        setDimmer(false);
                    }
                }
            />}
        </div>

    );
}
export default Nav;