// this file control theme animations
let body: HTMLElement = document.querySelector("body")!;
let themes = document.querySelector("#footer") as HTMLDivElement;

export class Theme {
  constructor(
    public theme1: HTMLElement,
    public theme2: HTMLElement,
    public theme3: HTMLElement
  ) {
    this.theme1 = theme1;
    this.theme2 = theme2;
    this.theme3 = theme3;
  }

  static getElements() {
    let elms = new Theme(
      document.querySelector(".theme1")!,
      document.querySelector(".theme2")!,
      document.querySelector(".theme3")!
    );

    return elms;
  }

  static loadTheme(e: any): void {
    if (e.target.classList.contains("theme1")) {
      body.className = "";
      body.classList.add("theme-1");
      // localstorage
      localStorage.setItem("theme", "theme-1");

      setTimeout(() => {
        localStorage.setItem("prevTheme", "#0c2852");
      }, 10);
    }
    if (e.target.classList.contains("theme2")) {
      body.className = "";
      body.classList.add("theme-2");
      // localstorage
      localStorage.setItem("theme", "theme-2");

      setTimeout(() => {
        localStorage.setItem("prevTheme", "#212121");
      }, 10);
    }
    if (e.target.classList.contains("theme3")) {
      body.className = "";
      body.classList.add("theme-3");
      // localstorage
      localStorage.setItem("theme", "theme-3");

      setTimeout(() => {
        localStorage.setItem("prevTheme", "#4b2243");
      }, 10);
    }
  }

  static loadLocalTheme() {
    let currentTheme = localStorage.getItem("theme")!;

    body.className = "";
    body.classList.add(currentTheme);
  }

  static themeAnimation(e: any) {
    const animationDiv = document.querySelector(".animation")!;
    // empty animation div per click
    animationDiv.innerHTML = "";

    // create theme anime at each click
    let themeA = document.createElement("div");
    themeA.classList.add("theme-animation");

    animationDiv.appendChild(themeA);

    setTimeout(() => {
      themeA.classList.add("active");
    }, 1);
  }

  // set new background color to body
  static bodyBackground() {
    const prevTheme = localStorage.getItem("prevTheme")!;
    body.style.backgroundColor = prevTheme;
  }

  static changeAnimationDivPositionOnDrag() {
    let left: string = themes.style.left;
    let top = themes.style.top;

    const a = document.querySelector(".theme-animation") as HTMLElement;

    a.style.left = left;
    a.style.top = top;
  }

  static dragElement(elmnt: HTMLElement) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header")!.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: any) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e: any) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
