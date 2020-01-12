
const openNavigationButton = document.getElementsByClassName('mobileNavigationButton')[0];
const navigation = document.getElementsByClassName('navigation')[0];

let isNavigationOpen = false;

openNavigationButton.onclick = function (e) {
    e.stopPropagation();

    if (isNavigationOpen) {
        closeNavigation();
    }
    else {
        openNavigationButton.classList.add('mobileNavigationButtonRotate');
        navigation.classList.remove('navigation');
        navigation.classList.add('mobileNavigationContainer');

        isNavigationOpen = true;

        navigation.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                closeNavigation();
            }
        });
    }
};

window.onresize = () => {
    if (window.innerWidth > 1024) {
        closeNavigation();
    }
};

function closeNavigation() {
    openNavigationButton.classList.remove('mobileNavigationButtonRotate');
    navigation.classList.remove('mobileNavigationContainer');
    navigation.classList.add('navigation');
    isNavigationOpen = false;
}


