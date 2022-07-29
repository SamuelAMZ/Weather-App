// getting and pasing data for third screen
import { Api } from "./api";

export class ThirdData {
  static gettingData(check: string): any[] {
    // get data from local storage
    const preDataArr: string = localStorage.getItem("dataArr") as string;
    const dataArr = JSON.parse(preDataArr);

    // getting data
    let data: any[] = [];
    if (check === "un") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#firstDay")!.innerText,
        color: "#28e0ae",
        icon: document.querySelector<HTMLImageElement>("#icon1")!.src,
        average: document.querySelector<HTMLElement>("#average1")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax1")!.innerText,
        date1: dataArr[22].minuit,
        date2: dataArr[22].sixam,
        date3: dataArr[22].twelve,
        date4: dataArr[22].height,
        date5: dataArr[22].twentytwo,
      };
    }
    if (check === "deu") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#secondDay")!.innerText,
        color: "#ff0090",
        icon: document.querySelector<HTMLImageElement>("#icon2")!.src,
        average: document.querySelector<HTMLElement>("#average2")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax2")!.innerText,
        date1: dataArr[23].minuit,
        date2: dataArr[23].sixam,
        date3: dataArr[23].twelve,
        date4: dataArr[23].height,
        date5: dataArr[23].twentytwo,
      };
    }
    if (check === "tro") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#thirdDay")!.innerText,
        color: "#cb8f0e",
        icon: document.querySelector<HTMLImageElement>("#icon3")!.src,
        average: document.querySelector<HTMLElement>("#average3")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax3")!.innerText,
        date1: dataArr[24].minuit,
        date2: dataArr[24].sixam,
        date3: dataArr[24].twelve,
        date4: dataArr[24].height,
        date5: dataArr[24].twentytwo,
      };
    }
    if (check === "qua") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#fourDay")!.innerText,
        color: "#0090ff",
        icon: document.querySelector<HTMLImageElement>("#icon4")!.src,
        average: document.querySelector<HTMLElement>("#average4")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax4")!.innerText,
        date1: dataArr[23].minuit,
        date2: dataArr[23].sixam,
        date3: dataArr[23].twelve,
        date4: dataArr[23].height,
        date5: dataArr[23].twentytwo,
      };
    }
    if (check === "cin") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#fiveDay")!.innerText,
        color: "#dc0000",
        icon: document.querySelector<HTMLImageElement>("#icon5")!.src,
        average: document.querySelector<HTMLElement>("#average5")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax5")!.innerText,
        date1: dataArr[24].minuit,
        date2: dataArr[24].sixam,
        date3: dataArr[24].twelve,
        date4: dataArr[24].height,
        date5: dataArr[24].twentytwo,
      };
    }
    if (check === "six") {
      data[0] = {
        day: document.querySelector<HTMLElement>("#sixDay")!.innerText,
        color: "#0051ff",
        icon: document.querySelector<HTMLImageElement>("#icon6")!.src,
        average: document.querySelector<HTMLElement>("#average6")!.innerText,
        minmax: document.querySelector<HTMLElement>("#minmax6")!.innerText,
        date1: dataArr[22].minuit,
        date2: dataArr[22].sixam,
        date3: dataArr[22].twelve,
        date4: dataArr[22].height,
        date5: dataArr[22].twentytwo,
      };
    }
    return data;
  }
}
