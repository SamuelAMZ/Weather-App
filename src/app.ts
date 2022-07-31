import "./assets/scss/style.scss";
import { Events } from "./assets/ts/index";
import { Api } from "./assets/ts/classes/api";
import { PrintData } from "./assets/ts/classes/printdata";
import { Search } from "./assets/ts/classes/search";
import { Views } from "./assets/ts/classes/views";

// initialize events
const events = new Events(
  document.querySelector(".start")!,
  document.querySelectorAll(".days")!,
  document.querySelector(".close-button")!,
  document.querySelector(".search-icon")!,
  document.querySelector(".menu-icon")!
);

window.addEventListener("DOMContentLoaded", () => {
  events.showScreens();
  // load user city data
  Api.getCity();
});

// prevent default the serach form
const searchingForm: HTMLElement = document.querySelector(
  "#searchForm"
) as HTMLElement;
searchingForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
});

// show autocomplete town results
const searchingBar: HTMLElement = document.querySelector(
  "#search"
) as HTMLElement;
searchingBar.addEventListener("input", (e: any): void => {
  const searchterm: string = e.target.value;
  Search.autocomplete(searchterm);
});

// handle click on city autocompletes
const showAuto = document.getElementById("showAuto") as any;
showAuto.addEventListener("click", (e: any) => {
  // load loader
  Views.loader();
  // show result
  Search.handleClick(e);
});

// handle featured city
const featuredCity = document.querySelector<HTMLElement>(".featured-element")!;
featuredCity.addEventListener("click", () => {
  // load loader
  Views.loader();
  // data of the featured city (only singapore for the moment)
  PrintData.getApiData("Montréal");
});

// handle common search
const commonSearch = document.querySelector<HTMLElement>(".cities-suggestion")!;
commonSearch.addEventListener("click", (e: any) => {
  // load loader
  Views.loader();
  // load city clicked data
  PrintData.getApiData(e.target.innerText);
});
