//Reduce agarra un array y lo reduce a un solo valor, no devuelve otro array. Se usa mucho para hacer calculos

const totals = [1,2,3,4];

//Haciendolo con un for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log(sum);

const respuesta = totals.reduce((sum, element) => sum + element, 0)
console.log('respuesta', respuesta);