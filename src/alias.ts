type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}
const crush1: CrushType = {
    name: "Imu",
    age: 35,
    profession: "engineer",
    address: "Mymensingh"
}
const crush2: CrushType = {
    name: "Imran",
    age: 34,
    profession: "researcher",
    address: "Singapur"
}
const crush3: CrushType = {
    name: "Ujjol",
    age: 36,
    profession: "entrepreneur",
    address: "Bangladesh"
}

type CrushMarriedType = boolean;
const isMarried : CrushMarriedType = false;

type CrushNameType = string;
const crushName : CrushNameType = 'Imran';

// function
type OperationType = (x:number,y:number)=> number
const calculate = (
    number1: number, /* 20 */
    number2: number, /* 10 */
    operation: OperationType
    ) =>{
    return operation(number1,number2)
}
calculate(20, 10,(x,y)=> x + y);
calculate(20, 10,(x,y)=> x - y);
calculate(20, 10,(x,y)=> x * y);
calculate(20, 10,(x,y)=> x / y);

