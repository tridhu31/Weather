function getDetails(place) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(abc => abc.json())
    .then(abc => document.getElementById('name').innerHTML = abc.name)


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
.then(abc => abc.json())
.then(abc => document.getElementById('Latitude').innerHTML = abc.coord.lat)

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
.then(abc => abc.json())
.then(abc => document.getElementById('Longitude').innerHTML = abc.coord.lon)

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
.then(abc => abc.json())
.then(abc => document.getElementById('Country').innerHTML = abc.sys.country)

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
.then(abc => abc.json())
.then(abc => document.getElementById('Temperature').innerHTML = parseInt(abc.main.temp-273.15)+"°C")

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
.then(abc => abc.json())
.then(abc => document.getElementById('speed').innerHTML = abc.wind.speed+"Km/h")
}

function hello(){
    var myplace = document.getElementById('place').value;
    getDetails(myplace)
}
