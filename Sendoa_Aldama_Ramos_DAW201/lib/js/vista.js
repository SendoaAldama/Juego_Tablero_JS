`use-strict`;

import * as controlador from './controlador.js';     //Importamos el js controlador que tendra el funcionamiento de la base de datos en el inicio de sesion, registro y alamcenar los lanzamientos de dados y movimientos

                                                        //Inicio de sesion
function sesion()  //Estructura del inicio de sesion
{

    //Imagen de fondo
    document.getElementsByTagName("body")[0].background = "./lib/img/inicio.jpg";    //Añadimos la imagen de fondo de inicio

    //Variables
    let contenedor = document.createElement("div"); //Contenedor con el display flex
    contenedor.id = "contenedor";

    let contenedorInicio = document.createElement("div");   //Contenedor del inicio de sesion
    contenedorInicio.id = "contenedor-inicio";

    let contenedorBotones = document.createElement("div");  //Contenedor de los botones
    contenedorBotones.id = "contenedor-botones";

    let h1 = document.createElement("h1");  //H1 del inicio de sesion
    h1.id = "titulo-inicio";
    h1.appendChild(document.createTextNode("Inicio de sesion"));    //Añadimos texto

    let label1 = document.createElement("label");   //Label nombre
    label1.appendChild(document.createTextNode("Correo:"));

    let label2 = document.createElement("label");   //Label contra
    label2.appendChild(document.createTextNode("Contraseña:"));

    let nombre = document.createElement("input");   //Input del correo del usuario
    nombre.type = "text";
    nombre.id = "usuario-inicio";
    nombre.name = "usuario-inicio";
    nombre.placeholder = "Indica tu correo";

    let contra = document.createElement("input");   //Input del contraseña del usuario
    contra.type = "password";
    contra.id = "contra-inicio";
    contra.name = "contra-inicio";

        //Botones
    let jugar = document.createElement("button");   //Boton de jugar
    jugar.id = "jugar";
    jugar.appendChild(document.createTextNode("Iniciar Sesion"));

    let registrar = document.createElement("button");   //Boton de registrarse
    registrar.id = "registrar";
    registrar.appendChild(document.createTextNode("Registrarme"));

    //Codigo
    if(document.getElementById("contenedor"))   //Si existe
    {

        document.getElementById("contenedor").remove()  //Lo borramos

        setTimeout(function()   //Esperamos 0ms
        {

            document.getElementsByTagName("body")[0].appendChild(contenedor);   //Lo volvemos a crear

        },0);

    }
    else    //Sino
    {

        document.getElementsByTagName("body")[0].appendChild(contenedor);   //Lo creamos

    }

    contenedor.appendChild(contenedorInicio);   //Añadimos el contenedor de inicio en contenedor para mostrar todo el contenido

        //Añadimos el contenido dentro dde contenedor inicios
    contenedorInicio.appendChild(h1);
    contenedorInicio.appendChild(document.createElement("br"));
    contenedorInicio.appendChild(label1);
    contenedorInicio.appendChild(document.createElement("br"));
    contenedorInicio.appendChild(nombre);
    contenedorInicio.appendChild(document.createElement("br"));
    contenedorInicio.appendChild(label2);
    contenedorInicio.appendChild(document.createElement("br"));
    contenedorInicio.appendChild(contra);
    contenedorInicio.appendChild(document.createElement("br"));
    contenedorInicio.appendChild(contenedorBotones);

        //Añadimos el contenido a contenedor de botones
    contenedorBotones.appendChild(jugar);
    contenedorBotones.appendChild(registrar);

        //Evento de los botones
    jugar.addEventListener("click", (evento) => //Si pulsa el boton iniciar sesion
    {

        controlador.inicioSesion();     //Iniciamos sesion

    });

    contra.addEventListener("keyup", (evento) => //Si presiona enter dentro del input contra
    {

        if(evento.key == "Enter")   //Si pulsa el boton Enter
        {

            controlador.inicioSesion();     //Iniciamos sesion

        }

    });

    registrar.addEventListener("click", (evento) =>     //Si pulsa registrarse, nos cargara el menu de registro
    {

        registro();   //Carga la pagina de registro


        setTimeout(() =>    //Despues de 50 milisegundos
        {

            alert("El correo debe ser correcto y la contraseña un numero de 6 caracteres"); //Muestra cuando sale

        },50);

        //Se añade un evento al boton resistrarme
        document.getElementById("registrarme").addEventListener("click", (evento) =>    //Si le pulsa se registrara el usuario con los datos indicados
        {

            controlador.usuarioRegistro();  //Registramos el usuario

        });

        document.getElementById("contra-registro").addEventListener("keyup", (evento) => //Si presiona enter dentro del input contra
        {
    
            if(evento.key == "Enter")   //Si pulsa el boton Enter
            {
    
                document.getElementById("registrarme").click(); //Hace la funcion del click de registrarme
    
            }
    
        });

    });

}


                                                //Registro
