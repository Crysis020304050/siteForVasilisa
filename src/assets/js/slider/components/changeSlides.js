
export function hideOldSlide() {
    const oldSlide = document.getElementsByClassName('active');
    const oldController = document.getElementsByClassName('activeSlide')[0];

    oldSlide.item(0).classList.remove('active');
    oldSlide.item(0).classList.remove('active');
    oldSlide.item(0).classList.remove('active');

    oldController.classList.remove('activeSlide');

}

export function showNewSlide(num) {
    const newSlide = document.querySelectorAll(`[numSlide="${num}"]`);
    for (let newElem of newSlide) {
        if (newElem.classList.contains('slideController')) {
            newElem.classList.add('activeSlide');
        }
        else {
            newElem.classList.add('active');
        }
    }
}