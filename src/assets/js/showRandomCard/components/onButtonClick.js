import {createFullCard} from "../components/createCard.js";
import {loadJson} from '../../utils/loader.js';

let cardsList = [];


const cardWrapper = document.getElementsByClassName('cardWrapper')[0];

export function buttonClick(e) {

    e.stopPropagation();
    const basicBackgroundPicture = document.getElementsByClassName('backgroundImage')[0];
    const oldCard = document.getElementsByClassName('card')[0];
    if (basicBackgroundPicture) {
        basicBackgroundPicture.remove();
    }
    if (oldCard) {
        oldCard.remove();
    }

    cardsList = [];

    loadJson('./data/cards.json')
        .then(addAndAppendCards)
        .catch(console.error);
}

function addAndAppendCards(cards) {

    const selectedCardsPack = document.getElementsByClassName('selectList')[0].value;

    cards.forEach(card => {
        if (card.type === selectedCardsPack) {
            cardsList.push(card);
        }
    });
    cardWrapper.appendChild(createFullCard(cardsList[getRandomIntInclusive(0, cardsList.length - 1)]));
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}