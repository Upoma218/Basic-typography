// type alias must used for primitive type data
type User = {
    name: string,
    age: number
};

type extendedUser = User & {
    role: string,
}

// interface only used in object type data
interface IUser{
    name: string,
    age: number
}
interface IExtendedUser extends IUser{
    role: string,
}

const user1 : IExtendedUser ={
    name: "Upoma",
    age: 29,
    role: "Homemaker",
}

// Object, Function, Array -- all are one kinf object in javascript!

type addNumbersType = (number1: number, number2: number) => number
const addNumbers : addNumbersType = (number1, number2) => number1 + number2;



interface IAddNumbers {
    (number1: number, number2: number) : number
}
const addNumbers1 : addNumbersType = (number1, number2) => number1 + number2;

type RollNumbersType = number[];
const rollNumbersType : RollNumbersType = [1, 2, 3] ; //[index]

// index signature
interface IRollNumbers{
    [index: number]: number;
}
const rollNumbersType2 : IRollNumbers = [1, 2, 3] ; //[index]

// const userWithTypeAlias: User ={
//     name: "Type Alias",
//     age: 100
// }

// const userWithInterface: IUser = {
//     name: "Interface",
//     age: 200
// }
