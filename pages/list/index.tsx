import { FC, useState } from 'react';
import Content from '../../components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import styles from './list.module.scss';
import * as assets from '@/assets';
import ConnectWallet from '@/components/ConnectWallet';
import { Button } from '@material-ui/core';
import Calculator from '@/components/Calculator';
import Link from 'next/link';
import next from 'next';

const routes: string[] = [];

const Card: FC = () => {
    return (
        <div className={styles.card}>
            <span className={styles.head}>
                <h2>Jupiter Coin</h2>
                <img src={assets.bnbCircle} alt='' />
            </span>

            <span className={styles.stats}>
                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Softcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt='' />
                    </span>

                    <span className={styles.stat}>
                        <p>Hardcap</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt='' />
                    </span>
                </div>

                <div className={styles.row}>
                    <span className={styles.stat}>
                        <p>Min Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt='' />
                    </span>

                    <span className={styles.stat}>
                        <p>Max Contribution</p>
                        <h3>500</h3>
                        <img src={assets.bnbCircle} alt='' />
                    </span>
                </div>
            </span>

            <div className={styles.desc}>
                <h3 className={styles.title}>Description</h3>
                <p className={styles.descText}>Polygon protocol and framework compatible blockchain protocol...... Read more</p>
            </div>

            <div className={styles.prog}>
                <h1>50/1000</h1>
                <span className={styles.progBar}>
                    <span></span>
                </span>
            </div>

            <div className={styles.action}>
                <p>Starts in 50:00</p>
                <Link href='./contribute'>
                    <Button>View Presale</Button>
                </Link>
            </div>
        </div>
    )
}

interface pageProps {
    index: number;
}

const Page: FC<pageProps> = ({ index }) => {
    return (
        <div className={styles.listContent} id={'lc' + index}>
            <div className={styles.rowCard}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className={styles.rowCard}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

const Home: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    const [isCalculatorVisible, setIsCalculatorVisible] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const pages = [0, 1, 3, 4];

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            let page: any = document.querySelector('#lc0');
            page.style.marginLeft = `${-(currentPage + 1) * 100}%`;
            setCurrentPage(c => ++c);
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            let page: any = document.querySelector('#lc0');
            page.style.marginLeft = `${-(currentPage - 1) * 100}%`;
            setCurrentPage(c => --c);
        }
    }

    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} setIsCalculatorVisible={setIsCalculatorVisible} />
            <div>
                <Content styling={isWalletVisible ? {
                    overflow: 'hidden',
                    maxHeight: '100vh',
                } : {}}>
                    {isWalletVisible && <ConnectWallet setIsWalletVisible={setIsWalletVisible} />}
                    {isCalculatorVisible && <Calculator setIsCalculatorVisible={setIsCalculatorVisible} />}
                    <SideNav darkMode={darkMode} setDarkMode={setDarkMode}></SideNav>

                    <div className={styles.list}>
                        <div className={styles.listHeader}>
                            <p>Presale List</p>

                            <span className={styles.inputSearch}>
                                <input type='text' placeholder={'Search Tokens'} />
                                <span className={styles.customBorder} />
                            </span>

                            <span className={styles.inputSelect} style={{ marginRight: '1.5rem', marginLeft: 'auto' }}>
                                <select placeholder={'1000'} >
                                    <option value='100'>100</option>
                                    <option value='100'>1000</option>
                                    <option value='100'>10000</option>
                                </select>

                                <span className={styles.customBorder} />
                            </span>
                        </div>

                        <div className={styles.slider}>
                            {
                                pages.map((page, i) => {
                                    return (<Page key={i} index={i} />)
                                })
                            }
                        </div>

                        <div className={styles.listControl}>
                            <Button className={styles.btn}
                                style={!(currentPage > 0) ? { filter: 'brightness(0.5)' } : {}}
                                disabled={(currentPage > 0) ? false : true} color='primary' onClick={prevPage}>Previous</Button>

                            <p className={styles.pagination}>{`Displaying ${(currentPage * 8) + 1} to ${(currentPage * 8) + 8} of ${pages.length * 8} Presales`}</p>

                            <Button className={styles.btn}
                                style={!(currentPage < pages.length - 1) ? { filter: 'brightness(0.5)' } : {}}
                                disabled={(currentPage < pages.length - 1) ? false : true} color='primary' onClick={nextPage}>Next</Button>
                        </div>
                    </div>
                </Content>
            </div>
        </>
    );
};

export default Home;
