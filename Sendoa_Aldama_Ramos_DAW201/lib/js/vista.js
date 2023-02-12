`use-strict`;

import * as controlador from './controlador.js';     //Importamos el js controlador que tendra el funcionamiento de la base de datos en el inicio de sesion, registro y alamcenar los lanzamientos de dados y movimientos

                                                        //Inicio de sesion
function sesion()  //Estructura del inicio de sesion
{

    //Imagen de fondo
    document.getElementsByTagName("body")[0].background = "./lib/img/inicio.jpg";

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

    if(document.getElementById("contenedor"))
    {

        document.getElementById("contenedor").remove()

        setTimeout(function()
        {

            document.getElementsByTagName("body")[0].appendChild(contenedor);

        },0);

    }
    else
    {

        document.getElementsByTagName("body")[0].appendChild(contenedor);

    }

    contenedor.appendChild(contenedorInicio);

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
    contenedorBotones.appendChild(jugar);
    contenedorBotones.appendChild(registrar);
    contenedorInicio.appendChild(contenedorBotones);

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


        setTimeout(() =>
        {

            alert("El correo debe ser correcto y la contraseña un numero de 6 caracteres");

        },50);

        //Se añade un evento al boton resistrarme
        document.getElementById("registrarme").addEventListener("click", (evento) =>    //Si le pulsa se registrara el usuario con los datos indicados
        {

            controlador.usuarioRegistro();  //Registramos el usuario

        });

        document.getElementById("registrarme").addEventListener("keyup", (evento) => //Si presiona enter dentro del input contra
        {
    
            if(evento.key == "Enter")   //Si pulsa el boton Enter
            {
    
                controlador.usuarioRegistro();     //Iniciamos sesion
    
            }
    
        });

    });

}


                                                //Registro
function registro()
{

    //Imagen de fondo
    document.getElementsByTagName("body")[0].background = "./lib/img/registro.jpg";

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
    document.getElementsByTagName("body")[0].background = "./lib/img/juego.png";

    //Variables
    let contenedor = document.createElement("div");
    contenedor.id = "contenedor";

    let contenedorTabla = document.createElement("div");    //Div donde va a estar el tablero
    contenedorTabla.id = "contenedor-tabla";

    let tablero = document.createElement("table");  //Tabla del tablero
    tablero.id = "tablero";

    let divDado = document.createElement("div");    //Donde aparece el dado
    divDado.id = "contenedor-dado";

    let tirado = false; //Si esta en false no se puede mover hasta que lance el dado
                        //Si esta en true se puede mover porque ha pulsado al dado
    
    let dado = document.createElement("button");    //!Aparicion del dado
    let textoDado = document.createTextNode("Dado");    //!Texto del dado
    dado.appendChild(textoDado);    //!Añadimos texto
    dado.id = "dado";

    let numero = document.createElement("p");   //!Para añadir luego el numero que sale el dado (Temporal)
    numero.id = "numeroDado";
    numero.appendChild(document.createTextNode("Aqui sale el numero")); //!

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

        let tr = document.createElement("tr");

        for(let j = 0; j < 10; j++)
        {

            let td = document.createElement("td");
            td.setAttribute("punto", i+"."+j);  //Como se van a llamar los puntos para saber cuales son

            tr.appendChild(td); //Se añaden los cuadros

        }

        tablero.appendChild(tr);    //Se añaden

    }

    setTimeout(() =>
    {

        document.getElementsByTagName("body")[0].appendChild(contenedor);

    },1);

    contenedor.appendChild(contenedorTabla);  //Añadimos el contenedor de la tabla

    contenedorTabla.appendChild(tablero);   //Añadimos el tablero
    contenedorTabla.appendChild(divDado);  //Añadimos el contenedor del dado

    divDado.appendChild(dado);  //Añadimos el dado "En este caso va a ser un boton"
    divDado.appendChild(numero);    //Añadimos donde se muestra luego el numero

    tablero.firstChild.firstChild.id = "inicio";
    tablero.firstChild.firstChild.appendChild(img); //Añadimos la imagen en el principi del tablero

    tablero.lastChild.lastChild.id = "fin";

    dado.addEventListener("click", (evento) => //Efecto al pulsar el dado
    {

        if(tirado == false) //Si puede tirar porque no ha lanzado o esta en otro turno
        {

            tirado = true;

            numeroMovimiento = numeroDado();    //Sacar numero del dado

            numero.removeChild(numero.firstChild);
    
            numero.appendChild(document.createTextNode(numeroMovimiento));
    
            if(!pintar(numeroMovimiento, tablero))  //Para saber si tiene o no casillas
            {

                tirado = false;

            }

            contadorTiradas++;

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
                if(movimiento(tablero, tablero.getElementsByTagName("td"), i, img, contadorMovimientos, contadorTiradas))   //Mandamos los valores para comprobar si gana o no
                {

                    limpiar(tablero);   //Limpiamos las marcas del tablero
                    tirado = true;

                }
                else
                {
                    
                    limpiar(tablero);   //Limpiamos las marcas del tablero
                    tirado = false;

                }

            }

        });

    }

}

function movimiento(tablero, recuadro, numero, img, contadorMovimientos, contadorTiradas) //Movimiento del personaje entre los cuadrados
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

        },0);

        return true;    //Para que no pueda usar mas el dado

    }

    return false;   //Para que pueda usar el dado

}

function posibilidades(casillaClick)    //Comprobar si puede ir ahi
{

    if(casillaClick.classList.contains("marca") || casillaClick.style.backgroundColor == "red")    //Si lo tiene puede hacer la accion
    {

        return true;    //Puede

    }
    else
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

    let haySitio = false;

    //Codigo
    for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
    {

        for(let j = 0; j < tablero.childNodes[i].childElementCount; j++)    //Recorremos el tablero
        {

            if(tablero.childNodes[i].childNodes[j].childElementCount != 0)
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

        alert("No hay ninguna casilla a la que puedes desplazarte, tira de nuevo los dados");   //Le sacamos esto si no puede moverse
        return false;   //No moverse porque no tiene casillas

    }

}

function limpiar(tablero)   //Limpiamos el tablero
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

    return Math.floor(Math.random() * 6)+1;

}

    //Exportamos funciones
export{

    tablero,
    sesion,
    registro,

};