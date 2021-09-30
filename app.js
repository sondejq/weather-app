let weather = {
  apiKey: "32798561a1a6ddd723699309d7434c72",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0]; //bo to array
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temperature").innerText = temp;
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "Humidity is " + humidity + "%";
    document.querySelector(".feels_like").innerText =
      "Feels like it's " + feels_like + " F";
    document.querySelector(".speed").innerText =
      "Speed of wind is " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Warsaw"); // default
