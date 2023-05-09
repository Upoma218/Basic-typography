/* type GenericTuple<x, y> = [x,y];
const relation : GenericTuple<string, string> = ['Upoma', 'Ujjol'];

type RelationWithSalary ={
    name: string,
    salary: number
}
//RelationWithSalary = string
const relationWithSalary: GenericTuple<RelationWithSalary, string> = [
    {
        name: 'Upoma',
        salary: 100000
    },
    'Ujjol'
]
// or
interface RelationshipWithSalary{
    name: string,
    salary: number
}
const relationWithSalary2: GenericTuple<RelationshipWithSalary, string> = [
    {
        name: 'Upoma',
        salary: 100000
    },
    'Ujjol'
]

type GenericArray<T> = Array<T>; //T for Type

const money : number[] = [23, 46, 42, 34];
const money1 : string[] = ['23', '46', '42', '34'];

// or

// "<>"-these brackets are called angel brackets

const money2 : GenericArray<number> = [23, 46, 42, 34];
const money3 : GenericArray<string> = ['23', '46', '42', '34'];
const money4 : GenericArray<boolean> = [true, false]; 

type FruitsNameAndPrice = {name:string, price: number}
const fruitsNameAndPrice : GenericArray<FruitsNameAndPrice> = [
    {
        name:"mango", 
        price: 100
    },
    {
        name:"banana", 
        price: 120
    },

] */