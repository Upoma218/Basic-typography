// type-assertion
/* ----------------------------- */
/* In TypeScript, type assertion is a mechanism that allows the programmer to tell the compiler the specific type of a variable, even if the compiler cannot infer it automatically. Type assertion is also known as type casting or type coercion in other programming languages.

Type assertion can be useful when working with external libraries or APIs that do not provide type definitions or when working with complex objects that have multiple possible types. It can also be used to override the default inferred type of a variable and enforce a more specific type.

There are two ways t */


let hello: any;
hello = 'amar khub mon kharap';
(hello as string).length;

let hi: any;
hi = 1000;
(hi as number).toFixed;

function kgToGram(param : string |number|undefined){
    if(typeof param === 'string'){
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`
    }
    if(typeof param === 'number'){
        const value = param * 1000;
        return value
    }
}
const resultToBeNumber = kgToGram(1000)as number;
const resultToBeString = kgToGram(1000)as string;

type CustomErrorType ={
    message: string
}
try{

}
catch(err){
    console.log((err as CustomErrorType).message)
    // or
    console.log((<CustomErrorType>err).message)/* this syntax will not work in  tsx file. use "as" is better*/
}