import { Titulo } from "./Titulo";

export function TituloConLinea (tituloTexto) {
    let elemntoDiv = document.createElement("div");
    let elementoTitulo = Titulo(tituloTexto);
    elemntoDiv.append(elementoTitulo);

    let elementoHR = document.createElement("hr");
    elemntoDiv.append(elementoHR);

    let elementoHR2 = document.createElement("hr");
    elemntoDiv.append(elementoHR2);

    return elemntoDiv;    
}