// abstraction mane hocche - kno class declare korar somoy j method byabohar kora hobe, se method er real impleentation somporke janbo na, kintu amra bujhte parbo etar shape kmn hobe.

// interface

// interface IVehicle{
//     name: string,
//     model: string
// }

// const vehicle: IVehicle = {
//     name: "car",
//     model: "2000"
// }

// interface IVehicle{
//     startEngine(): void
//     stoptEngine(): void
//     moveEngine(): void
// }

// class Vehicle implements IVehicle{

//     constructor(public name: string, public brand: string, public model: number,){}
//     startEngine(): void{
//         console.log('I am starting engine')
//     }
//     stoptEngine(): void{
//         console.log('I am stopping engine')
//     }
//     moveEngine(): void{
//         console.log('I am moving engine')
//     }
//     test(){
//         console.log("I am for testing purpose")
//     }
// }
// const vehicle = new Vehicle('car', 'toyota', 2000);



// abstract class

abstract class Vehicle {

    constructor(public name: string, public brand: string, public model: number,){}

    abstract startEngine(): void
    abstract stoptEngine(): void

    moveEngine(): void{
        console.log('I am moving engine')
    }
}

class Car extends Vehicle{
    startEngine(): void {
        console.log('I am starting engine')
    }
    stoptEngine(): void {
        console.log('I am stopping engine')
    }
}
