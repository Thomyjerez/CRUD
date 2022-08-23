// si me da error sacar las llaves
import Pelicula from "./classPelicula";
// declarar variables
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

// como abrir la ventana modal desde js (sacar data bs toggle y target)
// agregar id al modal modalPelicula
const modalFormPelicula = new bootstrap.Modal(document.querySelector('#modalPelicula'))
// ya esta instanciada la ventana modal
// para el boton de administrados
const btnCrearPelicula = document.querySelector('#btnCrearPelicula')
let codigo = document.querySelector('#codigo')
let titulo = document.querySelector('#titulo')
let descripcion = document.querySelector('#descripcion')
let imagen = document.querySelector('#imagen')
let genero = document.querySelector('#genero')
let formulario = document.querySelector('#formPelicula') 
// agregar los id en el index
// agregar los eventos
btnCrearPelicula.addEventListener('click', mostrarFormulario);
formulario.addEventListener('submit', crerPelicula)

function mostrarFormulario(){
    modalFormPelicula.show();
    codigo.value = uuidv4();
}

function crerPelicula(e){
    e.preventDefault();
    // agregar las validaciones necesarias
    // crer una pelicula
    const nuevaPelicula = new Pelicula(codigo.value, titulo.value,descripcion.value,imagen.value,genero.value);

    // guardar la pelicula en el arreglo
    listaPeliculas.push(nuevaPelicula)
    console.log(listaPeliculas)
    // guardar los datos en localstorage

    // limpiar el form 

    limpiarFormulario();
    // cerrar la ventana modal
    modalFormPelicula.hide();
}

function limpiarFormulario(){
    formulario.reset()
    // resetear la clase de bootstrap form-control
}

// stringify transforma a formato json
function guardarDatosEnLS(){
    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas))

}




