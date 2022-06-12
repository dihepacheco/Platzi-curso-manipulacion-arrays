//Find es muy similar al método filter pero este solo retorna un objeto que cumpla con la condicional. me lo devuelve directamente no en un array como filter.


const numbers  = [1,30,49,29,10,13];

//con For

let rta = undefined;
for (let index = 0; index < numbers.length; index++){
    const element = numbers[index];
    if(element === 30) {
        rta = element;
        break;
    }
}
console.log('for', rta);

//con find

const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);

const rta4 = products.findIndex(item => item.id === '🍔') // findIndex devuelve en que posicion se encuentra el elemento
console.log('find', rta4);