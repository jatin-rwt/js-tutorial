//querySelector
//starts from the top of the code and selects the first element that matches

const body = document.querySelector("body");
//body.innerHTML = "<h3>Hacked</h3>";//changed inner html of body
console.log(body.children);

console.log(body.innerHTML);//returns inner html of body

const div = document.querySelector("div");
//this has selected the very first div in the html code
console.log(div.children);//gives html collection
console.log(div.parentElement);//body is the parent of div
console.log(div.innerHTML);
// div.innerHTML = "nothing to seee here";

const pre = document.querySelector("pre")
pre.innerHTML = "alert('time up for you')";


const username = document.querySelector("#username");
console.log(username);//gives the span tag with id username
console.log(username.innerText);
username.innerText = "Jon Snow"
console.log(username);//gives the span tag with id username
console.log(username.innerText);


const ele = document.querySelector(".block");//nav 
console.log(ele);

const para = document.querySelector(".paragraph");//nav 
console.log(para);



//querySelectorAll selects all
const element = document.querySelectorAll(".block")
element.forEach((e) => {
    console.log(e.innerHTML);
})