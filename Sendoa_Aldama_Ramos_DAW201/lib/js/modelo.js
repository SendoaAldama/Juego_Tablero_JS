`use-strict`;

import * as vista from "./vista.js";    //Importamos el js vista en el que se muestran el tablero, inicio de sesion y registro

/* 
    En este JS solo haremos que cuando se carge la pagina se ejecute sesion que es la funcion que va a hacer que comience a funcionar toda
    la pagina, todo el contenido del funcionamiento esta en vista en el que estan los eventos y funciones de mostrar el DOM y 
    la base de datos de firebase se encuentra dentro de controlador, en el que estan los metodos para hacer que podamos iniciar sesion
    y crearemos cuentas.
*/

function inicio()
{

    vista.sesion(); //Se mostrara todo lo de la funcion

}

window.onload = inicio();