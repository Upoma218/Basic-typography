"use strict";
const crush1 = {
    name: "Imu",
    age: 35,
    profession: "engineer",
    address: "Mymensingh"
};
const crush2 = {
    name: "Imran",
    age: 34,
    profession: "researcher",
    address: "Singapur"
};
const crush3 = {
    name: "Ujjol",
    age: 36,
    profession: "entrepreneur",
    address: "Bangladesh"
};
const isMarried = false;
const crushName = 'Imran';
const calculate = (number1, /* 20 */ number2, /* 10 */ operation) => {
    return operation(number1, number2);
};
calculate(20, 10, (x, y) => x + y);
calculate(20, 10, (x, y) => x - y);
calculate(20, 10, (x, y) => x * y);
calculate(20, 10, (x, y) => x / y);
