import { FC, useState } from 'react';
import Content from '../../components/Content';
import Nav from '@/components/Nav';
import SideNav from '@/components/SideNav';
import ConnectWallet from '@/components/ConnectWallet'
import { Button } from '@material-ui/core';
import styles from './terms.module.scss'

const routes: string[] = [];

const Privacy: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(!false);
    const [isWalletVisible, setIsWalletVisible] = useState<boolean>(false);
    const [isCalculatorVisible, setIsCalculatorVisible] = useState<boolean>(false);

    return (
        <>
            <Nav routes={routes} activeRoute={routes[0]} darkMode={darkMode} setDarkMode={setDarkMode} setIsWalletVisible={setIsWalletVisible} setIsCalculatorVisible={setIsCalculatorVisible} />
            <div>
                <Content styling={isWalletVisible ? {
                    overflow: 'hidden',
                    maxHeight: '100vh',
                } : {}}>
                    {isWalletVisible && <ConnectWallet setIsWalletVisible={setIsWalletVisible} />}
                    <SideNav darkMode={darkMode} setDarkMode={setDarkMode}></SideNav>

                    <div className={styles.terms}>
                        <span className={styles.title}>
                            <h1>Privacy Policy</h1>
                        </span>

                        <span className={styles.content}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium reiciendis, molestias doloremque facilis alias placeat aperiam consequuntur voluptate cupiditate sint ipsum ex minus laboriosam adipisci culpa fugiat omnis necessitatibus, quibusdam beatae nobis a! Excepturi totam eius fugit! At perferendis minus soluta nobis tenetur. Labore expedita deleniti sed laudantium quam incidunt harum deserunt exercitationem aliquam optio commodi dolorem soluta facilis, odit, eaque earum ex excepturi dolores quod pariatur, officiis placeat. Harum alias aspernatur fugiat tempore voluptatibus placeat dicta minima blanditiis, inventore expedita quo quis ullam id aut, deleniti aliquam accusantium reiciendis provident. Nesciunt eos harum magnam laudantium accusamus quod sapiente?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga veniam laborum aut sequi ea dicta tempore dignissimos sunt fugit labore molestias voluptatum, vero delectus odio exercitationem adipisci nam ullam temporibus!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, necessitatibus? Aperiam, magni. Minus, esse quia voluptatum aliquid obcaecati, dignissimos numquam voluptas dolorum, perferendis eius dolor ea neque quisquam libero? Ipsum, illum, quas est vero corrupti cupiditate perspiciatis omnis esse reiciendis dolorem nostrum dolores? Ipsam pariatur dolore cupiditate, minima iusto magni.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, necessitatibus? Aperiam, magni. Minus, esse quia voluptatum aliquid obcaecati, dignissimos numquam voluptas dolorum, perferendis eius dolor ea neque quisquam libero? Ipsum, illum, quas est vero corrupti cupiditate perspiciatis omnis esse reiciendis dolorem nostrum dolores? Ipsam pariatur dolore cupiditate, minima iusto magni.</p>
                        </span>
                    </div>
                </Content>
            </div>
        </>
    );
};

export default Privacy;