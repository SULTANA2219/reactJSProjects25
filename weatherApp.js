
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
    <button onClick = {getWeather} style={styles.button}>
    Search
      </button>
      </div>
{error && <p style={styles.error}>{error}</p>}

 {weather && (
   <div style={styles.card}>
   <h2>{weather.name}, {weather.sys.country}</h2>
   <img 
     src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
       alt="weather icon"
/>

         <h3>{Math.round(weather.main.temp)} °C</h3>
<p>{weather.weather[0].description}</p>
         </div>
)}
  </div>
);
}

const styles={
  body: {
    background: "linear-gradient(to bottom, #87ceeb, #f0f8ff)",
    margin: "0",
    padding: "0",
  },
  container: {
    fontFamily: "Poppins sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "200px",
  },
  button: {
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius:"8px",
    cursor: "pointer",
  },
  card: {
    display: "inline-block",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    marginTop: "20px",
  },
  error: {
    color: "red",
  },
};

export default App;
  