function registro()
{

    //Imagen de fondo
    document.getElementsByTagName("body")[0].background = "./lib/img/registro.jpg";    //Añadimos la imagen de fondo de registro

    //Variables
    let contenedor = document.getElementById("contenedor");

    let contenedorRegistro = document.createElement("div");   //Contenedor del registro
    contenedorRegistro.id = "contenedor-registro";

    let contenedorBotones = document.createElement("div");  //Contenedor de los botones
    contenedorBotones.id = "contenedor-botones";

        //h1 de registro
    let h1 = document.createElement("h1");  //H1 del registro
    h1.id = "titulo-registro";
    h1.appendChild(document.createTextNode("Registro"));    //Añadimos texto 

        //Labels de registro
    let label1 = document.createElement("label");   //Label nombre
    label1.appendChild(document.createTextNode("Correo:"));

    let label2 = document.createElement("label");   //Label contra
    label2.appendChild(document.createTextNode("Contraseña:"));

        //Inputs de resgistro
    let nombre = document.createElement("input");   //Input del correo del usuario
    nombre.type = "text";
    nombre.id = "usuario-registro";
    nombre.name = "usuario-registro";
    nombre.placeholder = "Indica tu correo";

    let contra = document.createElement("input");   //Input del contraseña del usuario
    contra.type = "password";
    contra.id = "contra-registro";
    contra.name = "contra-registro";
    
        //Botones de registro
    let iniciar = document.createElement("button");   //Boton de iniciar para volver a iniciar sesion
    iniciar.id = "iniciar";
    iniciar.appendChild(document.createTextNode("Iniciar Sesion"));

    let registrar = document.createElement("button");   //Boton de registrarse
    registrar.id = "registrarme";
    registrar.appendChild(document.createTextNode("Registrar"));

    //Codigo
    document.getElementById("contenedor-inicio").remove(); //Borramos el contenedor del inicio de sesion

    contenedor.appendChild(contenedorRegistro); //Añadimos el contenedor del registro
    
        //Añadimos el contenido del contenedor del registro
    contenedorRegistro.appendChild(h1);
    contenedorRegistro.appendChild(document.createElement("br"));
    contenedorRegistro.appendChild(label1);
    contenedorRegistro.appendChild(document.createElement("br"));
    contenedorRegistro.appendChild(nombre);
    contenedorRegistro.appendChild(document.createElement("br"));
    contenedorRegistro.appendChild(label2);
    contenedorRegistro.appendChild(document.createElement("br"));
    contenedorRegistro.appendChild(contra);
    contenedorRegistro.appendChild(document.createElement("br"));
    contenedorBotones.appendChild(registrar);
    contenedorBotones.appendChild(iniciar);
    contenedorRegistro.appendChild(contenedorBotones);

        //Eventos del menu de registro
    iniciar.addEventListener("click", (evento) =>   //Si pulsa iniciar sesion actualizara la pestaña e ira a el
    {

        sesion();

    });

}

                                                        //Tablero de juego
