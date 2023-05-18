"use strict";
// jokhon onk gulo class thakbe ebong class er ekta same method e different different output dibe, setai polymorphism.
class Parent {
    takeNap() {
        console.log('Parent sleep 8 hours per day');
    }
}
class Son extends Parent {
    takeNap() {
        console.log("Son sleep 10 hours per day");
    }
}
class Developer extends Parent {
    takeNap() {
        console.log("Developer sleep 5 hours per day");
    }
}
function getNap(param) {
    param.takeNap();
}
const robot1 = new Parent();
const robot2 = new Son();
const robot3 = new Developer();
getNap(robot1);
getNap(robot2);
getNap(robot3);
// another example
class Shape {
    getArea() {
        return 0;
    }
}
// area of circle = pi * r^2
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// area of rectangle = height * width
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(20));
getAreaOfShape(new Rectangle(10, 20));
