//Nos sirve para seleccionar y/o limpiar datos, con los que quiero trabajar - map es inmutable

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Diana',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
console.log('original', orders);

/* const respuesta = orders.map(item => item.total)
console.log('respuesta', respuesta);

const respuesta2 = orders.map(item => {
    item.tax = .19;
    return item;
})
console.log('respuesta2', respuesta2);
console.log('original', orders); */

//Esta seria la forma para trabajar con objetos y map a la vez, no copiar la ref en memoria sino crear una nueva
//Mismo numero de elementos los transformamos de objetos a número de obj a obj ....

const respuesta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log('respuesta3', respuesta3);
console.log('original', orders);