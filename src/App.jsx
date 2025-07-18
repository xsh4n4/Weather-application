import React from 'react'; 
import './App.css';

function App({ data }) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{data.name}, {data.sys.country}</h2>
      </div>
      <div className="weather-info">
        <div className="temperature">
          <span className="temp-value">{Math.round(data.main.temp)}°C</span>
          <span className="feels-like">Feels like: {Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className="weather-description">
          <img 
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <p>{data.weather[0].description}</p>
        </div>
        <div className="weather-details">
          <div className="detail">
            <span>Humidity</span>
            <span>{data.main.humidity}%</span>
          </div>
          <div className="detail">
            <span>Wind</span>
            <span>{data.wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;