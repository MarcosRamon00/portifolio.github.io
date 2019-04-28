var area_projetos = document.getElementById("area_projetos");
var btn_projetos = document.getElementById("btn_projetos");
var isBtnProjetosAtivo = true;

btn_projetos.addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','./json/projetos.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        if(isBtnProjetosAtivo){
            renderTodosProjetos(data);
            isBtnProjetosAtivo = false;
        }
    };
    request.send();
    
});

function renderTodosProjetos(data){
    var bloco_projeto = "";
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
    area_projetos.insertAdjacentHTML('beforeend',bloco_projeto);
}