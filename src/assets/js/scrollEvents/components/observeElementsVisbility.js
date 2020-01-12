
const navigation = document.querySelectorAll('.navigation>ul>li>a');
const downloadButton = document.querySelector('#download>a');

/*Function for a highlighting links and moving download button*/
export function visible (target) {

    const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom - 350 > windowPosition.top &&
        targetPosition.top + 650 < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {

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