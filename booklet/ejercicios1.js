/*
Actividad 1 Homero:

Crear tres (3) variables para asignar el nombre, apellido y edad de Homero,
respectivamente. Es indistinto el empleo de var o let en la declaracion.
*/

let nombre =    "Homero";
let apellido =  "Simpsons";
let edad=       39;

console.log(nombre);
console.log(apellido);
console.log(edad);



/*Actividad 2 Ciudades:

Crear cinco (5) variables constantes, asignado a cada una de ellas diferentes nombres de 
ciudades. Generalmente, dichas variables se declaran con const.

*/

const ciudad1 = "Springfield";
const ciudad2 = "Shelviville";
const ciudad3 = "Nueva York";
const ciudad4 = "Paris";
const ciudad5 = "Chicago";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

/*Actividad 3 Carnet:

Declarar variables para representar la informacion de un carnet de conducir.
Luego, concateneralas y asignar el resultado de la operacion a una variable
denominada carnet.
*/

let persona = "Bart Simpsons";
let domicilio = "Evergreen terr 742";
let ciudad = " Springfield"
let pais =     "USA";
let fecha_nacimiento = "02/11/70";
let sexo_conductor = "M";
let altura_conductor = "4'0";
let color_ojos = "BL";
let peso_conductor = 85;
let codigo = "B47U89RE243"

let carnet = "codigo: " + codigo + " " +
              "Nombre: " + persona +  " " +
             "Domicilio: " + domicilio + " "  + ciudad + " "  + pais + " " +
             "Fecha Nacimiento: " + fecha_nacimiento + " " +
             "Altura  y Peso: " + altura_conductor + " " + peso_conductor + " "+
             "Color de Ojos: " + color_ojos;

console.log(carnet);

/*
Actividad 4 
Registro de personas:

Solicitar al usuario cinco (5) nombres pertenecientes
a integrantes de una familia. Luego, concatenar dichas entradas y efectuar
una salida por alerta.
*/

let nombre1 = prompt("Necesito que escribas los nombres de un integrante de la familia simpsons?");
let nombre2 = prompt("Necesito que escribas los nombres de un  integrante de la familia simpsons?");
let nombre3 = prompt("Necesito que escribas los nombres de un integrante de la familia simpsons?");
let nombre4 = prompt("Necesito que escribas los nombres de un integrante de la familia simpsons?");
let nombre5 = prompt("Necesito que escribas los nombres de un  integrante de la familia simpsons?");

let resultado = alert("Los integrantes de la familia simpsons son: " + nombre1 + ", " + nombre2 + ", " + nombre3 + ", " + nombre4 + " " + " y " + nombre5);



/*
Actividad 5
Descuentos:

Solicitar al usuario uno o mas precios.

Luego,efectuar un descuento en porcentajes (20%, 30%,etc) sobre los valores ingresados, y realizar una salilda.

*/

let articulo = parseInt(prompt("Necesito que me pases el precio de un articulo para poder aplicarle  un descuento"));

let descuento_20 = articulo - (articulo * 0.2);
let descuento_30 = articulo - (articulo * 0.3);

let resultado_descuento = alert (" El articulo que me pasaste si le haces el 20% de descuento te queda en: " +"$"+  descuento_20 + " " + " y si le descontamos el 30% te queda en: " + "$" + descuento_30);




