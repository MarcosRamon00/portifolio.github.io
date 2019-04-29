var area_projetos = document.getElementById("area_projetos");

var request = new XMLHttpRequest();
request.open('GET','./json/projetos.json');
request.onload = function(){
    var data = JSON.parse(request.responseText);
     renderizarHTMLProjetos(data);
    
};
request.send();
    

function renderizarHTMLProjetos(data){
    var bloco_projeto = "";
    for (i = 0;i < data.length; i++){
        bloco_projeto += "<div class='col-sm-12 col-md-4 bloco_projeto'>" +
        "<h3 class='text-center'>" + data[i].nome + "</h3>" +
        "<img src='" + data[i].imagem +"' class='img-fluid'>" +
        "<h4>Descrição</h4>" + 
        "<p>" + data[i].descricao + "</p>" +
        "<div class='btn-group btn-block'>" +
            "<a href='" + data[i].link + "' alt='" + data[i].alt_link + "' class='btn btn-secondary '>ver projeto</a>" +
            "<a href='" + data[i].codigoFonte +"' alt='" + data[i].alt_codigoFonte + "' class='btn btn-secondary '>código fonte</a>" +
        "</div>" +   
         "</div>";
    }
    area_projetos.insertAdjacentHTML('beforeend',bloco_projeto);
}