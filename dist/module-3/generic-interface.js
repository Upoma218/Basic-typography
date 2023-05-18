"use strict";
// Generic interface
const myCrush1 = {
    name: "Ujjol",
    wife: true,
    baby: "Upol"
};
const myCrush2 = {
    name: "Ujjol",
    wife: "Upoma"
};
const myCrush3 = {
    name: "Ujjol",
    wife: {
        name: 'Ujjol',
        age: 35
    }
};
const myCrush4 = {
    name: "Ujjol",
    wife: {
        name: 'Ujjol',
        age: 35
    },
    baby: {
        name: 'Upol',
        age: 5
    }
};
const relation = ['Upoma', 'Ujjol'];
//RelationWithSalary = string
const relationWithSalary = [
    {
        name: 'Upoma',
        salary: 100000
    },
    'Ujjol'
];
const relationWithSalary2 = [
    {
        name: 'Upoma',
        salary: 100000
    },
    'Ujjol'
];
const money = [23, 46, 42, 34];
const money1 = ['23', '46', '42', '34'];
// or
// "<>"-these brackets are called angel brackets
const money2 = [23, 46, 42, 34];
const money3 = ['23', '46', '42', '34'];
const money4 = [true, false];
const fruitsNameAndPrice = [
    {
        name: "mango",
        price: 100
    },
    {
        name: "banana",
        price: 120
    },
];
