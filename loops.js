// LOOPS: FOR Y FOR OF
var estudiantes = ["Maria", "Diego", "Miguel", "Rosalia"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Otra practica con FOR OF  

var estudiantes = ["Maria", "Diego", "Miguel", "Rosalia"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
