// si me da error sacar las llaves
import Pelicula from "./classPelicula.js";
import {validarCodigo, validarTitulo, validarDescripcion} from './classPelicula.js'
// declarar variables
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

// como abrir la ventana modal desde js (sacar data bs toggle y target)
// agregar id al modal modalPelicula
const modalFormPelicula = new bootstrap.Modal(document.querySelector('#modalPelicula'))
// ya esta instanciada la ventana modal
// para el boton de administrador
const btnCrearPelicula = document.querySelector('#btnCrearPelicula')
let codigo = document.querySelector('#codigo')
let titulo = document.querySelector('#titulo')
let descripcion = document.querySelector('#descripcion')
let imagen = document.querySelector('#imagen')
let genero = document.querySelector('#genero')
let formulario = document.querySelector('#formPelicula') 

// agregar los eventos
codigo.addEventListener('blur', ()=> {validarCodigo(codigo)});
titulo.addEventListener('blur',()=>{validarTitulo(titulo)})
descripcion.addEventListener('blur', ()=>{validarDescripcion(descripcion)})
btnCrearPelicula.addEventListener('click', mostrarFormulario);
formulario.addEventListener('submit', crearPelicula);

function mostrarFormulario(){
    modalFormPelicula.show();
    codigo.value = uuidv4();
}

function crearPelicula(e){
    e.preventDefault();
    // agregar las validaciones necesarias
    

    //  crear una pelicula
    const nuevaPelicula = new Pelicula(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value)
    //  guardar pelicula en el arreglo
    listaPeliculas.push(nuevaPelicula)
    // guardar los datos en localstorage    
    guardarDatosEnLS()
    // limpiar el formulario
    limpiarFormulario();
    // cerrar la ventana modal
    modalFormPelicula.hide()  
    }
    
function limpiarFormulario(){
    formulario.reset();
}  
    
   
// stringify transforma a formato json
function guardarDatosEnLS(){
    localStorage.setItem('listaPeliculasKey', JSON.stringify(listaPeliculas))

}



 
