"use strict";

// efeito maquina de escrever
function typeWriter (el){
    const textArray = el.innerHTML.split("");
    el.innerHTML = "";
    textArray.forEach(( latter, i) => {
        setTimeout(() => (el.innerHTML += latter), 95 * i );        
    });

    setInterval(()=>typeWriter(el), 8000);
}

typeWriter(Elementem);