export default class Pelicula{
    constructor(codigo, titulo, descripcion,imagen,genero){
        this.codigo = codigo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.genero = genero
    }
    // aqui agregar los metodos necesarios
    mostrarDetallePelicula (codigo,titulo,descripcion,imagen,genero){
        return `<ul>
        <li>Codigo: ${codigo}</li>
        <li>Codigo: ${titulo}</li>
        <li>Codigo: ${descripcion}</li>
        <li>Codigo: ${imagen}</li>
        <li>Codigo: ${genero}</li>
        </ul>`
    }
}


export function validarCodigo(input){
    let expReg = /^[0-9]{9}$/
    if(expReg.test(input.value)){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}


 export function validarTitulo(input){
    if(input.value.trim().length >=3 && input.value.trim().length <=30){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarDescripcion(input){
    if(input.value.trim().length <= 300){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
 }
 




