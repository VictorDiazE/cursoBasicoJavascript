
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celuar", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},

    
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 
});

articulosFiltrados

// otro metodo 

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celuar", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},

    
];

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre

});
