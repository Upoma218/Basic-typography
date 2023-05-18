"use strict";
// Arrow function
const crateArray = (param) => {
    return [param];
};
const crateArray1 = (param) => {
    return [param];
};
const crateArray2 = (param1, param2) => {
    return [param1, param2];
};
function crateArray3(param1, param2) {
    return [param1, param2];
}
const result = crateArray('Bangladesh');
const result1 = crateArray1('Bangladesh');
const result2 = crateArray1(true);
const result3 = crateArray1({ name: "Upoma" });
const result4 = crateArray2({ name: "Upoma" }, {
    name: "Upoma",
    age: 20
});
// spread operator
// const newData = {...myInfo, love}
const getEngaged = (myInfo) => {
    const love = 'Ujjol';
    const newData = Object.assign(Object.assign({}, myInfo), { love });
    return newData;
};
const myInfo = {
    name: 'Upoma',
    age: 20,
    role: "developer"
};
const result5 = getEngaged(myInfo);
