import { Titulo, holaMundo } from './componentes/Titulo.js';
import { TituloConLinea } from './componentes/TituloConLinea.js';
import { Seccion } from "./componentes/Seccion.js";

let divApp = document.getElementById("app");

//1.- La funcion Titulo() regresa un elemento de HTML.
let titulo1 = Titulo("Hola");
let titulo2 = Titulo("soy");
let titulo3 = Titulo("un");
let titulo4 = Titulo("titulo");

//2.- La funcion append() agrega un elemnto a otro elemento.
divApp.append(titulo1);
divApp.append(titulo2);
divApp.append(titulo3);
divApp.append(titulo4);


let tituloConLinea1 = TituloConLinea("Primera seccion");
let tituloConLinea2 = TituloConLinea("Segunda seccion");

divApp.append(tituloConLinea1);
divApp.append(tituloConLinea2);

let seccion1 = Seccion("Primer titulo", "primer párrafo");
let seccion2 = Seccion("Segundo titulo", "segundo párrafo");

divApp.append(seccion1);
divApp.append(seccion2);
