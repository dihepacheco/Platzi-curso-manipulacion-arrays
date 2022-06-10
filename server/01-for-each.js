//Este método nos sirve para hacer un recorrido de los elementos de un array
// usamos for each porque la sintaxis se acorta en vez de un for

const letters = ['a', 'b', 'c'];

//Con for

for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log('for', element);
}

//Con for each

letters.forEach(item => console.log('forEach', item))