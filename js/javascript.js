const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container_1 = document.querySelector('.container_1');

left.addEventListener('mouseenter', () => {
    container_1.classList.add('hover-left');

});

left.addEventListener('mouseleave', () => {
    container_1.classList.remove('hover-left');

});

right.addEventListener('mouseenter', () => {
    container_1.classList.add('hover-right');

});

right.addEventListener('mouseleave', () => {
    container_1.classList.remove('hover-right');

});


function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popUp_1(){
    var popup_1 = document.getElementById('mypopUp_1');
    popup_1.classList.toggle("show")
}

