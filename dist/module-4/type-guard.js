"use strict";
// keyof guard
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add("1", "2");
add(1, 2);
function getUser(user) {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return 'I am a normal user';
    }
}
const normalUser1 = {
    name: 'Upoma'
};
const adminUser1 = {
    name: 'Adman',
    role: 'admin'
};
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
// instance of guard(it's guard class and object)
class Animal1 {
    constructor(name, species) {
        this.name = name,
            this.species = species;
    }
    makeSound() {
        console.log('I am making sound');
    }
}
class Dog extends Animal1 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('I am barking');
    }
}
class Cat extends Animal1 {
    constructor(name, species) {
        super(name, species);
    }
    makeMewing() {
        console.log('I am mewing');
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMewing();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("Tom", 'dog'); //instance of dog
const animal2 = new Cat("Mini", 'cat'); //instance of mini
getAnimal(animal1);
getAnimal(animal2);
