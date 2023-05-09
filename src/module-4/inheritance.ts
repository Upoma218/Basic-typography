class PersonClass {
    name: string;
    age: number;
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: string): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Student extends PersonClass{
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student1 = new Student('Mr. X', 15,
'Uganda')

class Teacher extends PersonClass {
    designation: string; 

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    takeClasses(classes: number): string {
        return `This ${this.name} will take ${classes} classes.`
    } 

}

const teacher1 = new Teacher('Upoma', 29,'Singapore',  'teacher')