`use-strict`;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

import { firebaseConfig } from './firebaseConf.js';
import * as vista from "./vista.js";    //Importamos el js vista en el que se muestran el tablero, inicio de sesion y registro

// https://firebase.google.com/docs/web/setup#available-libraries

//Variables 
const app = initializeApp(firebaseConfig);  //Inicializar conexion
const analytics = getAnalytics(app);    //Inicializar firebase

//Funciones
function comprobarCorreo(correo)    //Comprobar correo con expresion regular
{	

    let expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(expresion.test(correo))
    {

        return true;

    }
    else
    {

        return false;

    }

}   

function inicioSesion() //Comprobar si el usuario existe
{

    //Varliables
    let nombre = document.getElementById("usuario-inicio");  //Seleccionamos el correo que ha puesto
    let contra = document.getElementById("contra-inicio");  //Seleccionamos la contraseña que ha puesto
    let nombreMostrar = nombre.value.split("@");
    nombreMostrar = nombreMostrar[0];
    const auth = getAuth();

    //Codigo

    if(nombre.value != "" && contra.value != "")
    {

        signInWithEmailAndPassword(auth, nombre.value, contra.value)
        .then(() =>
        {

            alert("Bienvenido usuario: "+nombreMostrar); //Le saludamos
            vista.tablero();    //Llamamos a la vista del tablero y su funcionamiento

        })  
        .catch((err) =>     //Si hay algun error
        {

            console.log("Error al iniciar sesion", err);
            alert("El usuario y contraseña no coincide con ningun usuario");    //Esto se sustituira por una animacion y un div debajo
            
            //Quitamos el focus
            nombre.blur();
            contra.blur();

            //Limpiamos el contenido de los input
            nombre.value = "";
            contra.value = "";

            //Metemos animacion para indicar que estan mal
            nombre.classList.add("animacion");  //Se añade la animacion
            contra.classList.add("animacion");  //Se añade la animacion

            setTimeout(function()   //Cuando pase 1 segundo
            {
    
                nombre.classList.remove('animacion');   //Se quita la animacion
                contra.classList.remove('animacion');   //Se quita la animacion
    
            },1000);

        });

    }
    else
    {

        if(nombre.value == "")  //Si nombre esta vacio
        {

            nombre.classList.add("animacion");  //Se añade la animacion
            nombre.blur();  //Quitamos el focus

        }
        if(contra.value == "")  //Si contra esta vacio
        {

            contra.classList.add("animacion");  //Se añade la animacion
            contra.blur();  //Quitamos el focus

        }

        setTimeout(function()   //Cuando pase 1 segundo
        {

            nombre.classList.remove('animacion');   //Se quita la animacion
            contra.classList.remove('animacion');   //Se quita la animacion

        },1000);

    }

}

function usuarioRegistro()
{

    //Variables
    let nombre = document.getElementById("usuario-registro");  //Seleccionamos el correo que ha puesto
    let contra = document.getElementById("contra-registro");  //Seleccionamos la contraseña que ha puesto
    const auth = getAuth();

    //Codigo

    if(nombre.value != "" && contra.value != "")
    {

        createUserWithEmailAndPassword(auth, nombre.value, contra.value)    //Creacion de la cuenta
        .then(() =>
        {

            alert("Cuenta registrada con exito"); //Le saludamos
            vista.inicioSesion();    //Llamamos a la vista del inicio de sesion para que inicie sesion

        })
        .catch((err) => //Si hay algun error
        {

            let mensajeR = "";

            if(!comprobarCorreo(nombre.value))  //Mandamos a revisar si lo que esta mal es el correo
            {

                mensajeR += "Esto no es un correo\n";  //Indica que no es un correo

            }
            if(contra.value.length < 6) //Comprobamos si la contraseña es un numero menor de 6
            {

                mensajeR += "La contraseña es menor de 6 caracteres\n";   //Indicamos que el numero es menor de 6 caracteres

            }
            else
            {

                alert("La cuenta ya esta registrada");    //Esto se sustituira por una animacion y un div debajo
                console.log(err);

            }
            
            if(mensajeR != "")  //Si el mensaje no esta vacio entra
            {

                alert(mensajeR);    //Lo muestra en una alerta

            }

            //Quitamos el focus
            nombre.blur();
            contra.blur();

            //Limpiamos el contenido de los input
            nombre.value = "";
            contra.value = "";

            //Metemos animacion para indicar que estan mal
            nombre.classList.add("animacion");  //Se añade la animacion
            contra.classList.add("animacion");  //Se añade la animacion

            setTimeout(function()   //Cuando pase 1 segundo
            {
    
                nombre.classList.remove('animacion');   //Se quita la animacion
                contra.classList.remove('animacion');   //Se quita la animacion
    
            },1000);

        });

    }
    else
    {

        if(nombre.value == "")  //Si nombre esta vacio
        {

            nombre.classList.add("animacion");  //Se añade la animacion
            nombre.blur();  //Quitamos el focus

        }
        if(contra.value == "")  //Si contra esta vacio
        {

            contra.classList.add("animacion");  //Se añade la animacion
            contra.blur();  //Quitamos el focus

        }

        setTimeout(function()   //Cuando pase 1 segundo
        {

            nombre.classList.remove('animacion');   //Se quita la animacion
            contra.classList.remove('animacion');   //Se quita la animacion

        },1000);

    }

}

export{     //Exportamos las funciones

  inicioSesion,
  usuarioRegistro,

}