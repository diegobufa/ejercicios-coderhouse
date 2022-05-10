/*
Ejercicio 1:

Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
*/
/*
let nombre = prompt("Cual es tu nombre?").toLowerCase();

if (nombre === "diego"){
    alert ("Fui yo");
}
else {
    alert("Yo No Fui");
};
*/
/* 
Ejercicio 2:

Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

*/
/*
let tecla = prompt("Elije una tecla del teclado?");

if (tecla === "y" && tecla === "Y"){

    alert("Correcto");
}
else {

    alert("Error");
}
*/
/*
Ejercicio 3:

Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.

*/
/*
let numeroUsuario = parseInt (prompt ("Elije un numero?"));

if (numeroUsuario === 1){
    
    alert ("Elejiste a Homero");
}
else if (numeroUsuario === 2){
    alert ("Elejiste a Marge");
}
else if (numeroUsuario === 3){
    alert ("Elejiste a Bart");
}
else if ( numeroUsuario === 4){
    alert ("Elejiste a Lisa");
}
else {
    alert ("No has elejido un personaje");
}
*/
/*
Ejercicio 4:

Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.

*/
/*
let numeroUsuario = parseInt( prompt ("Elejie un numero?"));

if (numeroUsuario >= 0 && numeroUsuario <= 1000){
    alert ("Presupuesto Bajo");
}
else if (numeroUsuario > 1000 && numeroUsuario <= 3000){
    alert ("Presupuesto Medio");
}
else if (numeroUsuario > 3000){
    alert ("Presupuesto Alto");
}
*/

/*
Ejercicio 5:

Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta 
por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
*/

let carritoAlmacen = prompt("Puedes cargar cuatro productos del almacen?");

