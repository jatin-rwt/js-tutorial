const button = document.getElementById("get-location-button");

//we will need to use promise to fetch location
//fetching location is going to be async task
//we will use navigator which is a js obj take two callbacks

//from weather api
async function getData(lat, long) {
    //dynamic insertion of city
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=01a7d12abad0462e813155024241010&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}


//success callback
async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);//gives lat and long
    //we will use this cordinates in our weather-api
    console.log(result);
    
}

//failure callback 
function failedToGet() {
    console.log("there is some issue");
    
}


button.addEventListener("click", async () => {
    const result = navigator.geolocation.getCurrentPosition( gotLocation, failedToGet)
})