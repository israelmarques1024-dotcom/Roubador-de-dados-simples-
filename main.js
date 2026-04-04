//estilizado a página
document.body.style.background = 'linear-gradient(to right, green, lime)';
// criando os botões básicos e seus tipos
let Gmail = document.createElement('input');
// Gmail tipo não precisa!
Gmail.placeholder = "digite seu Gmail";

let senha = document.createElement('input');
//senha 🔑 tipo
senha.type = 'password';
senha.placeholder = "digite sua senha"

let inpData = document.createElement('input');
// tipo do inpData
inpData.type = 'date';
inpData.placeholder = "digite sua data de nascimento"

let btnLogin = document.createElement('button');
btnLogin.innerText = "LOGIN"
// adicionando eles no corpo
document.body.appendChild(Gmail);
document.body.appendChild(senha);
document.body.appendChild(inpData);
document.body.appendChild(btnLogin);

btnLogin.style.display = "block"
btnLogin.style.margin = "auto"
btnLogin.style.paddingTop = "5px"
btnLogin.style.background = "green"
inpData.style.borderRadius = "100px"; // Arredonda os cantos
Gmail.style.borderRadius = "100px"; // Arredonda os cantos
senha.style.borderRadius = "100px"; // Arredonda os cantos

// espaço entre ps inputs
senha.style.marginBottom = "15px";
Gmail.style.marginBottom = "15px";
inpData.style.marginBottom = "15px";
// cor dos inputs
senha.style.background = "lime"
inpData.style.background = "lime"
Gmail.style.background = "lime"
// dando a função ao botão de login
btnLogin.addEventListener('click', function() {
  let resSenha = senha.value
  let resGmail = Gmail.value
  let resData = inpData.value
  
  if (resGmail === '' && resSenha === '' &&  resData === '') {
    alert("preencha todos os campos, por favor!")
  } else 
  alert("seu otário perdeu todos os seus dados!kkkkkk(olha no console)");
  // pegando os dados 
  console.log(resGmail);
  console.log(resData);
  console.log(resSenha);
})

