const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.API_KEY,
        units: 'metric'
      }
    });

    const data = response.data;
    res.json({
      temperature: data.main.temp,
      condition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    });
  } catch {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;
