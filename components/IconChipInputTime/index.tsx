import { FC, useState, useEffect } from 'react';
import * as assets from '../../assets';
import styles from './iconChipInputTime.module.scss';
import { DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { MuiThemeProvider, createTheme, } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import ToolTip from '@/components/ToolTip';

interface Props {
    icon?: string;
    title: string;
    darkMode: boolean;
    placeholder?: string;
}

const IconChipInputTime: FC<Props> = ({ title, icon, darkMode, placeholder }) => {
    const [inFocus, setInFocus] = useState<boolean>(false);
    const [selectedDate, handleDateChange] = useState(null);

    const handleFocus = () => {
        setInFocus(f => !f);
    }

    interface text {
        primary: string;
        secondary: string;
        hint: string;
    }

    let primary, secondary, background;

    let textO: text;

    if (darkMode) {
        primary = '#8A6CB8';
        secondary = '#8A6CC9';
        background = '#22272E';

        textO = {
            primary: '#fff',
            secondary: '#8A6CC9',
            hint: '#fff'
        }
    } else {
        primary = '#99EFDA';
        secondary = '#008A64';
        background = 'white';
        textO = {
            primary: '#000',
            secondary: '#008A64',
            hint: '#808080'
        }
    }

    const theme = createTheme({
        palette: {
            primary: { main: primary },
            secondary: { main: secondary },
            background: { paper: background },
            text: {
                primary: textO.primary,
                secondary: textO.secondary,
                hint: textO.hint
            }
        }
    });

    const [toolTipActive, setToolTipActive] = useState<boolean>(false);

    const infoBoxText: string[] = [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.',
        'new Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sit.'
    ];

    return (
        <MuiThemeProvider theme={theme} >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <span className={styles.iconChip}>
                    <span className={styles.iconContainer}>
                        <img src={icon ? icon : assets.bnbIcon} />
                    </span>

                    <span className={inFocus ? styles.textContainerFocus : styles.textContainer} >
                        <p className={styles.title}>{title}</p>

                        <span className={styles.input}>
                            <DateTimePicker placeholder={placeholder} format={'M/d/yy h:mm aa'} value={selectedDate} onChange={(e: any) => { handleDateChange(e) }} />

                            <span className={inFocus ? styles.customBorderFocus : styles.customBorder}>
                                <span></span>
                            </span>

                            <img src={darkMode ? assets.helpDark : assets.helpLight} className={styles.help} alt='' onMouseOver={() => { setToolTipActive(true) }} onMouseLeave={() => { setTimeout(() => { setToolTipActive(false) }, 100) }} />
                            {toolTipActive && <ToolTip closeToolTip={() => { setToolTipActive(false) }} infoBoxText={infoBoxText} />}
                        </span>
                    </span>
                </span>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
};

export default IconChipInputTime;