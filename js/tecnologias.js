var area_tecnologias = document.getElementById("area_tecnologias");
var btn_tecnologias = document.getElementById("btn_tecnologias");
var isBtnTecnologiasAtivo = true;

btn_tecnologias.addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','./json/tecnologias.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        if(isBtnTecnologiasAtivo){
            renderTodasTecnologias(data);
            isBtnTecnologiasAtivo = false;
        }
    };
    request.send();
    
});

function renderTodasTecnologias(data){
    var bloco_tecnologia = "";
    for (i = 0;i < data.length;i++){
        bloco_tecnologia += "<div class='col-sm-12 col-md-2 bloco_tecnologia'>" +
        "<img src='" + data[i].imagem +"'>" +  
        "<h3 class='text-center'>" + data[i].nome + "</h3>" + 
         "</div>";
    }
    console.log(data['tecnologias']);
    area_tecnologias.insertAdjacentHTML('beforeend',bloco_tecnologia);
}