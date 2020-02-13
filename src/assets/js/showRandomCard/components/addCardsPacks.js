export function addCardsPack(cards) {
    const packsList = document.getElementsByClassName('selectList')[0];
    const set = new Set();
    cards.forEach(card => {
        set.add(card.type);
    });
    set.forEach(item => {
        packsList.appendChild(addOptionToList(item));
    })

}

function addOptionToList(type) {
    const option = document.createElement('option');
    option.innerText = type;
    option.value = type;
    return option;
}