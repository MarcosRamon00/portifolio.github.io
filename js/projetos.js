var area_projetos = document.getElementById("area_projetos");

//ajax executado automaticamente com o carregar da pagina
var request = new XMLHttpRequest();
request.open('GET','./json/projetos.json');
request.onload = function(){
    var dados = JSON.parse(request.responseText);
     renderizarHTMLProjetos(dados);    
};
request.send();

//funcao para montar html de projetos
function renderizarHTMLProjetos(dados){
    var div_projeto = "";
    for (i = 0;i < dados.length; i++){
        div_projeto += "<div class='col-sm-12 col-md-4 bloco_projeto'>";
        div_projeto += "<h3 class='text-center'>" + dados[i].nome + "</h3>";
        div_projeto += "<img src='" + dados[i].imagem +"' class='img-fluid'>";
        div_projeto += "<h4>Descrição</h4>"; 
        div_projeto += "<p>" + dados[i].descricao + "</p>";
        div_projeto += addDivBotoes(dados);//add div botoes   
        div_projeto += "</div>";
    }
    area_projetos.insertAdjacentHTML('beforeend',div_projeto);
}

//add div para os botoes
function addDivBotoes(dados){
    var div_botoes = "";
    div_botoes += "<div id='botoes' class='btn-group btn-block'>";
    //caso projeto possua link para o projeto
    if(dados[i].link != "" && dados[i].link != null && dados[i].link != 0){
        div_botoes += addBotaoLink(dados);
    }
    //caso projeto possua link para o codigo fonte
    if(dados[i].codigoFonte != "" && dados[i].codigoFonte != null && dados[i].codigoFonte != 0){
        div_botoes += addBotaoCodigoFonte(dados);
    }
    div_botoes += "</div>";
    return div_botoes;
}

//adiciona botao para link do projeto
function addBotaoLink(dados){
    return "<a href='" + dados[i].link +"' alt='" + dados[i].alt_link + "' class='btn btn-secondary '>ver projeto</a>";
}

//adiciona botao para link do codigo fonte
function addBotaoCodigoFonte(data){
    return "<a href='" + data[i].codigoFonte +"' alt='" + data[i].alt_codigoFonte + "' class='btn btn-secondary '>código fonte</a>";
}