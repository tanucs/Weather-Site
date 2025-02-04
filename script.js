const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const unitToggle = document.querySelector(".unit-toggle");

let isCelsius = true; // 

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    updateTemperature(data.main.temp); 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    updateWeatherIcon(data.weather[0].main);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Detect user location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      checkWeather(data.name); 
    });
  }
}

function updateTemperature(temp) {
  const temperatureElement = document.querySelector(".temp");
  if (isCelsius) {
    temperatureElement.innerHTML = `${Math.round(temp)}°C`;
  } else {
    const fahrenheit = (temp * 9) / 5 + 32;
    temperatureElement.innerHTML = `${Math.round(fahrenheit)}°F`;
  }
}

unitToggle.addEventListener("click", () => {
  isCelsius = !isCelsius;
  const currentTemp = parseFloat(document.querySelector(".temp").innerText);
  updateTemperature(isCelsius ? (currentTemp - 32) * (5 / 9) : currentTemp);
  unitToggle.innerText = isCelsius ? "Switch to °F" : "Switch to °C";
});

function updateWeatherIcon(weather) {
  const iconMapping = {
    Clouds: "img/clouds.png",
    Clear: "img/clear.png",
    Rain: "img/rain.png",
    Drizzle: "img/drizzle.png",
    Mist: "img/mist.png",
  };
  weatherIcon.src = iconMapping[weather] || "img/default.png";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

getUserLocation();