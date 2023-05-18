"use strict";
// type-assertion
/* ----------------------------- */
/* In TypeScript, type assertion is a mechanism that allows the programmer to tell the compiler the specific type of a variable, even if the compiler cannot infer it automatically. Type assertion is also known as type casting or type coercion in other programming languages.

Type assertion can be useful when working with external libraries or APIs that do not provide type definitions or when working with complex objects that have multiple possible types. It can also be used to override the default inferred type of a variable and enforce a more specific type.

There are two ways t */
let hello;
hello = 'amar khub mon kharap';
hello.length;
let hi;
hi = 1000;
hi.toFixed;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram(1000);
try {
}
catch (err) {
    console.log(err.message);
    // or
    console.log(err.message); /* this syntax will not work in  tsx file. use "as" is better*/
}
