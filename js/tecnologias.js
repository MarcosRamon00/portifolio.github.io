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
    var bloco_tecnologia = '';
    for (i = 0;i < bloco_tecnologia.length;i++){
        bloco_tecnologia += "<div class='col-sm-12 col-md-4'>" +
        "<h3 class='text-center'>" + data['tecnologias'][i] + "</h3>" +
        "<img src='" + data['tecnologias'][i] +"' class='img-fluid'>" +
        "<h4>Descrição</h4>" + 
        "<p>" + data['tecnologias'][i] + "</p>" +
        "<div class='btn-group btn-block'>" +
            "<a href='" + data['tecnologias'][i] + "' class='btn btn-primary '>ver projeto</a>" +
            "<a href='" + data['tecnologias'][i] + "' class='btn btn-primary '>código fonte</a>" +
        "</div>" +   
         "</div>";
    }
    console.log(data['tecnologias']);
    area_tecnologias.insertAdjacentHTML('beforeend',bloco_tecnologia);
}