"use strict";
class PersonClass {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends PersonClass {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr. X', 15, 'Uganda');
class Teacher extends PersonClass {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(classes) {
        return `This ${this.name} will take ${classes} classes.`;
    }
}
const teacher1 = new Teacher('Upoma', 29, 'Singapore', 'teacher');
