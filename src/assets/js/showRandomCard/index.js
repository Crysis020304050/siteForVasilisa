import {buttonClick} from './components/onButtonClick.js'
import {addCardsPack} from "./components/addCardsPacks.js";
import {loadJson} from '../utils/loader.js'


loadJson('./data/cards.json')
    .then(addCardsPack)
    .catch(console.error);


const button = document.getElementsByClassName('button')[0];

button.onclick = buttonClick;

