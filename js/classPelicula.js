export class Pelicula{
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



 




