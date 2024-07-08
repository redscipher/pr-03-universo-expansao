//variaveis
let flgBootstrap = false, flgJQuery = false;

// constantes
const botaoConfirmar = document.getElementById('idBtnConfirmar');
const formulario = document.querySelectorAll('.needs-validation')

//funcoes
let inicializaBootstrap = function(){
    try {
        console.log('Bootstrap preparado');
        // carregado
        flgBootstrap = true
        console.log(flgBootstrap);
   } catch (error) {
        flgBootstrap = false
        console.log(error.message);
   }
}

let inicializaJQuery = function(){
     try {
         console.log('JQuery preparado');
         // carregado
         flgJQuery = true
         console.log(flgJQuery);
    } catch (error) {
          flgJQuery = false
          console.log(error.message);
    }
 }

let validaFormulario = function(e){
    try {
        //validacao bootstrap pronto p/ uso + objeto identificado
        if(flgBootstrap && flgJQuery && botaoConfirmar){
             
          // loop por todos os campos do formulario
          Array.from(formulario).forEach(form => {
               // adicionar ouvinte evento
               form.addEventListener('submit', event => {
                    //valida se formulario esta valido
                    if (form.checkValidity()){
                         // fecha modal
                         alert('Cadastro realizado com sucesso!');
                         //recarrega pagina
                         form.reset();
                         window.location.reload(true);
                         $('#idModal').modal('hide');
                    }else{
                         // pausa execucao modal
                         event.preventDefault()
                         event.stopPropagation()
                    }
                    form.classList.add('was-validated')
               }, false)
          })
        }
    } catch (error) {
        console.log(error.message);
    }
}

// confirma/espera todo conteudo do dom ser carregado
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
$(document).ready(inicializaJQuery);

//eventos
botaoConfirmar.addEventListener('click', validaFormulario);