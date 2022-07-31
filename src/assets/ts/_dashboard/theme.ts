// this file control theme and its annimation
export class Theme {
  static toggleMode(): void {
    const body = document.querySelector<HTMLElement>("body")!;
    const modeItself = document.querySelector<HTMLElement>(".mode-itself")!;
    const themeAnim = document.querySelector<HTMLElement>(".theme-animation")!;
    const menu = document.querySelector<HTMLImageElement>(".menu-icon")!;
    const search = document.querySelector<HTMLImageElement>(".search-icon")!;

    modeItself.classList.toggle("active");

    if (modeItself.classList.contains("active")) {
      themeAnim.style.backgroundColor = "#fff";
      menu.src = "./icons/menu-light.png";
      search.src = "./icons/Search-light.svg";
      body.classList.remove("theme-1");
      body.classList.add("theme-2");
    } else {
      themeAnim.style.backgroundColor = "#000";
      menu.src = "./icons/menu-dark.svg";
      search.src = "./icons/Search-Dark.svg";
      body.classList.remove("theme-2");
      body.classList.add("theme-1");
    }
  }
}