function tablero()  //Mostrar el tablero de juego y limpiamos la pagina
{

    //Imagen de fondo
    document.getElementsByTagName("body")[0].background = "./lib/img/juego.png";    //Añadimos la imagen de fondo de tablero

    //Variables
    let tiempoI = new Date();   //Captura de la fecha del sistema
    tiempoI = tiempoI.toLocaleString(); //Cogemos el tiempo actual enformato string del comento de la captura de la fecha del sistema

    let contenedor = document.createElement("div"); //Div que contendra el contenedor del tablero
    contenedor.id = "contenedor";

    let contenedorTabla = document.createElement("div");    //Div donde va a estar el tablero
    contenedorTabla.id = "contenedor-tabla";

    let tablero = document.createElement("table");  //Tabla del tablero
    tablero.id = "tablero";

    let divDado = document.createElement("div");    //Donde aparece el dado
    divDado.id = "contenedor-dado";

    let dado = document.createElement("div");    //Donde aparece el dado
    dado.id = "con-dado";

        //Sacamos le dado               
    crearDado(dado);

    let tirado = false; //Si esta en false no se puede mover hasta que lance el dado
                        //Si esta en true se puede mover porque ha pulsado al dado

    let numeroMovimiento;   //Donde se va a almacenar el numero que salga en el dado

    let img = document.createElement("img");    //Imagen del personaje
    img.id = "moni";
    img.src = './lib/img/moni.png';     //Imagen de referencia

    let contadorTiradas = 0;   //Contador de tiradas

    let contadorMovimientos = 0;    //Contador de movimientos

    //Codigo
    document.getElementById("contenedor").remove(); //Borramos el contenedor del inicio de sesion

    for(let i = 0; i < 10; i++) //Creación de los cuados del tablero
    {

        let tr = document.createElement("tr");  //Creamos los TR

        for(let j = 0; j < 10; j++) //Para generar 10 tds
        {

            let td = document.createElement("td");     //Creamos los TD
            td.setAttribute("punto", i+"."+j);  //Como se van a llamar los puntos para saber cuales son

            tr.appendChild(td); //Se añaden los cuadros

        }

        tablero.appendChild(tr);    //Se añaden

    }

    setTimeout(() =>    //Esperamos para que se añada el contenedor despues de 1ms
    {

        document.getElementsByTagName("body")[0].appendChild(contenedor);   //Añadimos el contenedor al body

    },1);

    contenedor.appendChild(contenedorTabla);  //Añadimos el contenedor de la tabla

    contenedorTabla.appendChild(tablero);   //Añadimos el tablero
    contenedorTabla.appendChild(divDado);  //Añadimos el contenedor del dado

    divDado.appendChild(dado);  //Añadimos el dado "En este caso va a ser un boton"

    tablero.firstChild.firstChild.id = "inicio";
    tablero.firstChild.firstChild.appendChild(img); //Añadimos la imagen en el principi del tablero

    tablero.lastChild.lastChild.id = "fin";

    divDado.addEventListener("click", (evento) => //Efecto al pulsar el dado
    {

        if(tirado == false) //Si puede tirar porque no ha lanzado o esta en otro turno
        {

            numeroMovimiento = numeroDado();    //Sacar numero del dado

            document.querySelector(".cubo3D").classList.add("animacion1");   //Añadimos la animacion de girar

            setTimeout((e) =>
            {

                document.querySelector(".cubo3D").classList.remove("animacion1");    //La quitamos

                if(!pintar(numeroMovimiento, tablero))  //Para saber si tiene o no casillas
                {
    
                    tirado = false;     //Para que pueda volver a tirar si no hay casillas
    
                }

            }, 500);   //Despues de 0.5s

            tirado = true;  //Si esta true no puede lanzar hasta que se mueva o se compruebe si no pude moverse

            contadorTiradas++;  //Sumamos uno mas al contador

        }

    });

    //Meter el evento de click en todos los td en los tableros
    for(let i = 0; i < tablero.getElementsByTagName("td").length; i++) //Recorremos todos los td del tablero
    {

        tablero.getElementsByTagName("td")[i].addEventListener("click", (evento) => //Si pulsa uno de los cuadros del tablero
        {

            if(posibilidades(tablero.getElementsByTagName("td")[i]))    //Comprobar si se puede mover el usuario, sino saltara un mensaje de alerta
            {
                
                contadorMovimientos++;  //Sumamos un movimiento

                //Movimiento a realizar
                if(movimiento(tablero, tablero.getElementsByTagName("td"), i, img, contadorMovimientos, contadorTiradas, tiempoI))   //Mandamos los valores para comprobar si gana o no
                {

                    limpiar(tablero);   //Limpiamos las marcas del tablero
                    tirado = true;      //Si esta true no puede volver a tirar el dado

                }
                else
                {
                    
                    limpiar(tablero);   //Limpiamos las marcas del tablero
                    tirado = false;     //Si esta falso puede volver a tirar el dado

                }

            }

        });

    }

}

