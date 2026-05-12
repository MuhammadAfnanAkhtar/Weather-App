<div align="center">

# 🌤️ Weather App

**A clean, responsive weather application with real-time data and a glassmorphism UI**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge&logo=cloud&logoColor=white)](https://openweathermap.org/api)

<br/>

(<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/23fff786-dc2e-4bc7-9897-ceb191218fcd" />
)



</div>

---

## 🌐 About the Project

Weather App is a lightweight, fully client-side web application that delivers real-time weather data and a 5-day forecast for any city in the world. It consumes the **OpenWeatherMap API** and presents results through a polished **glassmorphism-style** UI — no frameworks, no build tools, just clean vanilla HTML, CSS, and JavaScript.

---

## ✨ Features

- 🔍 **City Search** — Search any city using an input field or by pressing `Enter`
- 🌡️ **Current Conditions** — Displays temperature, weather description, humidity, and wind speed
- 📅 **5-Day Forecast** — Horizontal scrollable forecast tiles (filtered to 12:00 entries per day)
- 🎨 **Glassmorphism UI** — Frosted-glass card design with a dynamic background image
- 💬 **Smart UI States** — Three distinct states: initial prompt, results view, and city-not-found message
- 🌍 **Metric Units** — Temperatures in °C and wind speed in m/s
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Glassmorphism, Flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Data | OpenWeatherMap REST API |

---

## 📁 Project Structure

```
weather-app/
├── index.html          # Main app layout and structure
├── style.css           # Styling — glass card, background, forecast scroller
├── script.js           # API calls and DOM rendering logic
└── assets/
    ├── bg.jpg                  # Background image
    ├── message/
    │   ├── search.png          # Initial search prompt image
    │   └── not-found.png       # City-not-found message image
    └── weather/
        ├── clear.svg           # Weather condition icons (SVG)
        ├── clouds.svg
        ├── rain.svg
        ├── snow.svg
        ├── thunderstorm.svg
        └── ...                 # Additional condition icons
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A free [OpenWeatherMap API key](https://openweathermap.org/api)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadAfnanAkhtar/weather-app.git
   cd weather-app
   ```

2. **Add your API key**

   Open `script.js` and replace the placeholder with your key:

   ```js
   const apikey = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

3. **Run the app**

   Simply open `index.html` in your browser — no server or install needed.

   ```bash
   # Optional: use VS Code Live Server or any static file server
   npx serve .
   ```

---

## 🖱️ Usage

1. Type a city name into the search field (e.g., `Lahore`, `Tokyo`, `New York`)
2. Click the **Search** button or press **Enter**
3. The app will display:
   - Current temperature, weather condition, humidity, and wind speed
   - A matching weather icon
   - A 5-day forecast in a horizontally scrollable strip
4. If the city is not found, a friendly not-found message appears

---

## 📸 Screenshots

| Search Prompt | Weather Results | City Not Found |
|:---:|:---:|:---:|
|<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/c49eef53-d72f-4639-8316-b7b6ff514caa" /> |<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/6d8353d3-346d-4921-8390-a884f116e927" /> |<img width="200" height="350" alt="image" src="https://github.com/user-attachments/assets/6baf0d96-d449-4e66-85be-d3add45caa76" />|


---

## 📡 API Reference

This project uses two endpoints from the [OpenWeatherMap API](https://openweathermap.org/api):

| Endpoint | Description |
|---------|-------------|
| `GET /weather` | Fetches current weather data for a given city |
| `GET /forecast` | Fetches a 5-day / 3-hour interval forecast |

**Base URL:** `https://api.openweathermap.org/data/2.5/`

**Sample request:**
```
https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=YOUR_KEY&units=metric
```

> ⚠️ **Never expose your API key in a public repository.** For production use, proxy requests through a backend server or use environment variables.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please open an issue first to discuss major changes.

---

<div align="center">

Made with ❤️ by [Muhammad Afnan Akhtar](https://github.com/MuhammadAfnanAkhtar)

⭐ Star this repo if you found it useful!

</div>
