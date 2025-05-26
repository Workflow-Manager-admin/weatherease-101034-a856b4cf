import React, { useState } from "react";
import "./WeatherEaseMain.css";

/**
 * PUBLIC_INTERFACE
 * WeatherEaseMain - Main container for WeatherEase weather application.
 * Features: Search bar, current weather card, 5-day forecast, weather icons, theming.
 */
const WeatherEaseMain = () => {
  // Mocked State - would come from API in real app
  const [searchQuery, setSearchQuery] = useState("");
  // Example static data for illustration purposes
  const currentWeather = {
    city: "San Francisco",
    temp: 21,
    weather: "Sunny",
    humidity: 55,
    wind: 14,
    icon: "☀️",
  };
  const forecast = [
    { day: "Mon", icon: "☀️", high: 23, low: 15 },
    { day: "Tue", icon: "⛅️", high: 20, low: 14 },
    { day: "Wed", icon: "🌧️", high: 18, low: 13 },
    { day: "Thu", icon: "⛈️", high: 16, low: 12 },
    { day: "Fri", icon: "☀️", high: 21, low: 13 },
  ];

  // PUBLIC_INTERFACE
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  // PUBLIC_INTERFACE
  function handleSearchSubmit(e) {
    e.preventDefault();
    // Normally would trigger an API request here
  }

  return (
    <div className="weatherease-main-container">
      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-btn">
          <span role="img" aria-label="search">
            🔎
          </span>
        </button>
      </form>

      {/* Current Weather Card */}
      <section className="current-weather-card">
        <div className="cw-city">{currentWeather.city}</div>
        <div className="cw-main">
          <span className="cw-icon" role="img" aria-label={currentWeather.weather}>
            {currentWeather.icon}
          </span>
          <span className="cw-temp">{currentWeather.temp}°C</span>
        </div>
        <div className="cw-info">
          <span>{currentWeather.weather}</span>
          <span>Humidity: {currentWeather.humidity}%</span>
          <span>Wind: {currentWeather.wind} km/h</span>
        </div>
      </section>

      {/* 5-Day Forecast */}
      <section className="forecast-section">
        <div className="forecast-scroll">
          {forecast.map((day, idx) => (
            <div key={idx} className="forecast-card">
              <div className="forecast-day">{day.day}</div>
              <div className="forecast-icon" role="img" aria-label="icon">
                {day.icon}
              </div>
              <div className="forecast-temp">
                <span className="temp-high">{day.high}°</span>
                <span className="temp-low">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeatherEaseMain;
