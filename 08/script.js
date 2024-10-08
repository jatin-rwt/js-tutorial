//1. SYNTAX

// function sayHello() {
//     console.log('hello');
    
// }

//arrow function

const sayHello = () => {
    console.log('hey from arrow function');
    
}
sayHello();

//add two num
const addV1 = (a, b) => {
    return a+b;
} 

//one liner
const addV2 = (a, b) =>  a+b
console.log(addV2(2,3));


//2. ARGUMENTS keyword
// function sum() {
//     console.log(arguments);
    
// }
//ARGUMENTS KEYWORD IS ONLY AVAILABLE FOR NORMAL FUNCTIONS DOES NOT WORK IN ARROW FUNCTIONS
// const sum = () => {
//     console.log(arguments);
    
// }
// sum(1,2)

//CAN USE SPREAD TO OPERATE IN SAME WAy

const sum = (...nums) => {
    console.log(nums);
    
} 
sum(1,2)

// 3. HOISTING DOES NOT WORK FOR ARROW FUNCTIONS

//4. THIS keyword 
const obj = {
    age: 20,
    // fun: function () {
    //     console.log(this.age);
        
    // } //gives 20

    fun: () => {
        console.log(this.age);//undefined
        console.log(this); //gives a window object
        
    }
}

obj.fun()