var button_noturneMode = document.getElementById("btn_noturneMode");
var noturneMode = false;

var body = document.querySelector('body');
var menu__itens = document.querySelectorAll('.menu__item');
var menu__itens__hover = document.querySelectorAll('.menu__item:hover');
var projetos = document.getElementById('area_projetos');
//turn on and turn off night mode
button_noturneMode.addEventListener("click",function(){
    noturneMode = !noturneMode;
    if(noturneMode == true){//turn on night mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        for(let index = 0; index < menu__itens.length; index++){
            menu__itens[index].style.color = "white";
        };
        button_noturneMode.style.color  = "white";
        button_noturneMode.style.borderColor = "white";
        noturneModeProjetos("on");

    }else{//turn off night mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        for(let index = 0; index < menu__itens.length; index++){
            menu__itens[index].style.color = "black";
        };
        button_noturneMode.style.color  = "black";
        button_noturneMode.style.borderColor = "black";
        noturneModeProjetos("off");
    }
});

//noturne mode projetos
function noturneModeProjetos(state="on"){
    projetos.style.color = "black";
}


