
//Esta linea se encarga de ejecutar lo que se encuentra dentro de la funcion cuando todo el html esta este completamente cargado
document.addEventListener('DOMContentLoaded', function(){


// se define la variable selectReferencia, por convencion usamos el prefijo "select" para indicar que es un elemento select y 
// asignamos el elemento del html con el atributo que tiene  id "referencia"
const selectReferencia = document.getElementById("referencia");


// se define una variable, especifiqueContainer y asignamos el elemento del html con la clase "especifique-container" 
const especifiqueContainer = document.querySelector(".especifique-container");


//aca se pide que la variable selectReferencia con el addeEventListener escuchhe el evento "change" , que para nuesntro caso 
// es cuando el usuario selecciona una opcion del select , entonces se ejecuta la funcion
selectReferencia.addEventListener('change', function() {


    // esto hace el cuadro especifique este oculto cuando no se selecciona la opcion "otro", this.value
    //  tiene que concidir con otro. this, en este caso
    // hace referencia al elemento select que disparo el evento, en este caso <select id="referencia">,
    // y value es el valor de la opcion seleccionada, en este caso "otro" 
    // el div que puse en el html con la clase especifique-container se oculta, esta linea modifica el
    //  estilo en el css, poniendo display none o block 

especifiqueContainer.style.display =this.value === 'otro' ? 'block' : 'none' ; 

}); 


//Definimos la variable formulario , y le asignamos el elemento del html con la etiqueta <form> mendiante un querySelector.
const formulario = document.querySelector('form');


// la variable que creamos formulario le decimos que este a la escucha del evento submit , cuando eso pase ejecuta la funcion  enviarformulario
   

formulario.addEventListener('submit', function(enviarformulario) {

    //con esta linea evitamos fque la pagina se recargue, algo habitual que pasa cuando se envia un formulario
    enviarformulario.preventDefault() ;

    // aca mostramos el mensaje  que se pide en guia ,  un mensaje de alerta al usuario, que dice "Mensaje enviado"
    alert('Mensaje enviado') ; 


    // con esta linea hacemos que el formulario se resetee, es decir que se borren los datos que el usuario ingreso
    // y vuelva a su estado inicial
    formulario.reset();

    // y por ultimo hacemos que el cuadro especifique se oculte nuevamente, para que no quede visible, 
    especifiqueContainer.style.display= 'none' ;
    });

});

