import {slideContainer, slideInformationContainer} from './createAndAddSlide.js';
import noneSlide from "../../../images/noSlideImage.jpg";

export let counterOfSlides = 0;

export function addSlideImage (slide) {
    const slideImage = new Image();
    slideImage.classList.add('slide');
    slideImage.src = slide.href;
    slideImage.onerror = () => {
        slideImage.src = noneSlide;
    };
    slideImage.alt = 'slide';
    slideImage.setAttribute('numSlide', `${++counterOfSlides}`);
    if (counterOfSlides === 1) {
        slideImage.classList.add('active');
    }

    slideContainer.appendChild(slideImage);
}

export function addSlideDescription (slide) {
    const slideDescription = document.createElement('p');
    slideDescription.classList.add('slideDescription');
    slideDescription.innerText = slide.description || '';
    slideDescription.setAttribute('numSlide', `${counterOfSlides}`);
    if (counterOfSlides === 1) {
        slideDescription.classList.add('active');
    }

    slideInformationContainer.appendChild(slideDescription);
}

export function addSlideAuthor (slide) {
    const slideAuthor = document.createElement('h6');
    slideAuthor.classList.add('author');
    slideAuthor.innerText = slide.name || '';
    slideAuthor.setAttribute('numSlide', `${counterOfSlides}`);
    if (counterOfSlides === 1) {
        slideAuthor.classList.add('active');
    }

    slideInformationContainer.appendChild(slideAuthor);
}