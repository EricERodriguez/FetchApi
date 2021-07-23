const apiKey = '3f6f9b690a95d842d6614da29fa444fa';

const city = "Tucuman"

let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getGeoLoc() {
    let navigatorLocation = await new Promise((resolve, reject) => {
        // console.log(geoloc.coords)

        window.navigator.geolocation.getCurrentPosition(geoloc => {

            resolve({
                lat: geoloc.coords.latitude,
                lng: geoloc.coords.longitude
            });
        });
        // return{
        //     lat: geoloc.coords.latitude,
        //     lng: geoloc.coords.logitude
        // }

    });

    console.log(navigatorLocation)
    URLlatlong = `api.openweathermap.org/data/2.5/weather?lat=${navigatorLocation.lat}&lon=${navigatorLocation.lng}&appid=${apiKey}`
}

getGeoLoc()



console.log(navigatorLocation);




function search(loc) {
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

    fetch(URL, {})
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
}




const searchInput = document.querySelector('#search');
console.log(searchInput);

searchInput.addEventListener('keyup', (ev) => {
    console.log(ev.target.value);

    let location = ev.target.value;
    if (location.length > 3 && ev.keyCode == 13) {
        search(location)

    }
});




// cuando hay un toquen
// fetch(URL, {
//     method: "GET",
//     headers:{
//         "Authorization" : "Bearer TOKENDASDA"
//     }
// })