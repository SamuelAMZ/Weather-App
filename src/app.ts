import { DashboardEvents } from "./assets/ts/index";
import "./assets/scss/style.scss";

const AllEvents = new DashboardEvents();

// ---------------- events for the dashboard controls ----------------
window.addEventListener("DOMContentLoaded", (): void => {
  // dashboard events
  AllEvents.dashboardEvent();
  AllEvents.themeEvent();
  // app events
});
