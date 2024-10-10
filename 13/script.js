const elements = document.getElementsByClassName("block");
console.log(elements);

for(let i = 0; i < elements.length; i++){
    //console.log(elements.item(i));
    elements.item(i).style.background = "blue";
}

