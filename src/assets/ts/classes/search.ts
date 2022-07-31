// this file takes care of the autocmplete feature
import { PrintData } from "./printdata";

export class Search {
  static async autocomplete(searchTerm: string) {
    if (searchTerm.length >= 3) {
      const apiKey = process.env.AUTOCOMPLET_KEY as string;

      const getAuto = await fetch(
        "https://api.geoapify.com/v1/geocode/autocomplete?text=" +
          searchTerm +
          "&limit=7&format=json&apiKey=" +
          apiKey
      );

      const res = await getAuto.json();
      let resArr = res.results;

      //   show result
      this.showAutocomplet(resArr, searchTerm);
    }
    if (searchTerm.length < 3) {
      const showAuto = document.getElementById("showAuto") as HTMLElement;
      showAuto.innerHTML = "";
    }
  }

  static showAutocomplet(resArr: [], searchTerm: string) {
    // remove raduis to the search bar
    const searchContainer = document.querySelector(
      ".search-input-container"
    ) as HTMLElement;
    searchContainer.style.borderRadius = "50px 50px 0 0";
    // show suggetion div
    const autoContainer = document.querySelector(
      ".autocomplete"
    ) as HTMLElement;
    autoContainer.style.display = "block";

    // append result
    const showAuto = document.getElementById("showAuto") as any;
    showAuto.innerHTML = "";

    resArr.forEach((res: any) => {
      if (res.city !== undefined && searchTerm.length <= res.city.length) {
        let newRes = document.createElement("li");
        newRes.innerText = `${res.city} - ${res.country}`;

        showAuto.appendChild(newRes);
      }
    });
    // remove duplicates
    Search.removeDuplicates();
  }

  static removeDuplicates(): void {
    let dupArr: string[] = [];
    const showAuto = document.getElementById("showAuto") as any;

    Array.from(showAuto.children).forEach((child: any) => {
      dupArr.push(child.innerText);
    });

    let uniqArr = [...new Set(dupArr)];
    showAuto.innerHTML = "";

    uniqArr.forEach((elm) => {
      let newRes = document.createElement("li");
      newRes.innerText = elm;

      showAuto.appendChild(newRes);
    });
  }

  // handle click on city autocompletes
  static handleClick(e: any): void {
    let cityArr = [];
    for (let i = 0; i < e.target.innerText.length; i++) {
      if (e.target.innerText[i] === "-") {
        break;
      } else {
        cityArr.push(e.target.innerText[i]);
      }
    }

    let keyword = cityArr.join("").trim();

    PrintData.getApiData(keyword);
  }
}
