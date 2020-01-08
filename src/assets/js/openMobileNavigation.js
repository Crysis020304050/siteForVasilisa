

const openNavigationButton = document.getElementsByClassName('mobileNavigationButton')[0];
const mobileNavigation = document.getElementsByClassName('mobileNavigationContainer')[0];

let isNavigationOpen = false;

openNavigationButton.onclick = function (e) {
    e.stopPropagation();

    if (isNavigationOpen) {
        closeNavigation();
    }
    else {
        openNavigationButton.classList.add('mobileNavigationButtonRotate');
        mobileNavigation.style.display = 'flex';
        isNavigationOpen = true;

        mobileNavigation.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                closeNavigation();
            }
        });
    }

};

screen.orientation.onchange = function () {
    if (screen.width > 1024) {
        mobileNavigation.style.display = 'none';
    }
};

/*window.onresize = () => {
    if (screen.width > 1024) {
        mobileNavigation.style.display = 'none';
    }
};*/


function closeNavigation() {
    openNavigationButton.classList.remove('mobileNavigationButtonRotate');
    mobileNavigation.style.display = 'none';
    isNavigationOpen = false;
}



