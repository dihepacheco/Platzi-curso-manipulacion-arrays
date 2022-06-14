//Para manipular arrays que tienen otros arrays dentro y volverlo un array único
// no importa cuantos niveles haya 
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

const rta = matriz.flat();
console.log(rta);

