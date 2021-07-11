const API_KEY = "3d16e3eb49a1c5ffdec1833f0321f47f";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log("You live in",url);
    fetch(url).then((response) => response.json()).then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const name =  document.querySelector("#weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;

    });
}

function onGeoError(){
    alert("Cant find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
