import { Views } from "./classes/views";

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
      day.addEventListener("click", () => {
        Views.thirdScreen();
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
