type PersonType = {
    name: string,
    age: number,
    address: string
};

type NewType = 'name'|'age'|'address' //done manually

type NewTypeUsingKeyOf = keyof PersonType;

function getProperty<X, Y extends keyof X >(obj: X, key: Y){
    obj[key]
}

const property = getProperty({
    name: 'Mr. X',
    age: 20
},'age')
const a ={
    name: 'Mr. X',
    age: 20
}
a['name']