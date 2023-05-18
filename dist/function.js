"use strict";
// normal function
// default parameter 
// **note: we can use default value only for last parameter
function add1(num1, num2 = 10) {
    return num1 + num2;
}
add1(21, 23);
// spread operator
const friends = ['Imu', 'Jol', 'Saba'];
const newFriends = ['Ujjol', 'Tanima'];
const myBestFriend = {
    fullName: 'Imu',
    age: 35
};
const [betterFriend] = friends;
const { fullName } = myBestFriend;
console.log(fullName);
friends.push(...newFriends);
// console.log(friends)
// rest operator
const bestFriend = (...friends) => friends.forEach(friend => {
    // console.log(`hi ${friend}`)
});
;
bestFriend('Nipu', 'Shipu', 'Dipu', 'Topu', 'Lipu');
// array and object destructuring
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 4, 3];
const newArray = arr.map((a) => a * a);
/* const newObject : {
    name: string,
    balance : number,
    addBalance(gift: number) : number;
} = {
    name: 'Upoma',
    balance : 100,
    addBalance(gift: number){
        return gift + this.balance;
    }
} */
/* const newObject : {
    name: string,
    balance : number,
    addBalance(gift: number) : void;
} = {
    name: 'Upoma',
    balance : 100,
    addBalance(gift: number){
        console.log(gift + this.balance);
    }
} */
/* const newObject : {
    name: string,
    balance : number,
    addBalance(gift: number) : string;
} = {
    name: 'Upoma',
    balance : 100,
    addBalance(gift: number){
        return `Total balance is ${gift + this.balance}`;
    }
}
 */
const newObject = {
    name: 'Upoma',
    balance: 100,
    addBalance(gift) {
        // console.log(`Total balance is ${gift + this.balance}`);
    }
};
