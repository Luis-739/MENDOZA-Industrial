export function Titulo(tituloTexto) {
    //1.- Crea el elemento h1
    let elementoTitulo = document.createElement("h1");
    //2.- Modifica el texto del elemento
    elementoTitulo.innerText = tituloTexto;
    //3.- Regresa ele elemento creado
    return elementoTitulo;
}

export function holaMundo (){
    return "Hola mundo";
}