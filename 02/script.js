//var
//var has global scope
var age = 22;
console.log(age);

age = "jatin";
console.log(age);


if(true){
    var name = "vermithor";
}
console.log(name);

//gives error that dragon not defined
console.log(dragon);

//not if i declare it here 
var dragon = "silverwing"
//does not gives error but says undefined
console.log(dragon);


//choose let over var as it reduces unnecessary bugs
let age1 = 23;
console.log(age1);
//loosely typed
age1 = "yeah"
console.log(age1);

//let  have local scope unlike var

//const
//can not re assign values 
//even of the same datatype


const age2 = 22;
console.log(age2);
age2 = 21;//gives error
console.log();
