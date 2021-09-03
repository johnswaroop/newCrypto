const lightModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, rgba(0, 178, 255, 0.19) 0%, rgba(36, 255, 178, 0.13) 99.98%',
    '--bg-panel': 'white',
    '--highlight-text-color': '#008162',
    '--text-color': 'rgb(161, 161, 161)',
    '--placeholder-color': 'rgb(161, 161, 161, 0.5)',
    '--border-color': '#9cfaeb',
    '--border-color-hover': '#79c7ba',
    '--bg-nav': '#f1fbff',
    '--bg-wallet': '#c7fff6',
    '--input-shadow': '0px 0px 25px 3px rgba(0, 0, 0, 0.125)',
    '--bg-icon': 'white',
    '--border-icon': '#9cfaeb',
    '--input-bg': 'white',
    '--input-border': '#9cfaeb',
    '--sideNav-bg': '#F1FBFE',
    '--side-nav-border': '#E1E1E1',
    '--bg-manage-header': '#99EFDA',
    '--bg-manage-panel': 'white',
    '--bw-text': 'black',
    '--btn-border': '#00E3AD',
    '--btn-color': '#008162',
    '--bg-panel-grey': '#F9F9F9',
    '--bw-light': 'white',
    '--prog-primary': '#B6EDE0',
    '--prog-primary-dark': '#008162',
    '--prog-sec': '#EDEDED',
    '--card-btn': '#B6EDE0',
    '--hover-glow': '0px 0px 25px #6efcdb'
}

const darkModeStyles: object = {
    '--bg-gradient': 'linear-gradient(180deg, #323B5C 0%, #3C2A54 99.98%)',
    '--bg-panel': '#22272E',
    '--highlight-text-color': 'white',
    '--highlight-text-color-light': 'White',
    '--text-color': 'white',
    '--placeholder-color': 'rgb(255, 255, 255, 0.5)',
    '--border-color': 'grey',
    '--border-color-hover': '#A05CFE',
    '--bg-nav': '#273238',
    '--bg-wallet': '#008871',
    '--input-shadow': '0px 0px 15px black',
    '--bg-icon': 'black',
    '--border-icon': 'black',
    '--input-bg': '#372D45',
    '--input-border': '#372D45',
    '--sideNav-bg': '#273238',
    '--side-nav-border': '#0D0D0D',
    '--bg-manage-header': 'black',
    '--bg-manage-panel': '#1B1A1E',
    '--bw-text': 'white',
    '--btn-border': '#A05CFE',
    '--btn-color': '#A05CFE',
    '--bg-panel-grey': '#22272E',
    '--bw-light': 'black',
    '--prog-primary': '#8B6CB9',
    '--prog-primary-dark': '#8B6CB9',
    '--prog-sec': '#110A1D',
    '--card-btn': '#000000',
    '--hover-glow': '0px 0px 25px #A05CFE'
}

const darkModeUtility = (currentMode: boolean) => {
    let root = document.documentElement;

    if (!currentMode) {
        Object.keys(darkModeStyles).forEach((property, index) => {
            root.style.setProperty(property, Object.values(darkModeStyles)[index]);
        });
    } else {
        Object.keys(lightModeStyles).forEach((property, index) => {
            root.style.setProperty(property, Object.values(lightModeStyles)[index]);
        });
    }
}

export default darkModeUtility;