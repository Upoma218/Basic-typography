// Pick(jegulo lagbe , segulo use korbo)

interface PersonDetails{
    name: string;
    email?: string;
    contact: string
}

// type Email = Pick<PersonDetails, "email">
type ContactDetails = Pick<PersonDetails, "contact"| "email">

// Omit(jegulo lagbena, segulo fele dibo)

type PersonName = Omit<Person, "email"|"contact">

// Partial and Required


// Partial
// To make all the properties optional type

type Optional = Partial<PersonDetails>

// Required

type RequiredProperties = Required<PersonDetails>


// ReadOnly(Not-editable)
 const person : Readonly<PersonDetails> = {
    name: "Upoma",
    email: "abd@gmail.com",
    contact: "87584969"
 }

//  Record Type
// ---------------
//  type myObj={
//     a: string,
//     b: string,
//     c: string
//  }


// type myObj = {
//     [key: string]: string
// } [index signature]


// 'a'|'b'|'c'---this is call literal type
type myObj = Record<'a'|'b'|'c', string>

//  using index signature
 const object:myObj = {
    a: "hello",
    b: "hi",
    c: "hey"
 }