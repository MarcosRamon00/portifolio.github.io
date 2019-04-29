//ajax executado automaticamente com o carregar da pagina
var area_projetos = document.getElementById("area_projetos");

var request = new XMLHttpRequest();
request.open('GET','./json/projetos.json');
request.onload = function(){
    var data = JSON.parse(request.responseText);
     renderizarHTMLProjetos(data);    
};
request.send();

//funcao para montar html de projetos
function renderizarHTMLProjetos(data){
    var bloco_projeto = "";
    for (i = 0;i < data.length; i++){
        bloco_projeto += "<div class='col-sm-12 col-md-4 bloco_projeto'>";
        bloco_projeto += "<h3 class='text-center'>" + data[i].nome + "</h3>";
        bloco_projeto += "<img src='" + data[i].imagem +"' class='img-fluid'>";
        bloco_projeto += "<h4>Descrição</h4>"; 
        bloco_projeto += "<p>" + data[i].descricao + "</p>";
        bloco_projeto += addDivBotoes(data);//add div botoes   
        bloco_projeto += "</div>";
    }
    area_projetos.insertAdjacentHTML('beforeend',bloco_projeto);
}

//add div para os botoes
function addDivBotoes(data){
    var div_botoes = "";
    div_botoes += "<div id='botoes' class='btn-group btn-block'>";
    //caso projeto possua link para o projeto
    if(data[i].link != "" && data[i].link != null && data[i].link != 0){
        div_botoes += addBotaoLink(data);
    }
    //caso projeto possua link para o codigo fonte
    if(data[i].codigoFonte != "" && data[i].codigoFonte != null && data[i].codigoFonte != 0){
        div_botoes += addBotaoCodigoFonte(data);
    }
    div_botoes += "</div>";
    return div_botoes;
}

////adiciona botao para link do projeto
function addBotaoLink(data){
    return "<a href='" + data[i].link +"' alt='" + data[i].alt_link + "' class='btn btn-secondary '>ver projeto</a>";
}

//adiciona botao para link do codigo fonte
function addBotaoCodigoFonte(data){
    return "<a href='" + data[i].codigoFonte +"' alt='" + data[i].alt_codigoFonte + "' class='btn btn-secondary '>código fonte</a>";
}