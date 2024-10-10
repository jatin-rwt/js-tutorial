const el = document.getElementById("username");
console.log(el);
console.log(el.innerText);

el.innerText = "Tyrion Lannister"
el.classList.add("red-color", "underline");//adds red-color to the el
console.log(el.classList);

el.classList.remove("dashed");
console.log(el.classList);
el.style.textDecoration = "underline";
el.style.color = "blue";

el.parentElement.style.background = "grey";
console.log(el);
