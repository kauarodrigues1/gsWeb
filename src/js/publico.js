let elem = document.getElementById("menu-item1")
console.log("Elem: ",elem);
let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ",elemItens);

function entrei() {
    elemItens.classList.remove("menu-subitens-hidden")
}

function sai() {
    elemItens.classList.add("menu-subitens-hidden")
}

elem.addEventListener("mouseenter", entrei);
//elem.addEventListener("mousemove", mover);
elemItens.addEventListener("mouseleave", sai);


function trocarCorBotao1() {
    const botao1 = document.getElementById("botao1");
    const header = document.querySelector('header');  
    const conteudo = document.querySelector('.conteudo');  
    const rodape = document.querySelector('.rodape');  
    const menuItens1 = document.getElementById("menu-itens1");
    header.style.backgroundColor = 'rgb(47, 147, 180)'; 
    conteudo.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
    rodape.style.backgroundColor = 'rgb(47, 147, 180)'; 
    menuItens1.style.backgroundColor = 'rgba(173, 216, 230, 0.8)';
    body.style.backgroundColor = 'rgb(47, 147, 180)';
  }
  
function trocarCorBotao2() {
    const botao1 = document.getElementById("botao2");
    const header = document.querySelector('header');  
    const conteudo = document.querySelector('.conteudo');  
    const rodape = document.querySelector('.rodape');  
    const menuItens1 = document.getElementById("menu-itens1");
    header.style.backgroundColor = "rgb(104, 214, 163)"; 
    conteudo.style.backgroundColor = 'rgb(104, 214, 163, 0.5)';
    rodape.style.backgroundColor = "rgb(104, 214, 163)"; 
    menuItens1.style.backgroundColor = 'rgb(104, 214, 163, 0.8)';
    body.style.backgroundColor = "rgb(104, 214, 163)"; 
  }
function trocarCorBotao3() {
    const botao1 = document.getElementById("botao3");
    const header = document.querySelector('header');  
    const conteudo = document.querySelector('.conteudo');  
    const rodape = document.querySelector('.rodape');  
    const menuItens1 = document.getElementById("menu-itens1");
    header.style.backgroundColor = "rgb(217, 219, 88)"; 
    conteudo.style.backgroundColor = 'rgb(217, 219, 88, 0.5)';
    rodape.style.backgroundColor = "rgb(217, 219, 88)"; 
    menuItens1.style.backgroundColor = 'rgba(217, 219, 88, 0.8)';
    body.style.backgroundColor = "rgb(217, 219, 88)"; 
  }

  let imagens =[
    "src/assets/placasolar.jpg",
    "src/assets/energia-eolica.jpg",
    "src/assets/eolicas.jpg"
];
let i=0;
let time =10000;

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
    }
    slideShow();