
class Dog extends Animal {}

function Animal() {
    this.move = function() {
        console.log(defaultMove);
    }
}

let defaultMove = "moving";

let dog = new Dog();
dog.move();