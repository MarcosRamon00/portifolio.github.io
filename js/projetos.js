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
  let div_project = "";
  for (i = 0;i < data.length; i++){
    div_project += "<div class='col-sm-12 col-md-4 bloco_projeto'>";
    div_project += "<h3 class='text-center titulo_projeto_nome'>" + data[i].nome + "</h3>";
    div_project += "<img src='" + data[i].imagem +"' class='img-fluid imagem_projeto'/>";
    div_project += "<div class='bloco_texto'>";
    div_project += "<h4 class='titulo_descricao_projeto'>Descrição</h4>"; 
    div_project += "<p class='text-justify descricao_projeto'>" + data[i].descricao + "</p>";
    div_project += addDivTeam(data);
    div_project += "</div>";
    div_project += addDivButtons(data);//add div botoes
    div_project += "</div>";
  }
  section_projects.insertAdjacentHTML('beforeend',div_project);
}
//add div para equipe
function addDivTeam(data){
  let div_equipe = "";
  if(data[i].equipe != "" && data[i].equipe != null && data[i].equipe != 0){
    div_equipe += "<div>";
    div_equipe += "<h4 class='titulo_equipe_projeto'>Equipe</h4>";
    div_equipe += addLinksMembers(data);
    div_equipe += "</div>";
  }
  
  return div_equipe;
}

//add links dos membros da equipe
function addLinksMembers(data){
  let linksMembros = "";
  for (indexLink = 0;indexLink < data[i].equipe.membro.length; indexLink++){
    linksMembros += "<span class='membro_equipe_projeto'><a class='badge badge-pill badge-custom' href='" + data[i].equipe.contato_membro[indexLink] + "'>" + data[i].equipe.membro[indexLink] + "</a></span>";
  }
  return linksMembros; 
}

//add div para os botoes
function addDivButtons(data){
  let div_buttons = "";
  div_buttons += "<div class='btn-group btn-block'>";
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
  return "<a href='" + data[i].link.projeto +"' alt='" + data[i].link.alt_projeto + "' class='btn btn-custom '>ver projeto</a>";
}

//adiciona botao para link do codigo fonte
function addButtonSourceCode(data){
  return "<a href='" + data[i].link.codigoFonte +"' alt='" + data[i].link.alt_codigoFonte + "' class='btn btn-custom '>código fonte</a>";
}

//renderizar aviso de erro not found(404)
function renderDivErrorNotFound(){
  let div_project = "";
  div_project += "<div id='div_alerta_erro' class='container'>";
  div_project += "<h2 class='text-center alert alert-danger'>Dados não encontrados, tente novamente mais tarde.</h2>";
  div_project += "</div>"; 
  section_projects.insertAdjacentHTML('beforeend',div_project);
}

//renderizar aviso de erro
function renderDivError(){
  let div_project = "";
  div_project += "<div id='div_alerta_erro' class='container'>";
  div_project += "<h2 class='text-center alert alert-danger'>Houve algum erro, tente novamente mais tarde.</h2>";
  div_project += "</div>";
  section_projects.insertAdjacentHTML('beforeend',div_project); 
}