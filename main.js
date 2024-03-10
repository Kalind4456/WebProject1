const apiKey = "985832de3b9116f97dddee54d3ac2f7c"; // given API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"; // given API url

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  // getting the response from the API website
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // getting the data from the json file in the API
    var data = await response.json(); // all information from the particular city

    // Display on the console

    switch (data.weather[0].main) {
      case "Cloud":
        document.querySelector(".weatherIcon").src = "images/clouds.png";
        break;

      case "Clear":
        document.querySelector(".weatherIcon").src = "images/clear.png";
        break;

      case "Rain":
        document.querySelector(".weatherIcon").src = "images/rain.png";
        break;

      case "Snow":
        document.querySelector(".weatherIcon").src = "images/snow.png";
        break;

      case "Drizzle":
        document.querySelector(".weatherIcon").src = "images/drizzle.png";
        break;

      case "Mist":
        document.querySelector(".weatherIcon").src = "images/mist.png";
        break;
    }

    // setting the text of each div to the data within the API
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// when the search button is clciked, return the information about that city
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});

// works when pressing enter
searchBox.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    checkWeather(searchBox.value);
    searchBox.value = "";
  }
});
