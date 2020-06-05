//Piedra Papel o Tijeras  If ELseIf Else 
var jugador = prompt("Juega Piedra papel o tijera vs la PC\nElige tu jugada:", "");
var jugada = ["piedra","papel","tijera"];
function pcJugada(max){
    return Math.floor(Math.random() * Math.floor(max));
}
// toLowerCase()
var pcChoice= pcJugada(3);
var jugadorChoice= jugador.toLowerCase();
if ( jugadorChoice === "tijera" && pcChoice === 0 || jugadorChoice === "papel" && pcChoice === 2 || jugadorChoice === "piedra" && pcChoice === 1){
    alert("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Perdiste." );
}
else if( jugadorChoice === "tijera" && pcChoice === 1 || jugadorChoice === "papel" && pcChoice === 0 || jugadorChoice === "piedra" && pcChoice === 2){
    alert("\nEscogiste " + jugador + " y la pc escogió " + jugada[pcChoice] + ", Enhorabuena has ganado !!." );
}
else {
    alert("Ha sido un empate.")
}



