# Weather App

## Description
A simple weather application that allows users to check the current weather conditions for any city. The app fetches data from the OpenWeatherMap API and displays the weather information interactively.

## Features
- Search for weather by city name.
- Displays temperature, humidity, and weather description.
- Shows weather icons based on conditions (sunny, cloudy, etc.).

## Installation Instructions
1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Install `http-server` globally if not already installed:
   ```bash
   npm install -g http-server
   ```
4. Start the local server:
   ```bash
   http-server .
   ```
5. Open your browser and go to `http://localhost:8080`.

## Usage
1. Enter a city name in the input field.
2. Click the "Search" button to fetch the weather data.
3. The weather information will be displayed, including an icon representing the current weather condition.

## Adding Weather Icons
To display weather icons based on conditions, you can use the following approach:
1. Include an `<img>` tag in your HTML where you want the icon to appear.
2. Update the `displayWeather(data)` function in `script.js` to set the `src` attribute of the `<img>` tag based on the weather condition from the API response.

Example:
```javascript
const iconElement = document.querySelector('.weather-icon');
iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
```

## Contributing
Feel free to submit issues or pull requests for improvements.

## License
This project is licensed under the MIT License.
