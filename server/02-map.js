const letters = ['a','b', 'c'];

//Con for

/* const newArray =[];
for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + '++');
} */

//con map

const newArray = letters.map(item => item + '++');
console.log('Original', letters);
console.log('new', newArray);

