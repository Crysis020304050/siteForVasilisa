export function createFullCard(card) {
    createCardDescription(card);
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
    const cardWord = document.getElementsByClassName('cardWord')[0];
    cardWord.innerText = description || '';
}