const duration = prompt("enter the timer duration in mili seconds");
const time = document.getElementById("time");



setInterval(() => {
    time.innerText = "timer has stopped"
    
}, duration);