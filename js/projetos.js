var section_projects = document.getElementById("area_projetos");

//ajax executado automaticamente com o carregar da pagina
var request = new XMLHttpRequest();
request.open('GET','./json/projetos.json');
request.onload = function(){
  if(this.status == 200){
    var data = JSON.parse(request.responseText);
    renderDivProjects(data);
  }else if(this.status == 404){
    renderDivErrorNotFound();
  }
  request.onerror = function(){
    renderDivError();
  }      
};
request.send();

//funcao para montar html de projetos
function renderDivProjects(data){
  var div_project = "";
  for (i = 0;i < data.length; i++){
    div_project += "<div class='col-sm-12 col-md-4 bloco_projeto'>";
    div_project += "<h3 class='text-center'>" + data[i].nome + "</h3>";
    div_project += "<img src='" + data[i].imagem +"' class='img-fluid'>";
    div_project += "<h4>Descrição</h4>"; 
    div_project += "<p id='descricao_projeto' class='text-justify'>" + data[i].descricao + "</p>";
    div_project += addDivButtons(data);//add div botoes   
    div_project += "</div>";
  }
  section_projects.insertAdjacentHTML('beforeend',div_project);
}

//add div para os botoes
function addDivButtons(data){
  var div_buttons = "";
  div_buttons += "<div id='botoes' class='btn-group btn-block'>";
  //caso projeto possua link para o projeto
  if(data[i].link.projeto != "" && data[i].link.projeto != null && data[i].link.projeto != 0){
    div_buttons += addButtonLink(data);
  }
  //caso projeto possua link para o codigo fonte
  if(data[i].link.codigoFonte != "" && data[i].link.codigoFonte != null && data[i].link.codigoFonte != 0){
    div_buttons += addButtonSourceCode(data);
  }
  div_buttons += "</div>";
  return div_buttons;
}

//adiciona botao para link do projeto
function addButtonLink(data){
  return "<a href='" + data[i].link.projeto +"' alt='" + data[i].link.alt_projeto + "' class='btn btn-secondary '>ver projeto</a>";
}

//adiciona botao para link do codigo fonte
function addButtonSourceCode(data){
  return "<a href='" + data[i].link.codigoFonte +"' alt='" + data[i].link.alt_codigoFonte + "' class='btn btn-secondary '>código fonte</a>";
}

//rederizar aviso de erro not found(404)
function renderDivErrorNotFound(){
  var div_project = "";
  div_project += "<div id='div_alerta_erro' class='container'>";
  div_project += "<h2 class='text-center alert alert-danger'>Dados não encontrados, tente novamente mais tarde.</h2>";
  div_project += "</div>"; 
  section_projects.insertAdjacentHTML('beforeend',div_project);
}

//renderizar aviso de erro
function renderDivError(){
  var div_project = "";
  div_project += "<div id='div_alerta_erro' class='container'>";
  div_project += "<h2 class='text-center alert alert-danger'>Houve algum erro, tente novamente mais tarde.</h2>";
  div_project += "</div>";
  section_projects.insertAdjacentHTML('beforeend',div_project); 
}