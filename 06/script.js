//for loop
//if u know how many time to loop


for(let i = 1; i <= 10;i++){
    console.log(i);
    
    console.log('jatin');
    
}


//while loop
//if u dont know how many time to loop

let pos = 0;
let house = 10;
while(pos != house){
    pos++;
    console.log('step no:' + pos);
}
console.log('reached house');


//do while
//same as while, but here code runs first and then checks conditions
pos = 0;
let gym = 15;
do {
    pos++;
    console.log('step no:' + pos);
    
} while(pos <= gym)//goes upto 16

//guess the number game

let num = 40;
let guess = 0;

do {
    guess = parseInt(prompt("guess a number"));
    if(guess == num) {
        alert("hurray");
        break;
    }
} while(guess != 0)