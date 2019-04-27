var animalContainer = document.getElementById("projetos");
var btn = document.getElementById("btn");
var countProjetos = 0;

btn.addEventListener("click",function(){
    var request = new XMLHttpRequest();
    request.open('GET','./json/data.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        renderHTML(data);
    };
    request.onerror = function(){
        document.write("error");
    };
    request.send();
});

function renderHTML(data){
    var htmlString = "";
    for (i = 0;i < data.length; i++){
        htmlString += "<div class='col-sm-12 col-md-4 bloco_projeto'>" +
        "<h3 class='text-center'>" + data[i].nome + "</h3>" +
        "<p>" + data[i].imagem +"</p>" +
        "<h4>Descrição</h4>" + 
        "<p>" + data[i].descricao + "</p>" +
        "<div class='btn-group btn-block'>" +
            "<a href='" + data[i].link + "' class='btn btn-primary '>ver projeto</a>" +
            "<a href='" + data[i].codigoFonte + "' class='btn btn-primary '>código fonte</a>" +
        "</div>" +   
         "</div>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}