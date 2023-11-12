const cookie = {};
// console.log(cookie);

const myFavor = {
    name : "Chocolate",
    isGlutenFree: true,
    eatCookie: function(){
        console.log("I eat "+ this.name);
    }

};

console.log(myFavor);

class Chocolate{
    constructor (name, shape){
        this.name = name;
        this.shape = shape;
    }
}

const myChocolate = new Chocolate("Bruno","Square");

console.log(myChocolate);