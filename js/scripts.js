document.addEventListener('DOMContentLoaded', function(){

const selectReferencia = document.getElementById("referencia");

const especifiqueContainer = document.querySelector(".especifique-container");

selectReferencia.addEventListener('change', function() {

especifiqueContainer.style.display =this.value === 'otro' ? 'block' : 'none' ; 

}); 

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault() ;

    alert('Mensaje enviado') ; 

    formulario.reset();
    especifiqueContainer.style.display= 'none' ;
    });

});

