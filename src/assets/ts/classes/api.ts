// processing APIs
import { PrintData } from "./printdata";

export class Api {
  // process weather api
  static async weather(keyword: string) {
    // options
    const key = process.env.WEATHER_KEY as string;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": key,
      },
    };

    const live = await fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
        keyword +
        "&days=3",
      options
    );

    const res = await live.json();

    return res;
  }

  // get user loaction
  static async getCity() {
    // https://api.db-ip.com/v2/free/self
    // https://ipapi.co/json/
    // "https://api.ipdata.co?api-key=" + apiKey
    // "https://api.ipgeolocation.io/ipgeo?apiKey=" + apiKey
    // https://api.ipify.org?format=json
    // https://ipinfo.io/json

    if (localStorage.getItem("usrCity")) {
      PrintData.getApiData(localStorage.getItem("usrCity")!);
    } else {
      let token = process.env.IPDETECT_KEY as string;

      const cityInfo = await fetch("https://ipinfo.io?token=" + token);
      const res = await cityInfo.json();

      localStorage.setItem("usrCity", res.city);

      PrintData.getApiData(localStorage.getItem("usrCity")!);
    }
  }
}
