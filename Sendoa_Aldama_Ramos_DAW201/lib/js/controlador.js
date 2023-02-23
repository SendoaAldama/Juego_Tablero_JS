`use-strict`;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";  //Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";   //Funciones de autenticacion
import { getAnalytics, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";    //Analiticas
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"; //Añadir datos a la base de datos llamada fire store   //Base de datos

import { firebaseConfig } from './firebaseConf.js'; //Importamos el contenido de firebaseConf.js que son las referencia de los datos del proyecto
import * as vista from "./vista.js";    //Importamos el js vista en el que se muestran el tablero, inicio de sesion y registro

// https://firebase.google.com/docs/web/setup#available-libraries

//Variables 
const app = initializeApp(firebaseConfig);  //Inicializar conexion
const analytics = getAnalytics(app);    //Inicializar firebase
const db = getFirestore(app);   //Inicializamos la base de datos

//Funciones
function comprobarCorreo(correo)    //Comprobar correo con expresion regular
{	

    let expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;  //Expresion regular que indica el tamaño, formato y contenido que puede temer

    if(expresion.test(correo))  //Si el correo esta bien formado
    {

        return true;    //Devuelve true

    }
    else    //Sino 
    {

        return false;   //Devuelve false

    }

}   

function inicioSesion() //Comprobar si el usuario existe
{

    //Varliables
    let correo = document.getElementById("usuario-inicio");  //Seleccionamos el correo que ha puesto
    let contra = document.getElementById("contra-inicio");  //Seleccionamos la contraseña que ha puesto
    let nombreMostrar = correo.value.split("@");
    nombreMostrar = nombreMostrar[0];
    const auth = getAuth();

    //Codigo

    if(correo.value != "" && contra.value != "")    //Si no estan vacios
    {

        signInWithEmailAndPassword(auth, correo.value, contra.value)    //Comprobacion de si el usuario existe
        .then(() =>     //Si existe se realizan estas funciones
        {

            if(document.getElementById("jugar"))    //Miramos si existe
            {

                document.getElementById("jugar").remove();  //Borramo boton Inicio Sesion

                let jugar = document.createElement("button");   //Boton de jugar
                jugar.id = "jugar";
                jugar.appendChild(document.createTextNode("Jugar"));

                setTimeout(() =>    
                {
                    
                    document.getElementById("contenedor-botones").insertBefore(jugar, document.getElementById("registrar"));

                }, 0);      //Al momento se introduce el boton de jugar antes del de registrar

                jugar.addEventListener("click", (evento) =>     //Evento de click del boton jugar
                {

                    alert("Bienvenido usuario: "+nombreMostrar); //Le saludamos
                    vista.tablero();    //Llamamos a la vista del tablero y su funcionamiento
        
                    sessionStorage.setItem("usuario", correo.value);    //Se añade en la sesion el correo del usuario para saber cual es

                });

            }

        })  
        .catch((err) =>     //Si hay algun error
        {

            console.log("Error al iniciar sesion", err);
            alert("El usuario y contraseña no coincide con ningun usuario");    //Esto se sustituira por una animacion y un div debajo
            
            //Quitamos el focus
            correo.blur();
            contra.blur();

            //Limpiamos el contenido de los input
            correo.value = "";
            contra.value = "";

            //Metemos animacion para indicar que estan mal
            correo.classList.add("animacion");  //Se añade la animacion
            contra.classList.add("animacion");  //Se añade la animacion

            setTimeout(function()   //Cuando pase 1 segundo
            {
    
                correo.classList.remove('animacion');   //Se quita la animacion
                contra.classList.remove('animacion');   //Se quita la animacion
    
            },1000);

        });

    }
    else    //Si estan vacios
    {

        if(correo.value == "")  //Si nombre esta vacio
        {

            correo.classList.add("animacion");  //Se añade la animacion
            correo.blur();  //Quitamos el focus

        }
        if(contra.value == "")  //Si contra esta vacio
        {

            contra.classList.add("animacion");  //Se añade la animacion
            contra.blur();  //Quitamos el focus

        }

        setTimeout(function()   //Cuando pase 1 segundo
        {

            correo.classList.remove('animacion');   //Se quita la animacion
            contra.classList.remove('animacion');   //Se quita la animacion

        },1000);

    }

}

function usuarioRegistro()  //Para registrar el usuario
{

    //Variables
    let correo = document.getElementById("usuario-registro");  //Seleccionamos el correo que ha puesto
    let contra = document.getElementById("contra-registro");  //Seleccionamos la contraseña que ha puesto
    const auth = getAuth();

    //Codigo

    if(correo.value != "" && contra.value != "")    //Si no estan vacios
    {

        createUserWithEmailAndPassword(auth, correo.value, contra.value)    //Creacion de la cuenta
        .then(() =>     //Si no existe el usuario se realiza esta accion
        {

            alert("Cuenta registrada con exito"); //Le saludamos
            vista.sesion();    //Llamamos a la vista del inicio de sesion para que inicie sesion

        })
        .catch((err) => //Si hay algun error
        {

            let mensajeR = "";

            if(!comprobarCorreo(correo.value))  //Mandamos a revisar si lo que esta mal es el correo
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
            correo.blur();
            contra.blur();

            //Limpiamos el contenido de los input
            correo.value = "";
            contra.value = "";

            //Metemos animacion para indicar que estan mal
            correo.classList.add("animacion");  //Se añade la animacion
            contra.classList.add("animacion");  //Se añade la animacion

            setTimeout(function()   //Cuando pase 1 segundo
            {
    
                correo.classList.remove('animacion');   //Se quita la animacion
                contra.classList.remove('animacion');   //Se quita la animacion
    
            },1000);

        });

    }
    else    //Si hay uno de los valores vacios
    {

        if(correo.value == "")  //Si nombre esta vacio
        {

            correo.classList.add("animacion");  //Se añade la animacion
            correo.blur();  //Quitamos el focus

        }
        if(contra.value == "")  //Si contra esta vacio
        {

            contra.classList.add("animacion");  //Se añade la animacion
            contra.blur();  //Quitamos el focus

        }

        setTimeout(function()   //Cuando pase 1 segundo
        {

            correo.classList.remove('animacion');   //Se quita la animacion
            contra.classList.remove('animacion');   //Se quita la animacion

        },1000);

    }

}

async function record(tiradas, movimientos, fechaI, fechaF)   //Comprobamos el record y si tiene como tal el usuario
{

    //Variables
    let usuario = sessionStorage.getItem("usuario");    //Guardamos en esta variable el nombre del usuario

    //Codigo
    const consulta = await getDocs(collection(db, "usuarios"));    //Hacemos la consulta
    let encontrado = false; //Si no lo ha encontrado sale false si es true es que lo ha encontrado

    consulta.forEach((result) =>   //Revisamos toda la consulta
    {

        if(result.data().usuario == usuario && encontrado == false)   //Si esta el usuario se realizan estas comprobaciones
        {

            if(result.data().recordTiradas > tiradas)  //Si ha hecho record
            {

                alert("Héroe, has establecido un récord de tiradas con "+tiradas+" tiradas");     //Muestra esto

                let actu = doc(db, "usuarios", result.id);  //Actualizamos datos

                updateDoc(actu,     
                {
                    
                    recordTiradas: tiradas,  //Actualizamos el recordTiradas
                    movimientos: movimientos,    //Actualizar los movimientos
                    fechaI: fechaI,     //Actualizamos fecha inicio
                    fechaF: fechaF      //Actualizamos fecha fin
                
                });
                
            }
            else    //Sino
            {

                alert("Récord no superado, el actual récord es "+result.data().recordTiradas);      //Muestra esto

            }

            encontrado = true; //Rompemos el forEach

        }   
    
    });

    if(encontrado == false) //Si no lo ha encntrado
    {

        guardarDatosPartida(tiradas, movimientos, fechaI, fechaF);  //Añadimos si no lo hemos encontrado

    }

    setTimeout(() =>    //Despues de 5 segundos se actualizara la pagina y volveremos al inicio de sesion
    {

        location.reload();  //Se actualizara la pagina

    },5000);    //Despues de 5 segundos

}


function guardarDatosPartida(tiradas, movimientos, fechaI, fechaF)    //Añadimos a la base de datos la informacion de la partida
{

    //Variables
    let usuario = sessionStorage.getItem("usuario");    //Guardamos en esta variable el nombre del usuario

    //Codigo
    try     //Realizamos control de errores
    {

        alert("Héroe, has establecido un récord de tiradas con "+tiradas+" tiradas"); 
        addDoc(collection(db, "usuarios"),  //Añadimos los valores a la base de datos
        {

            usuario: usuario,
            fechaI: fechaI,
            fechaF: fechaF,
            recordTiradas: tiradas,
            movimientos: movimientos
        
        });

    } 
    catch (err)     //Si hay un error
    {   
    
        console.error("Error añadiendo los datos: ", err);  //Mostrara el error desde la consola
    
    }

}

    //Exportamos las funciones
export{     

  inicioSesion,
  usuarioRegistro,
  guardarDatosPartida,
  record,

}