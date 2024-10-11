const button = document.getElementById("submitButton");
const uname = document.getElementById("userName");
const username = document.getElementById("username")

button.addEventListener("click" , () => {
    const value = uname.value;
    //store this on the local storage
    //mind getting the id correct and unique
    localStorage.setItem("name", value);
    //local storage values stays even after page reload until we update or delete it 
    
    
    username.innerText = value;//does the same task as below one with submit button withoout reloading

    //this also works
    //location.reload();
})

//make this uname appear stead of username on page reload


window.addEventListener("load", () => {
    //get value from the local storage using key
    const value = localStorage.getItem("name");
    username.innerText = value;
})