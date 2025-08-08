import { TituloConLinea } from "./TituloConLinea";

/*
<div>
    <div>
        <h1>Texto</h1>
        <hr>
    </div>
    <p>Este es el contenido del párrafo</p>
</div>
*/

export function Seccion(textoTitulo, textoParrafo) {
    //1.- Crea el div padre
    let elementoDiv = document.createElement("div");
    //2.- Mandar a llamar el componente con el titulo y la linea horizontal.
    let ElementoTitulo = TituloConLinea(textoTitulo);
    //3.- Agregar el componente que tiene el titulo al div padre.
    elementoDiv.append(ElementoTitulo);

    //4.- Creamos un elemnento p.
    let elementoParrafo = document.createElement("p");
    //5.- Le damos texto al elemento p.
    elementoParrafo.innerText = textoParrafo;
    //6.- Agragamos el elemnto p al elemento div padre
    elementoDiv.append(elementoParrafo);

    let elemntoHR = document.createElement("hr");
    elementoDiv.append(elemntoHR);

    //7.- Regresamos el elemnto padre
    return elementoDiv;
}