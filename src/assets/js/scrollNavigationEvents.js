const headerContent = document.getElementsByClassName('headerContent')[0];
const header = document.getElementById('header');

window.onscroll = () => {
    if (window.scrollY > 40) {
        headerContent.style.padding = "25px 0";
        headerContent.style.borderBottom = "none";
        header.style.backgroundColor = "#292C47";
    }
    else {
        headerContent.style.padding = "40px 0";
        headerContent.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
        header.style.background = "none";
    }

};

const features = document.getElementById('features');
const works = document.getElementById('works');
const teams = document.getElementById('teams');
const testimonials = document.getElementById('testimonials');
const download = document.getElementById('download');