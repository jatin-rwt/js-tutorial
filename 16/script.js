const button = document.getElementById("stop-btn")

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById("time").innerText = time
}

//setTimeout--> runs a particular function after some seconds
//setTimeout(() => console.log('hi'), 5000)
//setInterval--> runs a particular functin in every given duration
//setInterval(() => console.log('hey',10000))

//calls showTime in every 1000 mili sec
let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
    clearInterval(interval);
})