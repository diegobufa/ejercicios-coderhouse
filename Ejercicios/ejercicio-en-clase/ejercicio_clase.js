let adivinar_numero = prompt("Quieres jugar un juego de adivinar que numero estoy pensando?");


     if (adivinar_numero === "si"|| adivinar_numero === "SI" || adivinar_numero ==="Si"){

         let miNumero= parseInt(prompt ("Adivina que numero estoy pensado del 1 al 20?"));

         if (miNumero === 16) {
            alert("Felicitaciones has adivinado el numero");
         } 
         else {
            alert("No has adivinado el numero");
         }
     }
     else if (adivinar_numero === "no" || adivinar_numero === "NO"|| adivinar_numero === "No"){
            alert ("Gracias por haber querido jugar");
     }
     else {
            alert("Fin del juego");
     };

     

