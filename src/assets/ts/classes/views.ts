// this file manage the different screen appearances

export class Views {
  constructor(
    private firstScreen: HTMLElement,
    private secondScreen: HTMLElement,
    private thirdScreen: HTMLElement,
    private searchScreen: HTMLElement,
    private menuScreen: HTMLElement
  ) {
    this.firstScreen = firstScreen;
    this.secondScreen = secondScreen;
    this.thirdScreen = thirdScreen;
    this.searchScreen = searchScreen;
    this.menuScreen = menuScreen;
  }

  //   helper
  static getElements() {
    const elmts = new Views(
      document.querySelector(".first-screen-container")!,
      document.querySelector(".second-screen-container")!,
      document.querySelector(".third-screen-container")!,
      document.querySelector(".search-screen-container")!,
      document.querySelector(".menu-screen-container")!
    );

    return elmts;
  }

  //   show the second screen
  static secondScreen(): void {
    // hide the first and third screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().thirdScreen.style.display = "none";
    Views.getElements().searchScreen.style.display = "none";
    // Views.getElements().menuScreen.style.display = "none";
    Views.getElements().menuScreen.style.left = "-100%";

    document.querySelector<HTMLElement>(".close-menu")!.style.display = "none";
    // show the second screen
    Views.getElements().secondScreen.style.opacity = "1";
    Views.getElements().secondScreen.style.display = "block";
    // reset search view
    document.querySelector<HTMLInputElement>("#search")!.value = "";
    document.querySelector<HTMLElement>(".autocomplete")!.style.display =
      "none";
    document.querySelector<HTMLElement>(
      ".search-input-container"
    )!.style.borderRadius = "100px";
    // days cards entry animation
    const days = document.querySelectorAll<HTMLElement>(".days")!;
    Array.from(days).forEach((day: HTMLElement) => {
      Views.daysAnim(day);
    });
    // hide back element
    if (document.querySelector<HTMLElement>(".back-element")) {
      document.querySelector<HTMLElement>(".back-element")!.remove();
    }
  }

  //   show the third screen
  static thirdScreen(data: any[]): void {
    // hide the first and second screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().menuScreen.style.left = "-100%";
    Views.getElements().secondScreen.style.opacity = "0.2";

    // background color passing
    document.querySelector<HTMLElement>(".day-details")!.style.backgroundColor =
      data[0].color;
    // day title passing
    document.querySelector<HTMLElement>(".target-day")!.innerText = data[0].day;
    // image
    document.querySelector<HTMLImageElement>(".target-img")!.src = data[0].icon;
    // temp detail
    document.querySelector<HTMLElement>("#temp-detail-average")!.innerText =
      data[0].average;
    // small info
    document.querySelector<HTMLElement>("#temp-small")!.innerText =
      data[0].minmax;
    // time temps
    document.querySelector<HTMLElement>("#date1")!.innerText = data[0].date1;
    document.querySelector<HTMLElement>("#date2")!.innerText = data[0].date2;
    document.querySelector<HTMLElement>("#date3")!.innerText = data[0].date3;
    document.querySelector<HTMLElement>("#date4")!.innerText = data[0].date4;
    document.querySelector<HTMLElement>("#date5")!.innerText = data[0].date5;

    // show the third screen
    Views.getElements().thirdScreen.style.display = "block";
    Views.getElements().thirdScreen.classList.add("show");
    // show the background element
    Views.viewsBackground(Views.getElements().thirdScreen);
    // hide the background element
    Views.hideBackground(Views.getElements().thirdScreen);
  }

  //   show search view
  static searchView(): void {
    // hide the first, third and second screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().secondScreen.style.opacity = "0.2";
    Views.getElements().thirdScreen.style.display = "none";
    Views.getElements().menuScreen.style.left = "-100%";
    // Views.getElements().menuScreen.style.display = "none";

    // show the search screen
    Views.getElements().searchScreen.style.display = "flex";
    // focus
    document.querySelector<HTMLInputElement>("#search")!.focus();
    // show the background element
    Views.viewsBackground(Views.getElements().searchScreen);
    // hide the background element
    Views.hideBackground(Views.getElements().searchScreen);
    // close menu
    Views.closeSearch();

    // days cards entry animation
    const days = document.querySelectorAll<HTMLElement>(".days")!;
    Array.from(days).forEach((day: HTMLElement) => {
      Views.daysAnimReset(day);
    });

    document.querySelector<HTMLElement>(".close-menu")!.style.display = "none";
  }

  //   show menu view
  static menuView(): void {
    // hide the first, third and second screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().secondScreen.style.opacity = "0.2";
    Views.getElements().thirdScreen.style.display = "none";
    Views.getElements().searchScreen.style.display = "none";
    // show the search screen
    // Views.getElements().menuScreen.style.display = "flex";
    Views.getElements().menuScreen.style.left = "0";
    // show the background element
    Views.viewsBackground(Views.getElements().menuScreen);
    // hide the background element
    Views.hideBackground(Views.getElements().menuScreen);
    // close menu
    Views.closeMenu();
    document.querySelector<HTMLElement>(".close-menu")!.style.display = "block";

    // days cards entry animation
    const days = document.querySelectorAll<HTMLElement>(".days")!;
    Array.from(days).forEach((day: HTMLElement) => {
      Views.daysAnimReset(day);
    });
  }

  //   close search
  static closeSearch(): void {
    const closeIcon = document.querySelector(".close-search") as HTMLElement;
    closeIcon.addEventListener("click", (): void => {
      Views.secondScreen();
    });
  }

  //   close menu
  static closeMenu(): void {
    const closeIcon = document.querySelector(".close-menu") as HTMLElement;
    closeIcon.addEventListener("click", (): void => {
      Views.secondScreen();
    });
  }

  //   manage views background element
  static viewsBackground(currentParent: HTMLElement): void {
    // create and append the element
    let backElem: HTMLElement = document.createElement("div");
    backElem.classList.add("back-element");
    currentParent.appendChild(backElem);
  }

  //   hide the parent elment on click of the background element
  static hideBackground(currentParent: HTMLElement) {
    currentParent.addEventListener("click", (e: any) => {
      if (e.target.className === "back-element") {
        Views.secondScreen();
        e.target.remove();
      }
    });
  }

  // load loader
  static loader() {
    // hide the first, third and second screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().secondScreen.style.opacity = "0.2";
    Views.getElements().thirdScreen.style.display = "none";
    // Views.getElements().menuScreen.style.display = "none";
    Views.getElements().menuScreen.style.left = "-100%";
    Views.getElements().searchScreen.style.display = "none";

    document.querySelector<HTMLElement>(".close-menu")!.style.display = "none";

    // appearance of the loader
    document.querySelector<HTMLElement>(".section-animation")!.style.display =
      "flex";

    let timeoutApp = setTimeout(() => {
      // make disapper of the loader
      document.querySelector<HTMLElement>(".section-animation")!.style.display =
        "none";
      // show second screen
      Views.secondScreen();
    }, 2000);
  }

  // days entry animation
  static daysAnim(day: HTMLElement): void {
    day.style.marginTop = "0rem";
  }

  // reset days entry animation
  static daysAnimReset(day: HTMLElement): void {
    day.style.marginTop = "2rem";
  }
}
