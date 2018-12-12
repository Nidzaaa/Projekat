function check(){
    let board = document.getElementById('board');
    board.innerHTML="&#xf328;";

    setTimeout(function(){

        board.innerHTML="&#xf46c;";

    },1000);

}

check();

setInterval(check, 2000);

function popUp_1(){
    var popup_1 = document.getElementById('mypopUp_1');
    popup_1.classList.toggle("show")
}








