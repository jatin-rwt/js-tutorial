function sayHello() {
    console.log('hello');
    
}

sayHello(); //calling function


//             arguments
function addTwo(a, b) {
    // console.log(a + b);
    return a+b;
    
}

console.log(addTwo(2,3));//parameters

function mulTwo(a, b) {
    // console.log(a * b);
    return a*b;
}

let prdct = mulTwo(2,3);
console.log(prdct);

//variadic functions -> variable numbers of arguments
function sum(){

    // console.log(arguments);//gives all parameters passed below in an object calles Arguments
    
    let ans = 0;
    for(let i = 0 ; i < arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans;

}

let result = sum(1,2,3,4,5,6,7,8,9,10);
console.log(result);


//spread operator (...)
function sumV2(...args) {
    let ans = 0;
    for(let i = 0 ; i < args.length; i++){
        ans = ans + args[i];
    }
    return ans;
}

let results = sumV2(1,2,3,4,5,6,7,8,9,10);
console.log(results);
