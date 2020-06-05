//Piedra Papel o Tijeras Switches
var jugador = prompt("Juega Piedra papel o tijera vs la PC\nElige tu jugada:", "");
var jugada = ["piedra","papel","tijera"];
function pcJugada(max){
    return Math.floor(Math.random() * Math.floor(max));
}
// toLowerCase()
var pcChoice= pcJugada(3);
var jugadorChoice= jugador.toLowerCase();

switch (jugadorChoice){
    case "piedra": 
    if (pcChoice === 0){
        console.log("es un empate");
    }
    else if (pcChoice === 1){
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Perdiste.");
    }
    else {
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Enhorabuena, has ganado!");
    }
    break;
    
    case "papel": 
    if (pcChoice === 1){
        console.log("es un empate");
    }
    else if (pcChoice === 2){
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Perdiste.");
    }
    else {
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Enhorabuena, has ganado!");
    }
    break;
    
    case "tijera": 
    if (pcChoice === 2){
        console.log("es un empate");
    }
    else if (pcChoice === 0){
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Perdiste.");
    }
    else {
        console.log("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Enhorabuena, has ganado!");
    }
    break;
    
}




