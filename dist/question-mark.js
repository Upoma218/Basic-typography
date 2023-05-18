"use strict";
var _a, _b;
// ternary operator
const age = 22;
/* if(age >= 18){
    console.log('Adult')
}
else{
    console.log("Not adult")
} */
const isAdult = age >= 18 ? 'yes' : "no";
console.log(isAdult);
// Nullish coalescing operator
// null and undefined
const isAuthenticateUser = "";
const userName = isAuthenticateUser !== null && isAuthenticateUser !== void 0 ? isAuthenticateUser : 'Guest1';
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest';
console.log(userName, userName2);
const person1 = {
    name: 'Upoma',
    age: 29,
    address: {
        city: 'Love city',
        road: 'Pain',
    }
};
const home = (_b = (_a = person1 === null || person1 === void 0 ? void 0 : person1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log(home);
