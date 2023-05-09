// jokhon onk gulo class thakbe ebong class er ekta same method e different different output dibe, setai polymorphism.

class Parent {
    takeNap(): void {
        console.log('Parent sleep 8 hours per day')
    }
}

class Son extends Parent {
    takeNap(): void {
        console.log("Son sleep 10 hours per day")
    }
}

class Developer extends Parent {
    takeNap(): void {
        console.log("Developer sleep 5 hours per day")
    }
}

function getNap(param: Parent) {
    param.takeNap()
}

const robot1 = new Parent();
const robot2 = new Son();
const robot3 = new Developer();

getNap(robot1);
getNap(robot2);
getNap(robot3);


// another example

class Shape {
    getArea(): number { 
        return 0
    }
}

// area of circle = pi * r^2
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

// area of rectangle = height * width
class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width 
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea())
}

getAreaOfShape(new Circle(20))
getAreaOfShape(new Rectangle(10, 20))