import noneSlide from "../../../images/noSlideImage.jpg";
import {animation} from '../index.js';
import {hideOldSlide, showNewSlide} from './changeSlides.js';

const slideContainer = document.getElementsByClassName('slideContainer')[0];
const slideInformationContainer = document.getElementsByClassName('slideInformationContainer')[0];
const slidesControllerContainer = document.getElementsByClassName('slidesControllerContainer')[0];

export let j = 0;
export let numOfSlide = 1;
let isChanged = false;
let isStarted = false;

export function addFullSlide (slide) {
    addSlideImage(slide);
    addSlideDescription(slide);
    addSlideAuthor(slide);
    addSlideControllerElem();
}

function addSlideImage (slide) {
    const slideImage = new Image();
    slideImage.classList.add('slide');
    slideImage.src = slide.href;
    slideImage.onerror = () => {
        slideImage.src = noneSlide;
    };
    slideImage.alt = 'slide';
    slideImage.setAttribute('numSlide', `${++j}`);
    if (j === 1) {
        slideImage.classList.add('active');
    }

    slideContainer.appendChild(slideImage);
}

function addSlideDescription (slide) {
    const slideDescription = document.createElement('p');
    slideDescription.classList.add('slideDescription');
    slideDescription.innerText = slide.description || '';
    slideDescription.setAttribute('numSlide', `${j}`);
    if (j === 1) {
        slideDescription.classList.add('active');
    }

    slideInformationContainer.appendChild(slideDescription);
}

function addSlideAuthor (slide) {
    const slideAuthor = document.createElement('h6');
    slideAuthor.classList.add('author');
    slideAuthor.innerText = slide.name || '';
    slideAuthor.setAttribute('numSlide', `${j}`);
    if (j === 1) {
        slideAuthor.classList.add('active');
    }

    slideInformationContainer.appendChild(slideAuthor);
}

function addSlideControllerElem() {
    const slideController = document.createElement('div');
    slideController.classList.add('slideController');
    slideController.setAttribute('numSlide', `${j}`);
    slidesControllerContainer.appendChild(slideController);
    if (j === 1) {
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
            if (num >= j) {
                num = 0;
            }
            num++;
            setSlide(num);

        },5000);
        isStarted = true;
    }
}