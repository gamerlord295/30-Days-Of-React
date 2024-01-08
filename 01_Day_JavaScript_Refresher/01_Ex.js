class Animal {
    constructor(name, age, color, legs, type) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.type = type
    };

    description(){
        const desc = `this is ${this.name} it's a ${this.age} years old ${this.type}, it's color is ${this.color},`
        return desc
    };
};

class Bird extends Animal {
    description(){
        const desc = `this is ${this.name}`
        return desc
    }
}

let Dog = new Animal("doggy", 10, "brown", 4, "Dog");
let Cat = new Animal("sayed", 5, "black", 4, "Cat");

let Owl = new Bird("owly", 2, "gray", 2, "Bird");

console.log(Dog.description());
console.log(Cat.description());
console.log(Owl.description());