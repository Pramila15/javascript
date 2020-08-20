const api = {
  key: "8df2551bfdc0a8c57b51b231a34c0be5",
  url: "https://api.openweathermap.org/data/2.5/",
};

const searchLocation = document.querySelector(".search-location");
searchLocation.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    //console.log(searchLocation);
    console.log(searchLocation.value);
    getResults(searchLocation.value); // our query
  }
}

function getResults(query) {
  fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);

  //gives us "weather"
  //convert into json
  //pass json object to display
}


function displayResults(weather) {
  console.log(weather);

  let city = document.querySelector(".location .city");
  city.textContent = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.textContent = setdate(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${weather.main.temp}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.textContent = weather.weather[0].main;

  let highlow = document.querySelector(".highlow");
  highlow.textContent = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}

function setdate(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
