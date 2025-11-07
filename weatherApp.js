
/*npx create-react-app weather-app
cd weather-app
npm start*/
/*https://openweathermap.org/api -> Get API Key(YOUR_API_KEY_HERE) -> Create Account*/
/*npm start*/
//Visit-> http://localhost:3000
/*Extra features:
🌍 Show temperature in °C or °F (toggle)
📍 Auto-detect user location (using navigator.geolocation)
⏰ Show date and time
🎨 Dark/light mode switch*/

import React, {useState} from "react";

function App(){
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY_HERE;

  const getWeather = async() => {
    if(!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setError("");

    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                              );
      if(!res.ok)throw new Error("City not found");
        const data = await res.json();
        setWeather(data);
    } catch(err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div style={styles.container}>
    <h1 style={styles.title}>🌤️ WeatherApp</h1>

    <div style={styles.searchBox}>
    <input
    type="text"
    placeholder="Enter city name..."
    value={city}
    onChange={(e) => 
      setCity(e.target.value)}
    style={styles.input}
    />
   
