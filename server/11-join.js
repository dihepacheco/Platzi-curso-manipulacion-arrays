//Es muy útil para unificar todo un array.

const elements = ["Fire", "Air", "Water"];

//Con for seria asi

let rtafinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++){
    const element = elements[index];
    rtafinal = rtafinal + element + separator;
}
console.log('for', rtafinal);

//Con joinpara unificar de acuerdo a un patrón
const rta = elements.join('--')
console.log('for', rta);

//Split para separar de acuerdo a un patrón

const title = 'Curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);