var searchBar = document.querySelector(".search-bar")
let weather ={
    "apiKey": "35f783dec19bfd5fcb73ed95bd2b790a",
    fetchWeather: function(city) { 
        fetch(
       "http://api.openweathermap.org/data/2.5/weather?q="
       + city
       + "&units=metric&appid="
       + this.apiKey
          )
          .then((res) => res.json())
          .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + "@4x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "° C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
    },
    search: function() {
        this.fetchWeather(searchBar.value)
    }
}

function popUpSearch() {
    var city = prompt("Please enter your city:", "");
        searchBar.value = city
        weather.search()
        searchBar.value = ""   
  }

document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search()
    searchBar.value = ""
})

searchBar.addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
        weather.search()
        searchBar.value = ""
    }
})
