/*
Ejercicio 1 :

Solicitar al usuario un (1) un número y un (1) texto. 
Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

*/
/*
let numero = parseInt(prompt ("Necesito un numero de las veces que vas a repetir el texto"));
let texto = prompt("Que texto vas a repetir");

for (let i = 0; i < numero; i++){
   console.log(texto);
}
*/

/*
let numero2 = parseInt(prompt("Numero"));
let mensaje = prompt("Mensaje");

for (let mensajeOculto = 1; mensajeOculto <= numero2; mensajeOculto++){

    console.log(mensaje);
}
*/
// Utilize un ciclo for para repetir hasta llegar a ser menor igual al numero que pedi de repeticiones, para luego mostrar por consola ese mensaje.

/*
Ejercicio 2:

Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta 
con el mensaje “lado” en cada repetición. 
Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

*/
/*
let numeroUsuario = parseInt(prompt("Dime un numero de repeticiones"));

for ( let i = 0; i < numeroUsuario; i++){
    if ( numeroUsuario > 4) {
        break;
    }
    else{
        alert("lado");

    }

}

*/

/*

Ejercicio 3:

Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados.

*/
/*
let alumnos = " ";
for ( let i = 0; i < 10; i++){
    alumnos += prompt("Nombre alumno" + "\n");
}

alert(alumnos);
*/
/*

Ejercicio 4:

Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados.

*/
/*
let nombres = prompt("Debes ingresar nombres hasta que adivines el nombre del villano?");
let ingresados = " ";

while ( nombres != "voldemort"){
    ingresados += nombres + "\n";
    nombres = prompt ("Ingresa otro nombre");
} 

alert (ingresados);
*/


let ingresados = " ";

do (ingresados == "voldemort"{
    alert ("Era el nombre del villano")
    
}while (nombres != "voldemort"){
    ingresados += nombres + "\n";
    nombres = prompt("Ingresa otro nombre");
}
alert (ingresados);

