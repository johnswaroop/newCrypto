import { FC, useState } from 'react';
import * as assets from '../../assets';
import styles from './popUp.module.scss';
import { Button } from '@material-ui/core';

interface props {
    popUpVisible: boolean;
    setPopUpVisible: any;
}

const PopUp: FC<props> = ({ popUpVisible, setPopUpVisible }) => {

    const [pageindex, setPageIndex] = useState<number>(0);

    const instructionText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque eveniet. Modi libero beatae culpa iusto fuga nisi ipsa tenetur? Nesciunt fugiat doloribus illum culpa amet quo, illo ullam assumenda hic minus aliquam eaque est commodi eos quia porro adipisci iste aspernatur, eius, architecto accusamus. Ipsum vitae, et harum ab iste laboriosam debitis quidem dolores commodi deserunt aliquid earum quas deleniti facere. Expedita fuga soluta, cumque, nam maiores laudantium temporibus corrupti odio nemo debitis adipisci sint, error saepe esse. Officia debitis iste voluptatum consequatur blanditiis excepturi numquam, accusamus, culpa non ratione itaque repellendus aspernatur corporis odio, quis fuga vero quam!'
    const disclaimerText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, est cumque tempore ab quae doloremque ratione dicta facere quasi eaque optio ad porro, consequuntur expedita autem officia, ducimus eos deleniti earum voluptates! Minima eius, expedita hic perspiciatis aliquid maiores illo quis assumenda eligendi! A tempore natus vitae, temporibus autem quae?';

    const text: string[] = [instructionText, disclaimerText];
    const titles: string[] = ['Instruction', 'Disclaimer'];
    const icons: string[] = [assets.instruction, assets.disclaimer];
    const btnText: string[] = ['Next', 'Agree'];

    const handleBtn = () => {
        if (pageindex < titles.length - 1) {
            setPageIndex((i) => ++i);
        } else {
            setPopUpVisible(false);
        }
    }

    return popUpVisible ? (<div className={styles.popUpContainer}>
        <div className={styles.popUp}>
            <span className={styles.head}>
                <img src={icons[pageindex]} className={styles.icon} alt='' />
                <h1 className={styles.title}>{titles[pageindex]}</h1>
            </span>

            <span className={styles.content}>
                <p>{text[pageindex]}</p>
            </span>

            <span className={styles.footer}>
                {(pageindex < 1) && <label><span><input type='checkbox' /> Never show this Again </span></label>}
                <Button onClick={handleBtn}>{btnText[pageindex]}</Button>
            </span>
        </div>
    </div>) : null;
};

export default PopUp;