//Es lo opuesto a Some . Todos los elementos deben cumplir con la condición y rtornara un true o un false
const numbers = [1,30,49,29,10,13];

const respuesta = numbers.every(item => item <= 40)
console.log(respuesta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const respuesta2 = team.every(age => age <= 15 )
  console.log(respuesta2);

  