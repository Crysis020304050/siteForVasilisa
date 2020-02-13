export function createFullCard(card) {
    return createCardPicture(card);
}

function createCardPicture({href}) {
    const cardPicture = new Image();
    cardPicture.classList.add('card');
    cardPicture.src = href;
    cardPicture.alt = 'card';
    return cardPicture;
}

function createCardDescription({description}) {

}