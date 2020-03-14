// store the resource URL of the JSON
const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

//Go fetch it and then wait for a response.
fetch(weatherapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log (iconcode);
    const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
 }); //end of "then" arrow function



// forecast for 7 days
const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=e133193565792698f423478349cebc85&units=imperial";

fetch(forecastURL)
.then( (response) => response.json())
.then( (weatherinfo) => {
  console.log(weatherinfo);

  // document.getElementById("place").textContent = weatherinfo.name;

  let mylist = weatherinfo.list;

              let forecastDayNumber = todayDayNumber;

              for (i=0; i < mylist.length; i++) {

                  let time = mylist[i].dt_txt;

                  if (time.includes('21:00:00')) {
                          console.log("Found an entry with 21:00:00 in the time. It was report "+i+" from the mylist of 40");
                          forecastDayNumber += 1;
                          if (forecastDayNumber === 7){forecastDayNumber = 0;}
                          
                          let theDayName = document.createElement("h5");
                          theDayName.textContent = weekday[forecastDayNumber];

                          let theTemp = document.createElement("p");
                          theTemp.textContent = weatherinfo.list[i].main.temp + "\xB0";

                          let iconcode = weatherinfo.list[i].weather[0].icon;
                          let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
                          let theicon = document.createElement ('img');
                          theicon.src = iconPath;

                          let theDay = document.createElement ("div");
                          theDay.appendChild(theDayName);
                          theDay.appendChild(theTemp);
                          theDay.appendChild(theicon);

                          document.getElementById('weatherforecast').appendChild(theDay);

                          } //end if
                      
                        } //end for

}); // end of "then" arrow function