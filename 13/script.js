//create element dynamically
const button = document.getElementById("submitButton");
const container = document.getElementById("my-container");



button.addEventListener("click", () => {
    const el = document.createElement("h1");
    el.innerText = "Jatin Rawat";

    container.appendChild(el);
})