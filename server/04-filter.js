//ayuda a filtrar los elementos de un array con base a un  condicional , los elementos que cumplan esta condición van hacer parte de ese nuevo array - filter es mutable
// filter y map pueden trabajar juntos
// filter puede retornar un array con 0 elementos o menos elementos pero nunca de más.

const words = ['spray', 'limit', 'elite', 'exuberant'];

//Estas serian las líneas para hacer un filter en teoría
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6){
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

//Ahora como lo hariamos con el método propio de Javascript

const respuesta = words.filter(item => item.length >=6)
console.log('respuesta', respuesta);
console.log('original', words);


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
    {
        customerName: 'Nicolas',
        total: 120,
        delivered: false,
    },
];

const respuesta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('respuesta3', respuesta3);

//Tener en cuenta que si la base de datos tiene su propio lenguaje es mejor remitirse al lenguaje (mysql, mongo) y en ellos hacer los filtros en vez de usar filter

//Buscador con filter

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}
console.log(search('Nico'));