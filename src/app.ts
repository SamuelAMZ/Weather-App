import "./assets/scss/style.scss";
import { Events } from "./assets/ts/index";

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
});
