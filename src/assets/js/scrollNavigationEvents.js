const headerContent = document.getElementsByClassName('headerContent')[0];
const header = document.getElementById('header');


const navigation = document.querySelectorAll('.navigation>ul>li>a');
const features = document.getElementById('features');
const works = document.getElementById('works');
const teams = document.getElementById('teams');
const testimonials = document.getElementById('testimonials');
const download = document.getElementById('download');

const downloadButton = document.querySelector('#download>a');

window.onscroll = () => {
    if (window.scrollY > 20) {
        headerContent.style.padding = "25px 0";
        headerContent.style.borderBottom = "none";
        header.style.backgroundColor = "#292C47";
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


/*Function for a highlighting links*/

function visible (target) {
    // Все позиции элемента
    const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom - 450 > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top + 650 < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код


        for (let navItem of navigation) {
            if (navItem.getAttribute('href') === `#${target.id}`) {

                if (document.getElementsByClassName('navigationEvent').length > 0) {
                    for (let navigationEventClass of document.getElementsByClassName('navigationEvent')) {
                        if (!(navigationEventClass.getAttribute('href') === `#${target.id}`)) {
                            navigationEventClass.classList.remove('navigationEvent');
                        }

                    }
                }
                else {
                    navItem.classList.add('navigationEvent');
                }



            }
        }

        if (target.id === 'download') {
            downloadButton.style.transform = "rotate(360deg)";
        }



    }
    else {
        for (let navItem of navigation) {
            if (navItem.classList.contains('navigationEvent')  && navItem.getAttribute('href') === `#${target.id}`) {
                navItem.classList.remove('navigationEvent');
            }
        }


    }
}





/*Function for a smooth scroll*/

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}




