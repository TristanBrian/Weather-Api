const apiKey = 'd185864f9a52b05b436e1a73edfc12fc'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityElement = document.querySelector('.city');
    const tempElement = document.querySelector('.temp');
    const humidityElement = document.querySelector('.humidity');
    const descriptionElement = document.querySelector('.description');

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = `Temperature: ${Math.round(data.main.temp)}°C`;
    humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
    descriptionElement.innerHTML = `Description: ${data.weather[0].description}`;
}

document.getElementById('search-button').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value.trim();
    if (cityInput) {
        checkWeather(cityInput);
    } else {
        alert("Please enter a city name");
    }
});