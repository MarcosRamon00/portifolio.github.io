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
        bloco_projeto += "<div class='col-sm-12 col-md-4 bloco_projeto'>";
        bloco_projeto += "<h3 class='text-center'>" + data[i].nome + "</h3>";
        bloco_projeto += "<img src='" + data[i].imagem +"' class='img-fluid'>";
        bloco_projeto += "<h4>Descrição</h4>"; 
        bloco_projeto += "<p>" + data[i].descricao + "</p>";
        bloco_projeto += "<div class='btn-group btn-block'>";
            //caso projeto nao possua link para o projeto
                if(data[i].link != '' || data[i].link == null || data[i].link == 0){
                    bloco_projeto +=  "<a href='" + data[i].link + "' alt='" + data[i].alt_link + "' class='btn btn-secondary '>ver projeto</a>";
                }
            //caso projeto nao possua link para o codigo fonte
                if(data[i].codigoFonte != '' || data[i].codigoFonte == null || data[i].codigoFonte == 0){
                    bloco_projeto += "<a href='" + data[i].codigoFonte +"' alt='" + data[i].alt_codigoFonte + "' class='btn btn-secondary '>código fonte</a>";
                }
             bloco_projeto += "</div>";   
         bloco_projeto += "</div>";
    }
    area_projetos.insertAdjacentHTML('beforeend',bloco_projeto);
}