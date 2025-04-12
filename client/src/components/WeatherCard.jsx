const WeatherCard = ({ weather }) => {
    return (
      <div>
        <h2>{weather.city}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />
        <p>{weather.condition}</p>
        <p>Temp: {weather.temperature}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {weather.windSpeed} m/s</p>
      </div>
    );
  };
  
  export default WeatherCard;
  