
import noneSlide from '../images/noSlideImage.jpg';

const dataSlides = [];

const imgSliderElem = document.getElementsByClassName('slide')[0];
const pElem = document.getElementsByClassName('slideDescription')[0];
const h6Elem = document.getElementsByClassName('author')[0];
const slidesControllerContainer = document.getElementsByClassName('slidesControllerContainer')[0];

const testimonials = document.getElementById('testimonials');



let i = 0;
fetch('./data/slider.json')
.then(response => response.json())
.then(slides => {
   slides.forEach(slide => {
       dataSlides.push(slide);


       createSlideControllerElem();
       setSlide(1);
   })
}).catch(console.error);


function createSlideControllerElem() {
    const slideController = document.createElement('div');
    slideController.classList.add('slideController');
    slideController.setAttribute('numSlide', `${i++}`);
    slidesControllerContainer.appendChild(slideController);

    onSlideControllerClick();
}

function onSlideControllerClick() {
    const slidesControllersElements = document.getElementsByClassName('slideController');
    for (let slideController of slidesControllersElements) {
        slideController.onclick = () => {
            const numOfNewSlide = slideController.getAttribute('numSlide');
            setSlide(+numOfNewSlide + 1);
        };
    }
}

function setSlide(num) {

    num--;

    imgSliderElem.src = dataSlides[num].href;

    imgSliderElem.onerror = () => {
        imgSliderElem.src = noneSlide;
    };

    pElem.innerText = dataSlides[num].description;
    h6Elem.innerText = dataSlides[num].name;


    const slidesControllersElements = document.getElementsByClassName('slideController');
    for (let slideController of slidesControllersElements) {
        slideController.classList.remove('activeSlide');
        if (+slideController.getAttribute('numSlide') === num) {
            slideController.classList.add('activeSlide');
        }
    }

}


let isStarted = false;

let animation = true;

testimonials.onmouseover = function(e) {
    e.stopPropagation();
    animation = false;
};

testimonials.onmouseleave = function (e) {
    e.stopPropagation();
    animation = true;
    sliderObserver(1);
};


function sliderObserver(num) {
    if (!isStarted) {
        setInterval( () => {
            if (!animation) {
                return;
            }
            if (num === dataSlides.length) {
                num = 0;
            }
            num++;
            setSlide(num)
        },5000);
        isStarted = true;
    }

}