import {buttonClick} from './components/onButtonClick.js'
import {addCardsPack} from "./components/addCardsPacks.js";
import {loadJson} from '../utils/loader.js'


loadJson('./data/cards.json')
    .then(addCardsPackAndOnButtonClickEvent)
    .catch(console.error);


function addCardsPackAndOnButtonClickEvent(cards) {
    addCardsPack(cards);
    const button = document.getElementsByClassName('button')[0];
    button.onclick = buttonClick;
}