function movimiento(tablero, recuadro, numero, img, contadorMovimientos, contadorTiradas, tiempoI) //Movimiento del personaje entre los cuadrados
{

    //Codigo
    for(let i = 0; i < tablero.childElementCount; i++)  //Buscamos la posicion de las marcas
    {

        for(let j = 0; j < tablero.childNodes[i].childElementCount; j++)    //Recorremos el tablero
        {

            tablero.childNodes[i].childNodes[j].classList.remove("marca");   //Quitamos las marcas

        }

    }

    recuadro[numero].appendChild(img);  //Se mueve el personaje a ese sitio

    if(recuadro[numero] == document.getElementById("fin")) //Si llega al final del mapa
    {

        tablero.lastChild.lastChild.style.removeProperty("background-color");   //Quitamos el color azul del fin

        setTimeout(function()   
        {

            alert("Enorabuena, Has echo "+contadorMovimientos+" movimientos y "+contadorTiradas+" tiradas 🙃");    //Si llega al final sale esto

            let tiempoF = new Date();   //Cogemos la fecha del mometo de ganar
            tiempoF = tiempoF.toLocaleString(); //Lo tranformamos a string

            controlador.record(contadorTiradas, contadorMovimientos, tiempoI, tiempoF);  //Les mandamos para que se guarden los valores y se efectuen las comprobaciones necesarias

        },0);

        return true;    //Para que no pueda usar mas el dado

    }

    return false;   //Para que pueda usar el dado

}

function posibilidades(casillaClick)    //Comprobar si puede ir a ese cuadrado
{

    if(casillaClick.classList.contains("marca") || casillaClick.style.backgroundColor == "red")    //Si lo tiene puede hacer la accion
    {

        return true;    //Puede

    }
    else    //Sino
    {

        return false;   //No puede

    }

}

function pintar(movimientos, tablero)   //Pintar el tablero por su posicion y el numero de movimientos
{

    //Variables
    let esta;   //Se almacena la posicion actual del personaje
    let posicionA;  //Separacion de puntos

    let fila;   //Fila actual
    let columna;    //Columna actual

    let haySitio = false;   //Para saber si hay algun sitio donde desplazarse

    //Codigo
    for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
    {

        for(let j = 0; j < tablero.childNodes[i].childElementCount; j++)    //Recorremos el tablero
        {

            if(tablero.childNodes[i].childNodes[j].childElementCount != 0)  //Si tiene hijos, en este caso el unico hijo que puede tener es el personaje
            {

                esta = tablero.childNodes[i].childNodes[j].getAttribute("punto");   //Almacenamos la posicion

            }

        }

    }

    posicionA = esta.split(".");    //Separacion
    fila = parseInt (posicionA[0]);    //Fila actual
    columna = parseInt (posicionA[1]);    //Columna actual

        //Posibilidades de movimiento
    if(fila + movimientos && tablero.childNodes[fila + movimientos])
    {

        tablero.childNodes[fila + movimientos].childNodes[columna].classList.add("marca");

        if(tablero.childNodes[fila + movimientos].childNodes[columna].id == "fin")
        {

            tablero.childNodes[fila + movimientos].childNodes[columna].style.backgroundColor = "red";

        }

    }
    if(fila - movimientos && fila - movimientos == 0 || tablero.childNodes[fila - movimientos])
    {

        tablero.childNodes[fila - movimientos].childNodes[columna].classList.add("marca");
        
        if(tablero.childNodes[fila - movimientos].childNodes[columna].id == "inicio")
        {

            tablero.childNodes[fila - movimientos].childNodes[columna].style.backgroundColor = "red";

        }

    }
    if(columna + movimientos && tablero.childNodes[fila].childNodes[columna + movimientos])
    {

        tablero.childNodes[fila].childNodes[columna + movimientos].classList.add("marca");

        if(tablero.childNodes[fila].childNodes[columna + movimientos].id == "fin")
        {

            tablero.childNodes[fila].childNodes[columna + movimientos].style.backgroundColor = "red";

        }

    }
    if(columna - movimientos && columna - movimientos == 0 || tablero.childNodes[fila].childNodes[columna - movimientos])
    {

        tablero.childNodes[fila].childNodes[columna - movimientos].classList.add("marca");

        if(tablero.childNodes[fila].childNodes[columna - movimientos].id == "inicio")
        {

            tablero.childNodes[fila].childNodes[columna - movimientos].style.backgroundColor = "red";

        }

    }

    for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
    {

        for(let j = 0; j < tablero.childNodes[i].childElementCount; j++)    //Recorremos el tablero
        {

            if(tablero.childNodes[i].childNodes[j].classList.contains("marca") || tablero.childNodes[i].childNodes[j].style.backgroundColor == "red")
            {

                haySitio = true;    //Si hay

            }

        }

    }

    if(haySitio == true)    //Si tiene casillas azules
    {

        return true;    //Puede moverse

    }
    else
    {

        setTimeout(() =>
        {

            alert("No hay ninguna casilla a la que puedes desplazarte, tira de nuevo los dados");   //Le sacamos esto si no puede moverse

        }, 600);    //Despues de 6 milisegundos

        return false;   //No moverse porque no tiene casillas

    }

}

