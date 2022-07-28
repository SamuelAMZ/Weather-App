// this file manage the different screen appearances

export class Views {
  constructor(
    private firstScreen: HTMLElement,
    private secondScreen: HTMLElement,
    private thirdScreen: HTMLElement
  ) {
    this.firstScreen = firstScreen;
    this.secondScreen = secondScreen;
    this.thirdScreen = thirdScreen;
  }

  //   helper
  static getElements() {
    const elmts = new Views(
      document.querySelector(".first-screen-container")!,
      document.querySelector(".second-screen-container")!,
      document.querySelector(".third-screen-container")!
    );

    return elmts;
  }

  //   show the second screen
  static secondScreen(): void {
    // hide the first and third screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().thirdScreen.style.display = "none";
    // show the second screen
    Views.getElements().secondScreen.style.display = "block";
  }

  //   show the third screen
  static thirdScreen(): void {
    // hide the first and second screen
    Views.getElements().firstScreen.style.display = "none";
    Views.getElements().secondScreen.style.display = "none";
    // show the third screen
    Views.getElements().thirdScreen.style.display = "block";
  }
}
