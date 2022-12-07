import "./style.css";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="wrapper">
          <div class="weather-app">
            <div class="row">
              <div class="col-6">
                <h2 id="weather-location">Today</h2>
                <h1 id="current-temp-units">
                  <strong id="currentTemperature"> 14 </strong>
                  <span id="units" class="units">
                    <a href="#" id="fahrenheit">
                      °F
                    </a>{" "}
                    |
                    <a href="#" id="celsius">
                      °C
                    </a>
                  </span>
                </h1>
                <h4></h4>
              </div>
              <div class="col-6">
                <h3>Wednesday, October 3</h3>

                <h6 class="weatherConditions">
                  <div id="wind">Wind:</div>
                  <div id="humidity">Humidity:</div>
                  <div id="description"></div>
                </h6>
              </div>
            </div>
            <form class="searchbar-and-buttons">
              <div class="row">
                <div class="d-flex">
                  <div class="col-2">
                    <input
                      type="search"
                      class="searchbar"
                      placeholder="Enter a city"
                      autocomplete="off"
                      id="searchbar-form"
                    />
                  </div>

                  <span class="col-6">
                    <img src="#" alt="" id="weather-icon" />
                  </span>
                </div>
                <div class="row">
                  <span class="col-5">
                    <button
                      type="submit"
                      id="submit-button"
                      class="search-control"
                    >
                      Search 🔍
                    </button>
                  </span>
                  <span class="col-4">
                    <button class="location-button" id="location-button">
                      Current 📍
                    </button>
                  </span>
                  <span class="col-10">
                    <img
                      src="images/undraw_halloween_bg6h.svg"
                      width="100px"
                      class="ghost-img"
                    />
                  </span>
                </div>
              </div>
            </form>
            <div class="weather-forecast" id="weather-forecast"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