function limpiar(tablero)   //Limpiamos el tablero quitando la clase marca y el background-color
{

    for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
    {

        for(let j = 0; j < tablero.childNodes[i].childElementCount; j++)    //Recorremos el tablero
        {

            tablero.childNodes[i].childNodes[j].classList.remove("marca");   //Almacenamos la posicion
            tablero.childNodes[i].childNodes[j].style.removeProperty("background-color");   //Borrar el color de fondo

        }

    }

}

function numeroDado() //Aqui se realizaria la animacion del movimiento... Y se manda el numero que haya salido en el dado
{

    //Variables
    let numero = Math.floor(Math.random() * 6)+1;
    let posicion = "cubo"+numero;

    //Codigo
    document.querySelector(".cubo3D").id = posicion;

    return numero; //Sacamos un numero del 1 al 6

}

function crearDado(contenedor) //Aqui se dibujara el dado por primera vez
{

    //Variables
        //Divs
            //Creacion de los Divs
    let espacio3D = document.createElement("div");
    let cubo3D = document.createElement("div");
    let base = document.createElement("div");

            //Asignacion de sus clases
    espacio3D.classList.add("espacio3D");
    cubo3D.classList.add("cubo3D");
    base.classList.add("base");

            //Añadir posicion inicial
    cubo3D.id = "cubo1";
        //Aside
            //Creacion de los aside
    let aside1 = document.createElement('aside');
    let aside2 = document.createElement('aside');
    let aside3 = document.createElement('aside');
    let aside4 = document.createElement('aside');
    let aside5 = document.createElement('aside');
    let aside6 = document.createElement('aside');
            //Asignacion de las clases
    aside1.classList.add("cara");
    aside2.classList.add("cara");
    aside3.classList.add("cara");
    aside4.classList.add("cara");
    aside5.classList.add("cara");
    aside6.classList.add("cara");

    aside1.classList.add("cara1");
    aside2.classList.add("cara2");
    aside3.classList.add("cara3");
    aside4.classList.add("cara4");
    aside5.classList.add("cara5");
    aside6.classList.add("cara6");

        //Canvas
            //Cracion de los canvas
    let canvas1 = document.createElement('canvas');
    let canvas2 = document.createElement('canvas');
    let canvas3 = document.createElement('canvas');
    let canvas4 = document.createElement('canvas');
    let canvas5 = document.createElement('canvas');
    let canvas6 = document.createElement('canvas');

            //Asignacion de sus divs
    canvas1.id = "dado1";
    canvas2.id = "dado2";
    canvas3.id = "dado3";
    canvas4.id = "dado4";
    canvas5.id = "dado5";
    canvas6.id = "dado6";

            //Asignacion de sus clases
    canvas1.classList.add("dado");
    canvas2.classList.add("dado");
    canvas3.classList.add("dado");
    canvas4.classList.add("dado");
    canvas5.classList.add("dado");
    canvas6.classList.add("dado");

            //Añadir estilos width
    canvas1.width = 300;
    canvas2.width = 300;
    canvas3.width = 300;
    canvas4.width = 300;
    canvas5.width = 300;
    canvas6.width = 300;

            //Añadir estilos height
    canvas1.height = 300;
    canvas2.height = 300;
    canvas3.height = 300;
    canvas4.height = 300;
    canvas5.height = 300;
    canvas6.height = 300;

    //Codigo
    if (canvas1.getContext){
        var ctx = canvas1.getContext("2d");
        var X = canvas1.width*0.5;
        var Y = canvas1.height*0.5;
        var r = canvas1.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas2.getContext){
        var ctx = canvas2.getContext("2d");
        var X = canvas2.width*0.25;
        var Y = canvas2.height/2;
        var r = canvas2.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas2.width*0.75;
        var Y = canvas2.height/2;
        var r = canvas2.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas3.getContext){
        var ctx = canvas3.getContext("2d");
        var X = canvas3.width*0.25;
        var Y = canvas3.height*0.25;
        var r = canvas3.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas3.width*0.5;
        var Y = canvas3.height/2;
        var r = canvas3.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas3.width*0.75;
        var Y = canvas3.height*0.75;
        var r = canvas3.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas4.getContext){
        var ctx = canvas4.getContext("2d");
        var X = canvas4.width*0.25;
        var Y = canvas4.height*0.25;
        var r = canvas4.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width*0.75;
        var Y = canvas4.height*0.25;
        var r = canvas4.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width*0.25;
        var Y = canvas4.height*0.75;
        var r = canvas4.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas4.width*0.75;
        var Y = canvas4.height*0.75;
        var r = canvas4.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas5.getContext){
        var ctx = canvas5.getContext("2d");
        var X = canvas5.width*0.25;
        var Y = canvas5.height*0.25;
        var r = canvas5.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width*0.75;
        var Y = canvas5.height*0.25;
        var r = canvas5.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width*0.25;
        var Y = canvas5.height*0.75;
        var r = canvas5.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width*0.75;
        var Y = canvas5.height*0.75;
        var r = canvas5.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas5.width*0.5;
        var Y = canvas5.height*0.5;
        var r = canvas5.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    if (canvas6.getContext){
        var ctx = canvas6.getContext("2d");
        var X = canvas6.width*0.25;
        var Y = canvas6.height*0.25;
        var r = canvas6.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width*0.75;
        var Y = canvas6.height*0.25;
        var r = canvas6.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width*0.25;
        var Y = canvas6.height*0.75;
        var r = canvas6.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width*0.75;
        var Y = canvas6.height*0.75;
        var r = canvas6.height/8;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width*0.5;
        var Y = canvas6.height*0.25;
        var r = canvas6.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        var X = canvas6.width*0.5;
        var Y = canvas6.height*0.75;
        var r = canvas6.height*0.125;
        ctx.beginPath();
        ctx.arc(X, Y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

        //Añadimos los canvas en sus aside
    aside1.appendChild(canvas1);
    aside2.appendChild(canvas2);
    aside3.appendChild(canvas3);
    aside4.appendChild(canvas4);
    aside5.appendChild(canvas5);
    aside6.appendChild(canvas6);

        //Añadimos los aside y la base a cubo3D
    cubo3D.appendChild(base);
    cubo3D.appendChild(aside1);
    cubo3D.appendChild(aside2);
    cubo3D.appendChild(aside3);
    cubo3D.appendChild(aside4);
    cubo3D.appendChild(aside5);
    cubo3D.appendChild(aside6);

        //Añadimos el cubo3D en espacio3D
    espacio3D.appendChild(cubo3D);

        //Lo añadimos en el contendor del div del boton
    contenedor.appendChild(espacio3D);

}


    //Exportamos funciones
export{

    tablero,
    sesion,
    registro,

};