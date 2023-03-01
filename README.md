# TRABAJO_2-EVALUACION de Sendoa Aldama Ramos

Este proyecto consiste en un juego de tablero con un dado 3D.

Este juego esta formado por:

  - Tablero (Un array bidimensional): Este array bidimensional es el tablero, esta formado por un 10x10. El inicio del este tablero siempre es el 0.0 del array y el final del    tabelro sera el 9.9 del array. (Los arrays siempre empiezan por 0, por eso se cuentan 10, es del 0 al 9).
  
  - Un dado 3D: Este dado tiene un evento de click, al ser pulsado el evento hace que mediante un metodo se genere un numero aleatorio entre el 1 y el 6 (las caras de un dado convencional). Cuando se genera el numero, se almacena en una variable que nos indicara en que posicion tiene que quedarse el dado, si sale 1 pues la animacion que tenemos asignada hara que se mueva el dado como si se mezclara y cuando pare se le asignara una id con la referencia de que traslacion tiene que tener para que se muestre el 1, en este caso la traslacion seria de 0 ya que es la cara que siempre se tiene que mostrar al principio del juego y es la que sale por defecto. En el codigo sale como esta creado y mostrado, pero principalmente esta creado por aside y canvas.
  
  - Incio de sesion: En el inicio de sesion podremos iniciar sesion con las cuentas que hayamos registrado en el registro. Si el usuario o contraseña es incorrecto se limpiaran los input y se mostrara la animacion de error. Cuando el usuario ponga bien sus datos, se bloquearan los inputs donde se introduce la cuenta y la contraseña para que ya no se puedan editar y se generara abajo donde esta el boton de iniciar sesion y de regitro el boton de jugar, este cuando sea pulsado nos enviara al tablero del que ya hemos hablado.
  
  - Registro: Cuando pulsemos en el inicio de sesion que es lo primero que se va a mostrar en el proyecto el boton de registrarse, nos cargara esta sección. En ella lo que se mostrara es una alerta en la parte superior indicando de que tiene que ser un correo bien formado y una contraseña formada por 6 caracteres, si cuando nos intentemos registrar no cumplimos los siguientes miniomos, nos mostrara una alerta diciendo que nos falta de cumplir y nos limpiara los inputs para que volvamos a escrribir de nuevo todo. Si es correcto nos registrara y nos mandara al inicio de sesion.
