import {visible} from "./components/observeElementsVisbility.js";
import {addSmoothScroll} from './components/smoothScroll.js';

const headerContent = document.getElementsByClassName('headerContent')[0];
const header = document.getElementById('header');

const features = document.getElementById('features');
const works = document.getElementById('works');
const teams = document.getElementById('teams');
const testimonials = document.getElementById('testimonials');
const download = document.getElementById('download');

window.onscroll = () => {
    if (window.scrollY > 20) {
        fixNavigation();
    }
    else {
        headerContent.style.padding = "40px 0";
        headerContent.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
        header.style.background = "none";
    }

    visible(features);
    visible(works);
    visible(teams);
    visible(testimonials);
    visible(download);

};

window.onload = () => {
    if (window.scrollY > 20) {
        fixNavigation();
    }
};

function fixNavigation() {
    headerContent.style.padding = "25px 0";
    headerContent.style.borderBottom = "none";
    header.style.backgroundColor = "#292C47";
}

addSmoothScroll();