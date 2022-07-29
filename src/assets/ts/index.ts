import { Views } from "./classes/views";
import { ThirdData } from "../ts/classes/dataThird";

export class Events {
  constructor(
    private startButton: HTMLElement,
    private otherDays: NodeList,
    private closeButton: HTMLElement,
    private searchIcon: HTMLElement,
    private menuIcon: HTMLElement
  ) {
    this.startButton = startButton;
    this.otherDays = otherDays;
    this.closeButton = closeButton;
    this.searchIcon = searchIcon;
    this.menuIcon = menuIcon;
  }

  // events for the pages appearance
  showScreens(): void {
    // show the second screen
    this.startButton.addEventListener("click", (): void => {
      Views.secondScreen();
    });
    this.closeButton.addEventListener("click", () => {
      Views.secondScreen();
    });

    // show the third screen
    Array.from(this.otherDays).forEach((day) => {
      day.addEventListener("click", (e: any) => {
        const check: string = e.target.getAttribute("data-d");
        const data: any[] = ThirdData.gettingData(check);
        Views.thirdScreen(data);
      });
    });
    const otherDays: HTMLElement[] = [];
    otherDays[0] = document.querySelector<HTMLElement>("#todays")!;
    otherDays[1] = document.querySelector<HTMLElement>("#tomorrows")!;
    otherDays[2] = document.querySelector<HTMLElement>("#threeDay")!;

    otherDays.forEach((otherDay) => {
      otherDay.addEventListener("click", () => {
        let check: string = "un";
        if (otherDay.getAttribute("id") === "todays") {
          check = "un";
        }
        if (otherDay.getAttribute("id") === "tomorrows") {
          check = "deu";
        }
        if (otherDay.getAttribute("id") === "threeDay") {
          check = "tro";
        }
        const data: any[] = ThirdData.gettingData(check);
        Views.thirdScreen(data);
      });
    });

    // show search screen
    this.searchIcon.addEventListener("click", (): void => {
      Views.searchView();
    });

    // show menu screen
    this.menuIcon.addEventListener("click", (): void => {
      Views.menuView();
    });
  }
}
