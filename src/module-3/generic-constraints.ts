// // Arrow function
// const crateArray = (param:string): string[] => {
//     return [param];
// }
// const crateArray1 = <T>(param:T): T[] => {
//     return [param];
// }
// const crateArray2 = <X, Y>(param1:X, param2:Y): [X,Y] => {
//     return [param1, param2];
// }
// function crateArray3 <X, Y>(param1:X, param2:Y): [X,Y] {
//     return [param1, param2];
// }

// type Name = {name: string};
// type NameAge = {name: string, age: number};

// const result = crateArray('Bangladesh');
// const result1 = crateArray1<string>('Bangladesh');
// const result2= crateArray1<boolean>(true);
// const result3= crateArray1<Name>({name: "Upoma"});


// const result4= crateArray2<Name, NameAge>(
//     {name: "Upoma"},
//     {
//         name: "Upoma", 
//         age: 20}
//     );

//     // spread operator
    
   
//     // const newData = {...myInfo, love}

//     type MandatoryType = {name: string, age: number, role: string}
//     const getEngaged = <T extends MandatoryType>(myInfo:T) => {
//         const love = 'Ujjol';
//         const newData = {...myInfo, love};
//         return newData
//     }

//     type MyInfoType ={
//         name: string,
//         age: number,
//         role: string,
//         salary: number
//     }
//     const myInfo : MyInfoType = {
//         name: 'Upoma',
//         age: 20,
//         role: "developer",
//         salary: 30000
//     }
//     const result5 = getEngaged<MyInfoType>(myInfo);