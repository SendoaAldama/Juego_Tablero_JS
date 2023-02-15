`use-strict`;

/*
    Creamos la constante firebaseConfig para almacenar las referencias a nuestro proyecto de firebase donde tenemos la autenticacion,
    el insertar datos...
*/
const firebaseConfig =  
{

    apiKey: "AIzaSyCv5Ja6c0oE1wDlA1y2Y6bL2n0zduEOQHg",
    authDomain: "sendoajuego.firebaseapp.com",
    projectId: "sendoajuego",
    storageBucket: "sendoajuego.appspot.com",
    messagingSenderId: "537520607250",
    appId: "1:537520607250:web:5b68ffc63995ed452948cb",
    measurementId: "G-CJX9X2NGGT"

};

//Exportamos la constante para usarla en otro js
export{ 

    firebaseConfig,

}