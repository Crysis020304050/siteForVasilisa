
import {loadJson} from "../utils/fetchLoader.js";
import {addFullSlide} from "./components/createAndAddSlide.js";
import {numOfSlide, j, sliderObserver} from './components/createAndAddSlide.js';

const testimonials = document.getElementById('testimonials');
export let animation = true;

loadJson('./data/slider.json')
    .then(slides => {
        slides.forEach(slide => {
            if (j < 7) {
                addFullSlide(slide);
            }
        })
    });

testimonials.onmouseover = function(e) {
    e.stopPropagation();
    animation = false;
};

testimonials.onmouseleave = function (e) {
    e.stopPropagation();
    animation = true;
    sliderObserver(numOfSlide);
};
