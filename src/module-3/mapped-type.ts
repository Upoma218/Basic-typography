const arrayOfNumbers = [1, 2, 3] ;  //['1', '2', '3']
const stringArray = arrayOfNumbers.map(number => number.toString());
// console.log(stringArray);

type Volume = {
    height: number,
    width: number
    depth: number
}

type Area<T> = {
   readonly [key in keyof T] : T[key]
    // [key in keyof Volume] : Volume[key]; 
}
const area1 : Area<{height: number, width: string}> = {height: 10, width: "10"}

type AreaString = {
    height: string,
    width: string
}
type AreaReadOnly = {
  readonly  height: number,
  readonly width: number
}

const rectangularArea: AreaReadOnly = {
    height: 20,
    width: 40
}


type Aa = Volume['height']; //look up type
type Bb = keyof Volume; //'width' | 'height'

const obj = {
    name : 'Upoma'
}
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

