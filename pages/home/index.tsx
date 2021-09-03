import { FC, useState, useLayoutEffect, useRef } from 'react';
import Content from '@/components/Content';
import PanelFullWidth from '@/components/PanelFullWidth';
import PanelVerticle from '@/components/PanelVerticle';
import InputBox from '@/components/InputBox';
import styles from './home.module.scss';
import IconChip from '@/components/IconChip';
import IconChipInput from '@/components/IconChipInput';
import IconChipInputTime from '@/components/IconChipInputTime';
import PopUp from '@/components/PopUp';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import ConnectWallet from '@/components/ConnectWallet';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import Calculator from '@/components/Calculator';
import ToastSuccess from '@/components/ToastSuccess';
import ToastFailed from '@/components/ToastFailed';
import * as assets from '@/assets';

const routes: string[] = [];

interface Props {
    locale: any;
}

export const getStaticProps: any = async ({ locale }: Props) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

const Home: FC = (props) => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    const [isCalculatorVisible, setIsCalculatorVisible] = useState<boolean>(false);
    const [popUpVisible, setPopUpVisible] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { t } = useTranslation();

    let start = new Date().toLocaleString().replace(/\d{2}(\d{2,}),/g, '$1').replace(/:\d{2}\s/, ' ');
    let end = new Date(Date.now() + 36e5).toLocaleString().replace(/\d{2}(\d{2,}),/g, '$1').replace(/:\d{2}\s/, ' ');

    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} setIsCalculatorVisible={setIsCalculatorVisible} />
            <div>
                {/* <ToastSuccess/> */}
                {/* <ToastFailed /> */}
                <Content styling={popUpVisible || isWalletVisible || isCalculatorVisible || isLoading ? {
                    overflow: 'hidden',
                    maxHeight: '100vh',
                } : {}}>
                    <SideNav darkMode={darkMode} setDarkMode={setDarkMode} ></SideNav>
                    {isWalletVisible && <ConnectWallet setIsWalletVisible={setIsWalletVisible} />}
                    {isCalculatorVisible && <Calculator setIsCalculatorVisible={setIsCalculatorVisible} />}
                    <PopUp popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible} />

                    <section className={styles.panelOne}>
                        <PanelFullWidth>
                            <InputBox placeHolder={t('common:Enter Token address')} darkMode={darkMode} />
                            <span className={styles.chips}>
                                <IconChip title={t('Token Name')} value={'10000'} />
                                <IconChip title={t('Token Supply')} value={'10000'} />
                                <IconChip title={t('Initial release date')} value={'10000'} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelTwo}>
                        <PanelFullWidth>
                            <span className={styles.chips}>
                                <IconChipInput title={t('Presale rate')} placeholder={'100'} darkMode={darkMode} />
                                <IconChipInput title={t('Exchange rate')} placeholder={'500'} darkMode={darkMode} />
                                <IconChipInput title={t('Percent towards liquidity')} type={'number'} min={'75'} max={'100'} placeholder={'90'} darkMode={darkMode} />
                            </span>
                        </PanelFullWidth>
                    </section>

                    <section className={styles.panelThree}>
                        <PanelVerticle>
                            <IconChipInput title={t('Softcap')} placeholder={'100'} darkMode={darkMode} />
                            <IconChipInput title={t('HardCap')} placeholder={'200'} darkMode={darkMode} />
                        </PanelVerticle>

                        <PanelVerticle>
                            <IconChipInput title={t('Min Contribution')} placeholder={'0.1'} darkMode={darkMode} />
                            <IconChipInput title={t('Max Contribution')} placeholder={'1'} darkMode={darkMode} />
                        </PanelVerticle>

                        <PanelVerticle>
                            <IconChipInputTime title={t('Start at')} placeholder={start} darkMode={darkMode} />
                            <IconChipInputTime title={t('End at')} placeholder={end} darkMode={darkMode} />
                        </PanelVerticle>
                    </section>

                    <Button className={styles.submitBtnNew} color='primary' onClick={() => { setIsLoading(true) }}>Submit</Button>

                    {isLoading && <div className={styles.loader} onClick={() => { setIsLoading(false) }}>
                        <img src={assets.loader} alt='' />
                    </div>}
                </Content>
            </div>
        </>
    );
};

export default Home;