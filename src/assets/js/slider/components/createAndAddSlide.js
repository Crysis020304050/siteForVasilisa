import {animation} from '../index.js';
import {hideOldSlide, showNewSlide} from './changeSlides.js';
import {addSlideImage, addSlideDescription, addSlideAuthor, counterOfSlides} from './createSomeSliderElem.js';

export const slideContainer = document.getElementsByClassName('slideContainer')[0];
export const slideInformationContainer = document.getElementsByClassName('slideInformationContainer')[0];
const slidesControllerContainer = document.getElementsByClassName('slidesControllerContainer')[0];

export let numOfSlide = 1;
let isChanged = false;
let isStarted = false;

export function addFullSlide (slide) {
    addSlideImage(slide);
    addSlideDescription(slide);
    addSlideAuthor(slide);
    addSlideControllerElem();
}

function addSlideControllerElem() {
    const slideController = document.createElement('div');
    slideController.classList.add('slideController');
    slideController.setAttribute('numSlide', `${counterOfSlides}`);
    slidesControllerContainer.appendChild(slideController);
    if (counterOfSlides === 1) {
        slideController.classList.add('activeSlide');
    }

    onSlideControllerClick();
}

function onSlideControllerClick() {
    const slidesControllersElements = document.getElementsByClassName('slideController');
    for (let slideController of slidesControllersElements) {
        slideController.onclick = () => {
            const numOfNewSlide = slideController.getAttribute('numSlide');
            numOfSlide = +slideController.getAttribute('numSlide');
            setSlide(numOfNewSlide);
            isChanged = true;

        };
    }
}

export function setSlide(num) {

    hideOldSlide();
    showNewSlide(num);

}

export function sliderObserver(num) {
    if (!isStarted) {
        setInterval( () => {
            if (!animation) {
                return;
            }
            if (numOfSlide !== num && isChanged) {
                num = numOfSlide;
                isChanged = false;
            }
            if (num >= counterOfSlides) {
                num = 0;
            }
            num++;
            setSlide(num);

        },5000);
        isStarted = true;
    }
}