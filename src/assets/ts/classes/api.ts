// processing APIs

export class Api {
  // process weather api
  static async weather() {
    // options
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //     "X-RapidAPI-Key": "e23c52a475mshfbb622a88cf1387p13e0a0jsna1c83decdaba",
    //   },
    // };

    // const live = await fetch(
    //   "https://weatherapi-com.p.rapidapi.com/forecast.json?q=paris&days=3",
    //   options
    // );

    const test = await fetch("../../../../lorem.json");

    const res = await test.json();

    return res;
  }
}
