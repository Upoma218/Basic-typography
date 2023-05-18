"use strict";
const arrayOfNumbers = [1, 2, 3]; //['1', '2', '3']
const stringArray = arrayOfNumbers.map(number => number.toString());
const area1 = { height: 10, width: "10" };
const rectangularArea = {
    height: 20,
    width: 40
};
const obj = {
    name: 'Upoma'
};
obj['name'];
// -----------------------------------
// interface Person1 {
//     firstName: string;
//     lastName: string;
//   }
//   function fullName1<T extends Person1>(person: T): string {
//     return `${person.firstName} ${person.lastName}`;
//   }
//   const person: Person1  = {
//     firstName: "Resma Islam",
//     lastName: "Upoma"
//   }
//   console.log(fullName1<Person1>(person))
