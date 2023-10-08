// JavaScript Polymorphism
class Animal{
    speak(){
        console.log('Animal have different sounds.');
    }

    id;

    constructor(){
        this.id = 1
    }

    gelo(){

    }
}

class Cat {
    speak(){
        console.log("Cat says Mewo Mewo");
    }

    hello(){

    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog says Gwo Gwo!");
    }
}

const cat = new Cat();
const dog = new Dog();
console.log(cat);
console.log(dog);