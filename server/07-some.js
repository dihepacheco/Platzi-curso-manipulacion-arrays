//Nos dice si alguno de los elementos cumple con una condicional y nos retorna un true o false.

const numbers = [1,2,3,4];

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);

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

const rta3 = orders.some(item => item.delivered);
console.log('rta3', rta3);