let carrousel=document.querySelector(".carousel");
let slider=document.querySelectorAll(".card-biodiversite");
let carrousel_prev=document.getElementById("carrousel-prev");
let carrousel_indicators=document.querySelector(".carousel-indicator");
let i=0;
let time;
time=setInterval(()=>{
    i++;
    if(i > slider.length-1){
        i=0;
    }
     if(window.innerWidth <= 476){
            carrousel_indicators.style.transform=`translateX(${-220 * i}px)`;
        }
        else{

            carrousel_indicators.style.transform=`translateX(${-420 * i}px)`;
        }
    carrousel_indicators.style.transition="all 0.8s"
},3500);

function next(){
    clearInterval(time);
    i++;
    if(i > slider.length-1){
        i=0;
    }
        if(window.innerWidth <= 476){
            carrousel_indicators.style.transform=`translateX(${-220 * i}px)`;
        }
        else{

            carrousel_indicators.style.transform=`translateX(${-420 * i}px)`;
        }
    carrousel_indicators.style.transition="all 0.8s"
}
function prev(){
    clearInterval(time);
    i--;
       if(i < 0){
        i=slider.length-1;
    }
    if(window.innerWidth <= 476){
            carrousel_indicators.style.transform=`translateX(${-220 * i}px)`;
        }
        else{
            carrousel_indicators.style.transform=`translateX(${-420 * i}px)`;
        }
    carrousel_indicators.style.transition="all 0.8s"
}