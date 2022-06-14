const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


const productIndex = products.findIndex(item => item.id === '🍔'); //findIndex busca la posicion
if (productIndex !== -1) {
    myProducts.push(products [productIndex]); //cambia el estado agregando
    products.splice(productIndex, 1); //esta quitando el elemento de un array
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update

const productsV2 = [
    { title: 'Pizza', price: 121, id: "🍕" },
    { title: 'Burger', price: 121, id: "🍔" },
    { title: 'Hot cakes', price: 121, id: "🥞" },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}


const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);