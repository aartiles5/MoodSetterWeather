let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  
  let iconElement = document.querySelector("#icon");
  let searchBar = document.querySelector("#searchBar");
  let city = document.querySelector("#searchingFor");
  city.innerHTML = `Searching for ${searchBar.value} 🧐`;
  iconElement.setAttribute = ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let h5 = document.querySelector("h5");
  h5.innerHTML = ` It is currently ${temperature}ºF in ${response.data.name}`;
}

let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", search);

  let apiKey = "cd7a598858343df0ff67d92a369e973c";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${searchBar.value}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(showTemperature);