const works = document.getElementsByClassName('work');

for (let work of works) {

    work.addEventListener('click', function (event) {
        event.stopPropagation();
        const imageOfWork = document.getElementsByClassName('imageOfWork')[0];
        imageOfWork.src = `${work.querySelector('img').src}`;
        onWorkClick();
    })
}

function onWorkClick() {


    document.body.style.overflow = 'hidden';
    const workClick = document.getElementsByClassName('workClick')[0];
    workClick.style.display = 'flex';
    workClick.style.overflow = 'scroll';



    document.getElementsByClassName('closeWork ')[0].onclick = closeButton;

    workClick.addEventListener('click', function (event) {
        event.stopPropagation();
        if (workClick === event.target) {
            closeButton();
        }

    })



}

function closeButton() {
    document.body.style.overflow = 'unset';
    document.getElementsByClassName('workClick')[0].style.display = 'none';

}