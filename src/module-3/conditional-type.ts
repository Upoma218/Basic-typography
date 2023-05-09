// A type is dependent on another type

type a1 = null;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

// Nested conditional type

type d = a1 extends null? null :  a3 extends number? number : a4 extends null? null : never


// check korbe ei Sheikh type er moddhe wife1 namer property ache kina ? true: false

type Sheikh = {
    wife1 : string,
    wife2 : string
}
type A = keyof Sheikh; //"wife1" | "wife2"

type CheckProperty <T, K> = K extends keyof Sheikh? true : false;
type CheckWife1 = CheckProperty<Sheikh, 'wife1'>;

// another example

type Friend = "Jerin"| 'Saba' | "Papri";

type RemoveFriend<T , U> = T extends "Papri"? never : T; //"never" type means to remove value from union type

type CurrentFriend = RemoveFriend<Friend, "Saba">;
