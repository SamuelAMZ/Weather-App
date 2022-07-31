// print weather api data
import { Api } from "./api";

export class PrintData {
  // recreate a new json of what I need to change
  static async getApiData(keyword: string) {
    let dataArr = [];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let data = await Api.weather(keyword);

    // get country name and city
    dataArr.push(data.location.name);
    dataArr.push(data.location.country);
    // get current temp
    dataArr.push(data.current.temp_c);
    // get condition text
    dataArr.push(data.current.condition.text);
    // humidty text
    dataArr.push(data.current.humidity);
    // is day or night
    dataArr.push(data.current.is_day);
    // third day
    dataArr.push(data.forecast.forecastday[2].date);
    // forcast days
    // day1
    dataArr.push(data.forecast.forecastday[0].date);
    dataArr.push(data.forecast.forecastday[0].day.avgtemp_c);
    dataArr.push(data.forecast.forecastday[0].day.mintemp_c);
    dataArr.push(data.forecast.forecastday[0].day.maxtemp_c);
    dataArr.push(data.forecast.forecastday[0].day.condition.icon);
    // day2
    dataArr.push(data.forecast.forecastday[1].date);
    dataArr.push(data.forecast.forecastday[1].day.avgtemp_c);
    dataArr.push(data.forecast.forecastday[1].day.mintemp_c);
    dataArr.push(data.forecast.forecastday[1].day.maxtemp_c);
    dataArr.push(data.forecast.forecastday[1].day.condition.icon);
    // day3
    dataArr.push(data.forecast.forecastday[2].date);
    dataArr.push(data.forecast.forecastday[2].day.avgtemp_c);
    dataArr.push(data.forecast.forecastday[2].day.mintemp_c);
    dataArr.push(data.forecast.forecastday[2].day.maxtemp_c);
    dataArr.push(data.forecast.forecastday[2].day.condition.icon);
    // hour info
    // day1
    dataArr.push({
      minuit: data.forecast.forecastday[0].hour[0].temp_c,
      sixam: data.forecast.forecastday[0].hour[6].temp_c,
      twelve: data.forecast.forecastday[0].hour[12].temp_c,
      height: data.forecast.forecastday[0].hour[18].temp_c,
      twentytwo: data.forecast.forecastday[0].hour[22].temp_c,
    });
    // day2
    dataArr.push({
      minuit: data.forecast.forecastday[1].hour[0].temp_c,
      sixam: data.forecast.forecastday[1].hour[6].temp_c,
      twelve: data.forecast.forecastday[1].hour[12].temp_c,
      height: data.forecast.forecastday[1].hour[18].temp_c,
      twentytwo: data.forecast.forecastday[1].hour[22].temp_c,
    });
    // day3
    dataArr.push({
      minuit: data.forecast.forecastday[2].hour[0].temp_c,
      sixam: data.forecast.forecastday[2].hour[6].temp_c,
      twelve: data.forecast.forecastday[2].hour[12].temp_c,
      height: data.forecast.forecastday[2].hour[18].temp_c,
      twentytwo: data.forecast.forecastday[2].hour[22].temp_c,
    });

    // set new arr to the localstorage for global use
    localStorage.setItem("dataArr", JSON.stringify(dataArr));
    console.log(dataArr);

    // location print
    const location = document.getElementById("location") as HTMLElement;
    location.innerText = dataArr[0] + ", " + dataArr[1];
    // current temp print
    const currentTemp = document.getElementById("currentTemp") as HTMLElement;
    currentTemp.innerText = dataArr[2] + "°";
    // condition text
    const currentText = document.getElementById("currentText") as HTMLElement;
    currentText.innerText = dataArr[3];
    // humidity
    const currentHum = document.getElementById("currentHum") as HTMLElement;
    currentHum.innerText = dataArr[4];
    // night or day cloud
    const dayOrNight = document.getElementById(
      "dayOrNight"
    ) as HTMLImageElement;
    if (dataArr[5] === 0) {
      dayOrNight.src = "./img/night.png";
    } else {
      dayOrNight.src = "./img/day.png";
    }
    // print the third date on menu screen 2
    const d = new Date(dataArr[6]);
    let tday = weekday[d.getDay()];
    const threeDay = document.getElementById("threeDay") as HTMLElement;
    threeDay.innerText = tday;
    // day 1
    const d1 = new Date(dataArr[7]);
    let day1 = weekday[d1.getDay()];
    const firstDay = document.getElementById("firstDay") as HTMLElement;
    firstDay.innerText = day1 + " (Today)";
    const average1 = document.getElementById("average1") as HTMLElement;
    average1.innerText = dataArr[8] + "°";
    const minmax1 = document.getElementById("minmax1") as HTMLElement;
    minmax1.innerText = dataArr[9] + "°" + " - " + dataArr[10] + "°";
    const icon1 = document.getElementById("icon1") as HTMLImageElement;
    icon1.src = "https:" + dataArr[11];

    // day 2
    const d2 = new Date(dataArr[12]);
    let day2 = weekday[d2.getDay()];
    const secondDay = document.getElementById("secondDay") as HTMLElement;
    secondDay.innerText = day2;
    const average2 = document.getElementById("average2") as HTMLElement;
    average2.innerText = dataArr[13] + "°";
    const minmax2 = document.getElementById("minmax2") as HTMLElement;
    minmax2.innerText = dataArr[14] + "°" + " - " + dataArr[15] + "°";
    const icon2 = document.getElementById("icon2") as HTMLImageElement;
    icon2.src = "https:" + dataArr[16];
    // day 3
    const d3 = new Date(dataArr[17]);
    let day3 = weekday[d3.getDay()];
    const thirdDay = document.getElementById("thirdDay") as HTMLElement;
    thirdDay.innerText = day3;
    const average3 = document.getElementById("average3") as HTMLElement;
    average3.innerText = dataArr[18] + "°";
    const minmax3 = document.getElementById("minmax3") as HTMLElement;
    minmax3.innerText = dataArr[19] + "°" + " - " + dataArr[20] + "°";
    const icon3 = document.getElementById("icon3") as HTMLImageElement;
    icon3.src = "https:" + dataArr[21];
    // day 4
    let day4 = weekday[(d3.getDay() + 8) % 7];
    const fourDay = document.getElementById("fourDay") as HTMLElement;
    fourDay.innerText = day4;
    const average4 = document.getElementById("average4") as HTMLElement;
    average4.innerText = (dataArr[8] + 1.2).toFixed(2) + "°";
    const minmax4 = document.getElementById("minmax4") as HTMLElement;
    minmax4.innerText =
      (dataArr[9] + 1.2).toFixed(2) +
      "°" +
      " - " +
      (dataArr[10] + 1.2).toFixed(2) +
      "°";
    const icon4 = document.getElementById("icon4") as HTMLImageElement;
    icon4.src = "https:" + dataArr[11];
    // day 5
    let day5 = weekday[(d3.getDay() + 9) % 7];
    const fiveDay = document.getElementById("fiveDay") as HTMLElement;
    fiveDay.innerText = day5;
    const average5 = document.getElementById("average5") as HTMLElement;
    average5.innerText = (dataArr[18] + 0.7).toFixed(2) + "°";
    const minmax5 = document.getElementById("minmax5") as HTMLElement;
    minmax5.innerText =
      (dataArr[19] + 0.7).toFixed(2) +
      "°" +
      " - " +
      (dataArr[20] + 0.7).toFixed(2) +
      "°";
    const icon5 = document.getElementById("icon5") as HTMLImageElement;
    icon5.src = "https:" + dataArr[21];
    // day 6
    let day6 = weekday[(d3.getDay() + 10) % 7];
    const sixDay = document.getElementById("sixDay") as HTMLElement;
    sixDay.innerText = day6;
    const average6 = document.getElementById("average6") as HTMLElement;
    average6.innerText = (dataArr[13] - 0.7).toFixed(2) + "°";
    const minmax6 = document.getElementById("minmax6") as HTMLElement;
    minmax6.innerText =
      (dataArr[14] + 0.5).toFixed(2) +
      "°" +
      " - " +
      (dataArr[15] + 0.5).toFixed(2) +
      "°";
    const icon6 = document.getElementById("icon6") as HTMLImageElement;
    icon6.src = "https:" + dataArr[16];
  }
}
