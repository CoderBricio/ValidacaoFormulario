const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const idadeSelect= document.querySelector("#idade");

form.addEventListener("submit",(event) =>{
    event.preventDefault();

    //verificar nome
    if(nomeInput.value === ""){
        document.querySelector("#erro").innerHTML = "por favor, preencha seu nome"
        return;
       
    }

    // Verifica se o email é válido e está preenchido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
            document.querySelector("#erro").innerHTML = "por favor, preencha seu email"
            return;
    }

    //verifica se a senha esta preenchida e com o mínimo de digitos
    if(!validatePassword(senhaInput.value, 8)){
        document.querySelector("#erro").innerHTML = "Sua senha está muito fraca, tente com pelo menos oito dígitos"
        return;

    }

    //verifica se a idade foi selecionada
    if(idadeSelect.value ===""){
        document.querySelector("#erro").innerHTML = "por favor, selecione sua idade"
        return;
    }

    //se todos os campos  estiverem  preenchidos, envie o formulário
    form.submit();
  

})

//função que valida e-mail
function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

//função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }

    return false
}