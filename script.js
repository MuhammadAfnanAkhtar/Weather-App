/*
  Weather App (OpenWeatherMap)
  =============================
  Responsibilities:
  - Read user input (city name)
  - Fetch current weather + 5-day forecast
  - Render results into the DOM
  - Toggle between: weather view / search hint / not-found message
*/

// ------------------------------
// DOM references
// ------------------------------
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const weatherInfoSection = document.querySelector(".weather-info");
const notFoundScetion = document.querySelector(".not-found"); // keep existing typo to match HTML selector usage
const searchCityScetion = document.querySelector(".search-city");

const countryTxt = document.querySelector(".contry-txt"); // keep existing typo to match HTML selector usage
const tempTxt = document.querySelector(".temp-txt");
const conditionTxt = document.querySelector(".condition-txt");
const humidityValueTxt = document.querySelector(".humidity-value-txt");
const windValueTxt = document.querySelector(".wind-value-txt");
const currentDateTxt = document.querySelector(".current-dat-txt");

const weatherSummaryImg = document.querySelector(".weather-summary-img");
const forecastItemContainer = document.querySelector(".forecast-item-container");

// ------------------------------
// Config
// ------------------------------
const apikey = "530bad4e15a2c8dd5a63c18984ae0495";

// ------------------------------
// Event handlers
// ------------------------------
function trySearch() {
  const city = cityInput.value.trim();
  if (!city) return;

  updateWeatherInfo(city);
  cityInput.value = "";
  cityInput.blur();
}

searchBtn.addEventListener("click", trySearch);

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") trySearch();
});

// ------------------------------
// API helpers
// ------------------------------
async function getFetchData(endPoint, city) {
  // Using metric units for °C and m/s.
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${encodeURIComponent(
    city
  )}&appid=${apikey}&units=metric`;

  const response = await fetch(apiUrl);
  return response.json();
}

function getWeatherIcon(id) {
  // Map OpenWeather condition ranges to local svg filenames.
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id <= 800) return "clear.svg";
  return "clouds.svg";
}

function getCurrentDate() {
  const currentDate = new Date();

  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };

  return currentDate.toLocaleDateString("en-GB", options);
}

// ------------------------------
// Rendering logic
// ------------------------------
function showDisplaySection(section) {
  // Hide all known sections first.
  [weatherInfoSection, searchCityScetion, notFoundScetion].forEach((s) => {
    s.style.display = "none";
  });

  // Then show the requested one.
  section.style.display = "flex";
}

function updateWeatherSummary({
  name: country,
  main: { temp, humidity },
  weather: [{ id }],
  wind: { speed },
}) {
  countryTxt.textContent = country;
  tempTxt.textContent = `${Math.round(temp)} °C`;
  conditionTxt.textContent = getConditionTextFromId(id); // fallback text derived from icon range
  humidityValueTxt.textContent = `${humidity}%`;
  windValueTxt.textContent = `${speed} M/s`;

  currentDateTxt.textContent = getCurrentDate();
  weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
}

function getConditionTextFromId(id) {
  // Optional: keep it simple since the original UI expects a label.
  // If you want exact OpenWeather wording, use weatherData.weather[0].main.
  if (id <= 232) return "Thunderstorm";
  if (id <= 321) return "Drizzle";
  if (id <= 531) return "Rain";
  if (id <= 622) return "Snow";
  if (id <= 781) return "Atmosphere";
  if (id <= 800) return "Clear";
  return "Clouds";
}

// ------------------------------
// Main workflows
// ------------------------------
async function updateWeatherInfo(city) {
  const weatherData = await getFetchData("weather", city);

  // OpenWeather uses { cod: 200 } for success (string/number depending on response).
  if (weatherData.cod != 200) {
    showDisplaySection(notFoundScetion);
    return;
  }

  updateWeatherSummary(weatherData);

  await updateForecastInfo(city);
  showDisplaySection(weatherInfoSection);
}

async function updateForecastInfo(city) {
  const forecastData = await getFetchData("forecast", city);

  // Forecast API returns 3-hour intervals. We'll show entries at 12:00.
  const timeTaken = "12:00:00";

  // Prevent showing "today" again in the forecast list.
  const todayDate = new Date().toISOString().split("T")[0];

  forecastItemContainer.innerHTML = "";

  forecastData.list.forEach((forecastWeather) => {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)
    ) {
      updateForecastItem(forecastWeather);
    }
  });
}

function updateForecastItem(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);

  const dateOption = {
    weekday: "short",
    day: "2-digit",
  };

  const dateResult = dateTaken.toLocaleDateString("en-GB", dateOption);

  const forecastItem = `
    <div class="forecast-item">
      <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
      <img src="assets/weather/${getWeatherIcon(id)}" class="forecast-item-img" alt="Weather icon">
      <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
    </div>
  `;

  forecastItemContainer.insertAdjacentHTML("beforeend", forecastItem);
}

// ------------------------------
// Initial view
// ------------------------------
// If your HTML doesn't show one of the sections by default,
// this ensures the search message is visible.
showDisplaySection(searchCityScetion);

