

function validarSenhas() {
//carrega os valores das duas senhas 	
	var senha = document.getElementById("senha").value;
	var confirmarSenha = document.getElementById("confirmarsenha").value;
	
  	// Verifica se as senhas são iguais
	if (senha === confirmarSenha) {
	  alert("Logado com Sucesso");
	  return true; // se a senha for igual retorna verdadeiro
	} else {   //senao, faça isso:
	  alert("As senhas não são iguais");
	  return false; // se a senha for diferente retorna falso 
	}
  }
  const form = document.getElementById('meuFormulario')
  form.addEventListener ('submit', function(event){

  })

  // Adicione um ouvinte de evento para o formulário de envio
  document.getElementById('meuFormulario').addEventListener('submit', function(event) {
	event.preventDefault() //impede que o formulário seja enviado
	if (validarSenhas()) {   //se retornar verdadeiro
		window.location.href = 'https://www.unisuam.edu.br/' //redireciona para o site da suam 
	}
  })


  
 
  