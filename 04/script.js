const age = 22;
if(age >= 18){
    console.log("can vote");
} else {
    console.log("can not vote");
}

//ternary op

const age1 = 18;

age1 >= 21 ? console.log("you can drink") : console.log("can not drink");

//switch case
//use break after every case otherwise it excecutes every case after founding the match
const option = 3;
switch(option) {
    case 1: {
        console.log("this is case 1");
        
    } 
    break;
    case 2: {
        console.log("this is case 2");
        
    }
    break;
    case 3: {
        console.log("this is case 3");
        
    }
    break; 
    default: {
        console.log("Invalid Option");
        
    }
}

