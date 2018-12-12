function unlock(){
    let locker = document.getElementById('locker');
    locker.innerHTML= "&#xF023;";

    setTimeout(function(){
        locker.innerHTML='&#xf3c1;';
    }, 1000);
}

unlock();
setInterval(unlock, 2000);

function popUp_1(){
    var popup_1 = document.getElementById('mypopUp_1');
    popup_1.classList.toggle("show")
}
