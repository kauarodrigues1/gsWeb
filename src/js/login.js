//DECLARANDO AS VARIAVEIS
const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("senha")


form.addEventListener('submit',(e)=>{
    
    e.preventDefault()


    checarCampos()
})  


function checarCampos(){
 
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    if(nomeValor ===""){
       validarErro(nome,"Preencha o campo nome")
    }
    else{
        validarSucesso(nome)
    }


    if(emailValor === ""){
        validarErro(email, "Preencha o campo email")
    }
    else{   
        validarSucesso(email)
    }

    

    if(senhaValor === ""){
        validarErro(senha,"Preencha o campo senha")
    }
    else if(senhaValor.length < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
    }else{
        validarSucesso(senha)
    }

} 


    function validarErro(input,message){    
       
        const controle = input.parentElement;
       
        const small = controle.querySelector('small')
       
        small.innerText = message
       
        controle.className ="controle error"
    }


    function validarSucesso(input){
        
        const controle = input.parentElement;
        
        controle.className = "controle sucesso"
    }


    function chamar() {
        
        let validarErro = checarCampos();

        if (validarErro){
            window.location = "login.html";
        } else {
            window.location = "quizz.html";
        }
    }

    let elem = document.getElementById("menu-item1")
console.log("Elem: ",elem);
let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ",elemItens);

function entrei() {
    console.log("entrei em cima do elemento");
    elemItens.classList.remove("menu-subitens-hidden")
}

function mover() {
    console.log("movimentando em cima do elemento");
}

function sai() {
    console.log("sai de cima do elemento");
    elemItens.classList.add("menu-subitens-hidden")
}

elem.addEventListener("mouseenter", entrei);
//elem.addEventListener("mousemove", mover);
elemItens.addEventListener("mouseleave", sai);
    