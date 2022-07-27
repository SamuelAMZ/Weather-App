import { DashboardFunc } from "./_dashboard/controls";
import { Theme } from "./_dashboard/theme";

export class DashboardEvents {
  // ---------------- events for the dashboard controls ----------------
  dashboardEvent(): void {
    const elements = DashboardFunc.callElements();

    // hide panel on click of the hide panel button
    elements.hideControl.addEventListener("click", (e) =>
      DashboardFunc.hideDashboard(e)
    );
    // mobile hide
    elements.hideControlMobile.addEventListener("click", (e) =>
      DashboardFunc.hideDashboard(e)
    );
    // mobile hide back
    elements.hideControlBack.addEventListener("click", (e) =>
      DashboardFunc.hideDashboard(e)
    );
  }

  // ---------------- events for the theme animations ----------------
  themeEvent(): void {
    // theme
    const theElement: HTMLElement = document.getElementById(
      "footer"
    ) as HTMLElement;
    // Make the DIV element draggable:
    Theme.dragElement(theElement);
    Theme.loadLocalTheme();
    Theme.bodyBackground();

    // add theme dynamically
    Theme.getElements().theme1.addEventListener("click", (e) => {
      Theme.themeAnimation(e);
      Theme.loadTheme(e);
      Theme.bodyBackground();
      Theme.changeAnimationDivPositionOnDrag();
    });
    Theme.getElements().theme2.addEventListener("click", (e) => {
      Theme.themeAnimation(e);
      Theme.loadTheme(e);
      Theme.bodyBackground();
      Theme.changeAnimationDivPositionOnDrag();
    });
    Theme.getElements().theme3.addEventListener("click", (e) => {
      Theme.themeAnimation(e);
      Theme.loadTheme(e);
      Theme.bodyBackground();
      Theme.changeAnimationDivPositionOnDrag();
    });
  }
}
