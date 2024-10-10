function handleButtonClick() {
    console.log("you have clicked the button");
    alert('Hey i am clicked')

}

const nameBlock = document.getElementById("name-block");
const el = document.getElementById("submitButton");
// el.onclick =  () => {
//     console.log("submit button clicked");
    
// }

//better practise as this cant be overridden
el.addEventListener('click', () => {
    if(nameBlock.style.color === "red"){
        nameBlock.style.color = "blue";
    } else {
        nameBlock.style.color = "red";
    }
    
})


