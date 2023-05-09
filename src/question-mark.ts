// ternary operator
const age:number = 22;
/* if(age >= 18){
    console.log('Adult')
}
else{
    console.log("Not adult")
} */

const isAdult = age >= 18 ? 'yes': "no"
console.log(isAdult)

// Nullish coalescing operator
// null and undefined

const isAuthenticateUser = "";
const userName = isAuthenticateUser ?? 'Guest1';
const userName2 = isAuthenticateUser ? isAuthenticateUser: 'Guest';
console.log(userName,userName2)


type Person = {
    name: string,
    age: number,
    address: {
        city:'Love city',
        road: 'Pain',
        home?:''
    }
}

const person1: Person = {
    name: 'Upoma',
    age: 29,
    address: {
        city:'Love city',
        road: 'Pain',
    }
}

const home = person1?.address?.home ?? 'No Home';
console.log(home)
