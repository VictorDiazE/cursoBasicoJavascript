//Recorriendo Arrays con .find(), .forEach() y .some()
//Metodo .find(), devuelve un array nuevo 
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celuar", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}

    
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

/// Metodo forEach(), no devuelve un array nuevo 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);

});


//Metodo some(); para validar verdadero o falso 
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

