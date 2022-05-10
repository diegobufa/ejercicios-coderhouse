/* Variables */
let cursoAula = parseInt(prompt("Indique cuantos alumnos va a registrar en el registro? "));
let edadAlumnos;
let sala4 = 0;
let sala5 = 0;
let primerGrado = 0;
let superoLaEdad = 0;
let n;

/* For y Condicionales*/
for(n = 1; n <= cursoAula; n++){
    edadAlumnos = parseInt(prompt("Ingrese la edad del alumno? " +  n));
       
    if (edadAlumnos <= 4){
        sala4++;
        alert("Te corresponde la sala de 4 del jardin");
    }
    else if (edadAlumnos == 5) {
        sala5++;
        alert("Te corresponde ir a la  sala de 5 del jardin");

    }
    else if(edadAlumnos ==6 || edadAlumnos == 7){
        primerGrado++;
        alert("Felicitaciones! Puedes comenzar el primer grado");
    }
    else {
        superoLaEdad++;
        alert("La edad ha superado la del nivel de grado")
    }
}

let totalInscriptos = sala4 + sala5 + primerGrado;
/*Mensaje final de salida*/


alert("La cantidad de alumnos anotados en sala de 4 fueron: " + sala4 +" " + " Alumnos");
alert("La cantidad de alumnos anotados en sala de 5 fueron: " + sala5 +" " + " Alumnos")  ;
alert("La cantidad de alumnos anotados en primer Grado fueron: " + primerGrado +" " + " Alumnos");
alert("La cantidad de alumnos que superaron la edad para anotarse fueron: " + superoLaEdad);
alert("La cantidad de alumos que se pudieron inscribir fueron: " + totalInscriptos);
