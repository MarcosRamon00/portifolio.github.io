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
    for (i = 0;i < data.length; i++){
        bloco_projeto += "<div class='col-sm-12 col-md-4 bloco_projeto'>" +
        "<h3 class='text-center'>" + data[i].nome + "</h3>" +
        "<img src='" + data[i].imagem +"' class='img-fluid'>" +
        "<h4>Descrição</h4>" + 
        "<p>" + data[i].descricao + "</p>" +
        "<div class='btn-group btn-block'>" +
            "<a href='" + data[i].link + "' class='btn btn-primary '>ver projeto</a>" +
            "<a href='" + data[i].codigoFonte + "' class='btn btn-primary '>código fonte</a>" +
        "</div>" +   
         "</div>";
    }
    area_tecnologias.insertAdjacentHTML('beforeend',bloco_tecnologia);
}