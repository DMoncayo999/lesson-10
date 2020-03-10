
// store the resource URL of the JSON
const apiKey = 'e133193565792698f423478349cebc85';
const prestonId = 5604473;
let cityId = prestonId;
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&APPID=${apiKey}`;
const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&APPID=${apiKey}`;


fetch(weatherAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});

//give forecast for 40 days
fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
  });



//update day and time in webpage
function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}

