//usar reduce con el objetivo que te diga cuantos elementos encontro

const items = [1,3,2,3,3,1,10];

const respuesta = items.reduce ((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta);

const data = [
    {
        name: "Diana",
        level: "hight",
    },
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "medium",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Sergio",
        level: "hight",
    },
];

const respuesta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(respuesta1);