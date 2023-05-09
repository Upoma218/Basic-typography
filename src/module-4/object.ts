class Animal{
    
    // Parameter properties
    
    constructor(public name: string, public species: string, public sound: string){}
    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); //Example: German Shephard says Ghew Ghew 
    }
}

const dog = new Animal('German Shephard', "dog", "Ghew Ghew");  //This system is called "Instance"
const cat = new Animal('Mini', "cat", "Mew Mew"); 

dog.makeSound();
cat.makeSound();
