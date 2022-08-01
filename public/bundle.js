(()=>{"use strict";class e{constructor(e,t,n,c,r){this.firstScreen=e,this.secondScreen=t,this.thirdScreen=n,this.searchScreen=c,this.menuScreen=r,this.firstScreen=e,this.secondScreen=t,this.thirdScreen=n,this.searchScreen=c,this.menuScreen=r}static getElements(){return new e(document.querySelector(".first-screen-container"),document.querySelector(".second-screen-container"),document.querySelector(".third-screen-container"),document.querySelector(".search-screen-container"),document.querySelector(".menu-screen-container"))}static secondScreen(){e.getElements().firstScreen.style.display="none",e.getElements().thirdScreen.style.display="none",e.getElements().searchScreen.style.display="none",e.getElements().menuScreen.style.left="-100%",e.getElements().secondScreen.style.opacity="1",e.getElements().secondScreen.style.display="block",document.querySelector("#search").value="",document.querySelector(".autocomplete").style.display="none",document.querySelector(".search-input-container").style.borderRadius="100px";const t=document.querySelectorAll(".days");Array.from(t).forEach((t=>{e.daysAnim(t)})),document.querySelector(".back-element")&&document.querySelector(".back-element").remove()}static thirdScreen(t){e.getElements().firstScreen.style.display="none",e.getElements().menuScreen.style.left="-100%",e.getElements().secondScreen.style.opacity="0.2",document.querySelector(".day-details").style.backgroundColor=t[0].color,document.querySelector(".target-day").innerText=t[0].day,document.querySelector(".target-img").src=t[0].icon,document.querySelector("#temp-detail-average").innerText=t[0].average,document.querySelector("#temp-small").innerText=t[0].minmax,document.querySelector("#date1").innerText=t[0].date1,document.querySelector("#date2").innerText=t[0].date2,document.querySelector("#date3").innerText=t[0].date3,document.querySelector("#date4").innerText=t[0].date4,document.querySelector("#date5").innerText=t[0].date5,e.getElements().thirdScreen.style.display="block",e.getElements().thirdScreen.classList.add("show"),e.viewsBackground(e.getElements().thirdScreen),e.hideBackground(e.getElements().thirdScreen);const n=document.querySelectorAll(".days");Array.from(n).forEach((t=>{e.daysAnimReset(t)}))}static searchView(){e.getElements().firstScreen.style.display="none",e.getElements().secondScreen.style.opacity="0.2",e.getElements().thirdScreen.style.display="none",e.getElements().menuScreen.style.left="-100%",e.getElements().searchScreen.style.display="flex",document.querySelector("#search").focus(),e.viewsBackground(e.getElements().searchScreen),e.hideBackground(e.getElements().searchScreen),e.closeSearch();const t=document.querySelectorAll(".days");Array.from(t).forEach((t=>{e.daysAnimReset(t)}))}static menuView(){e.getElements().firstScreen.style.display="none",e.getElements().secondScreen.style.opacity="0.2",e.getElements().thirdScreen.style.display="none",e.getElements().searchScreen.style.display="none",e.getElements().menuScreen.style.left="0",e.viewsBackground(e.getElements().menuScreen),e.hideBackground(e.getElements().menuScreen),e.closeMenu();const t=document.querySelectorAll(".days");Array.from(t).forEach((t=>{e.daysAnimReset(t)}))}static closeSearch(){document.querySelector(".close-search").addEventListener("click",(()=>{e.secondScreen()}))}static closeMenu(){document.querySelector(".close-menu").addEventListener("click",(()=>{e.secondScreen()}))}static viewsBackground(e){let t=document.createElement("div");t.classList.add("back-element"),e.appendChild(t)}static hideBackground(t){t.addEventListener("click",(t=>{"back-element"===t.target.className&&(e.secondScreen(),t.target.remove())}))}static loader(){e.getElements().firstScreen.style.display="none",e.getElements().secondScreen.style.opacity="0.2",e.getElements().thirdScreen.style.display="none",e.getElements().menuScreen.style.left="-100%",e.getElements().searchScreen.style.display="none",document.querySelector(".section-animation").style.display="flex",setTimeout((()=>{document.querySelector(".section-animation").style.display="none",e.secondScreen()}),2e3)}static daysAnim(e){e.style.marginTop="0rem"}static daysAnimReset(e){e.style.marginTop="2rem"}}class t{static gettingData(e){const t=localStorage.getItem("dataArr"),n=JSON.parse(t);let c=[];return"un"===e&&(c[0]={day:document.querySelector("#firstDay").innerText,color:"#28e0ae",icon:document.querySelector("#icon1").src,average:document.querySelector("#average1").innerText,minmax:document.querySelector("#minmax1").innerText,date1:n[22].minuit,date2:n[22].sixam,date3:n[22].twelve,date4:n[22].height,date5:n[22].twentytwo}),"deu"===e&&(c[0]={day:document.querySelector("#secondDay").innerText,color:"#ff0090",icon:document.querySelector("#icon2").src,average:document.querySelector("#average2").innerText,minmax:document.querySelector("#minmax2").innerText,date1:n[23].minuit,date2:n[23].sixam,date3:n[23].twelve,date4:n[23].height,date5:n[23].twentytwo}),"tro"===e&&(c[0]={day:document.querySelector("#thirdDay").innerText,color:"#cb8f0e",icon:document.querySelector("#icon3").src,average:document.querySelector("#average3").innerText,minmax:document.querySelector("#minmax3").innerText,date1:n[24].minuit,date2:n[24].sixam,date3:n[24].twelve,date4:n[24].height,date5:n[24].twentytwo}),"qua"===e&&(c[0]={day:document.querySelector("#fourDay").innerText,color:"#0090ff",icon:document.querySelector("#icon4").src,average:document.querySelector("#average4").innerText,minmax:document.querySelector("#minmax4").innerText,date1:n[23].minuit,date2:n[23].sixam,date3:n[23].twelve,date4:n[23].height,date5:n[23].twentytwo}),"cin"===e&&(c[0]={day:document.querySelector("#fiveDay").innerText,color:"#dc0000",icon:document.querySelector("#icon5").src,average:document.querySelector("#average5").innerText,minmax:document.querySelector("#minmax5").innerText,date1:n[24].minuit,date2:n[24].sixam,date3:n[24].twelve,date4:n[24].height,date5:n[24].twentytwo}),"six"===e&&(c[0]={day:document.querySelector("#sixDay").innerText,color:"#0051ff",icon:document.querySelector("#icon6").src,average:document.querySelector("#average6").innerText,minmax:document.querySelector("#minmax6").innerText,date1:n[22].minuit,date2:n[22].sixam,date3:n[22].twelve,date4:n[22].height,date5:n[22].twentytwo}),c}}class n{static getApiData(e){return t=this,n=void 0,o=function*(){let t=[];const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let c=yield r.weather(e);t.push(c.location.name),t.push(c.location.country),t.push(c.current.temp_c),t.push(c.current.condition.text),t.push(c.current.humidity),t.push(c.current.is_day),t.push(c.forecast.forecastday[2].date),t.push(c.forecast.forecastday[0].date),t.push(c.forecast.forecastday[0].day.avgtemp_c),t.push(c.forecast.forecastday[0].day.mintemp_c),t.push(c.forecast.forecastday[0].day.maxtemp_c),t.push(c.forecast.forecastday[0].day.condition.icon),t.push(c.forecast.forecastday[1].date),t.push(c.forecast.forecastday[1].day.avgtemp_c),t.push(c.forecast.forecastday[1].day.mintemp_c),t.push(c.forecast.forecastday[1].day.maxtemp_c),t.push(c.forecast.forecastday[1].day.condition.icon),t.push(c.forecast.forecastday[2].date),t.push(c.forecast.forecastday[2].day.avgtemp_c),t.push(c.forecast.forecastday[2].day.mintemp_c),t.push(c.forecast.forecastday[2].day.maxtemp_c),t.push(c.forecast.forecastday[2].day.condition.icon),t.push({minuit:c.forecast.forecastday[0].hour[0].temp_c,sixam:c.forecast.forecastday[0].hour[6].temp_c,twelve:c.forecast.forecastday[0].hour[12].temp_c,height:c.forecast.forecastday[0].hour[18].temp_c,twentytwo:c.forecast.forecastday[0].hour[22].temp_c}),t.push({minuit:c.forecast.forecastday[1].hour[0].temp_c,sixam:c.forecast.forecastday[1].hour[6].temp_c,twelve:c.forecast.forecastday[1].hour[12].temp_c,height:c.forecast.forecastday[1].hour[18].temp_c,twentytwo:c.forecast.forecastday[1].hour[22].temp_c}),t.push({minuit:c.forecast.forecastday[2].hour[0].temp_c,sixam:c.forecast.forecastday[2].hour[6].temp_c,twelve:c.forecast.forecastday[2].hour[12].temp_c,height:c.forecast.forecastday[2].hour[18].temp_c,twentytwo:c.forecast.forecastday[2].hour[22].temp_c}),t.push(c.location.localtime);let o=[];for(let e=0;e<16;e++)e>=11&&o.push(t[25][e]);localStorage.setItem("dataArr",JSON.stringify(t)),console.log(t),document.getElementById("location").innerText=t[0]+", "+t[1]+" - "+o.join(""),document.getElementById("currentTemp").innerText=t[2]+"°",document.getElementById("currentText").innerText=t[3],document.getElementById("currentHum").innerText=t[4];const a=document.getElementById("dayOrNight");0===t[5]?a.src="./img/night.png":a.src="./img/day.png";let s=n[new Date(t[6]).getDay()];document.getElementById("threeDay").innerText=s;let i=n[new Date(t[7]).getDay()];document.getElementById("firstDay").innerText=i+" (Today)",document.getElementById("average1").innerText=t[8]+"°",document.getElementById("minmax1").innerText=t[9]+"° - "+t[10]+"°",document.getElementById("icon1").src="https:"+t[11];let d=n[new Date(t[12]).getDay()];document.getElementById("secondDay").innerText=d,document.getElementById("average2").innerText=t[13]+"°",document.getElementById("minmax2").innerText=t[14]+"° - "+t[15]+"°",document.getElementById("icon2").src="https:"+t[16];const l=new Date(t[17]);let m=n[l.getDay()];document.getElementById("thirdDay").innerText=m,document.getElementById("average3").innerText=t[18]+"°",document.getElementById("minmax3").innerText=t[19]+"° - "+t[20]+"°",document.getElementById("icon3").src="https:"+t[21];let u=n[(l.getDay()+8)%7];document.getElementById("fourDay").innerText=u,document.getElementById("average4").innerText=(t[8]+1.2).toFixed(2)+"°",document.getElementById("minmax4").innerText=(t[9]+1.2).toFixed(2)+"° - "+(t[10]+1.2).toFixed(2)+"°",document.getElementById("icon4").src="https:"+t[11];let y=n[(l.getDay()+9)%7];document.getElementById("fiveDay").innerText=y,document.getElementById("average5").innerText=(t[18]+.7).toFixed(2)+"°",document.getElementById("minmax5").innerText=(t[19]+.7).toFixed(2)+"° - "+(t[20]+.7).toFixed(2)+"°",document.getElementById("icon5").src="https:"+t[21];let h=n[(l.getDay()+10)%7];document.getElementById("sixDay").innerText=h,document.getElementById("average6").innerText=(t[13]-.7).toFixed(2)+"°",document.getElementById("minmax6").innerText=(t[14]+.5).toFixed(2)+"° - "+(t[15]+.5).toFixed(2)+"°",document.getElementById("icon6").src="https:"+t[16];const g=document.querySelector("body"),f=document.querySelector(".mode-itself"),S=document.querySelector(".theme-animation"),p=document.querySelector(".menu-icon"),x=document.querySelector(".search-icon");0===t[5]&&(f.classList.add("active"),S.style.backgroundColor="#fff",p.src="./icons/menu-light.png",x.src="./icons/Search-light.svg",g.classList.remove("theme-1"),g.classList.add("theme-2")),1===t[5]&&(f.classList.remove("active"),S.style.backgroundColor="#000",p.src="./icons/menu-dark.svg",x.src="./icons/Search-Dark.svg",g.classList.remove("theme-2"),g.classList.add("theme-1"))},new((c=void 0)||(c=Promise))((function(e,r){function a(e){try{i(o.next(e))}catch(e){r(e)}}function s(e){try{i(o.throw(e))}catch(e){r(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(a,s)}i((o=o.apply(t,n||[])).next())}));var t,n,c,o}}var c=function(e,t,n,c){return new(n||(n=Promise))((function(r,o){function a(e){try{i(c.next(e))}catch(e){o(e)}}function s(e){try{i(c.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}i((c=c.apply(e,t||[])).next())}))};class r{static weather(e){return c(this,void 0,void 0,(function*(){const t=yield fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q="+e+"&days=3",{method:"GET",headers:{"X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com","X-RapidAPI-Key":"e23c52a475mshfbb622a88cf1387p13e0a0jsna1c83decdaba"}});return yield t.json()}))}static getCity(){return c(this,void 0,void 0,(function*(){if(localStorage.getItem("usrCity"))n.getApiData(localStorage.getItem("usrCity"));else{let e="8158aee3583d3c";const t=yield fetch("https://ipinfo.io?token="+e),c=yield t.json();localStorage.setItem("usrCity",c.city),n.getApiData(localStorage.getItem("usrCity"))}}))}}class o{static autocomplete(e){return t=this,n=void 0,r=function*(){if(e.length>=3){const t="a4988cdb12ea498daaead2d8241b9f8e",n=yield fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+e+"&limit=7&format=json&apiKey="+t);let c=(yield n.json()).results;this.showAutocomplet(c,e)}e.length<3&&(document.getElementById("showAuto").innerHTML="")},new((c=void 0)||(c=Promise))((function(e,o){function a(e){try{i(r.next(e))}catch(e){o(e)}}function s(e){try{i(r.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(a,s)}i((r=r.apply(t,n||[])).next())}));var t,n,c,r}static showAutocomplet(e,t){document.querySelector(".search-input-container").style.borderRadius="50px 50px 0 0",document.querySelector(".autocomplete").style.display="block";const n=document.getElementById("showAuto");n.innerHTML="",e.forEach((e=>{if(void 0!==e.city&&t.length<=e.city.length){let t=document.createElement("li");t.innerText=`${e.city} - ${e.country}`,n.appendChild(t)}})),o.removeDuplicates()}static removeDuplicates(){let e=[];const t=document.getElementById("showAuto");Array.from(t.children).forEach((t=>{e.push(t.innerText)}));let n=[...new Set(e)];t.innerHTML="",n.forEach((e=>{let n=document.createElement("li");n.innerText=e,t.appendChild(n)}))}static handleClick(e){let t=[];for(let n=0;n<e.target.innerText.length&&"-"!==e.target.innerText[n];n++)t.push(e.target.innerText[n]);let c=t.join("").trim();n.getApiData(c)}}const a=new class{constructor(e,t,n,c,r){this.startButton=e,this.otherDays=t,this.closeButton=n,this.searchIcon=c,this.menuIcon=r,this.startButton=e,this.otherDays=t,this.closeButton=n,this.searchIcon=c,this.menuIcon=r}showScreens(){this.startButton.addEventListener("click",(()=>{e.secondScreen(),e.loader();const t=document.querySelectorAll(".days");Array.from(t).forEach((t=>{e.daysAnimReset(t)}))})),this.closeButton.addEventListener("click",(()=>{e.secondScreen()})),Array.from(this.otherDays).forEach((n=>{n.addEventListener("click",(n=>{const c=n.target.getAttribute("data-d"),r=t.gettingData(c);e.thirdScreen(r)}))}));const n=[];n[0]=document.querySelector("#todays"),n[1]=document.querySelector("#tomorrows"),n[2]=document.querySelector("#threeDay"),n.forEach((n=>{n.addEventListener("click",(()=>{let c="un";"todays"===n.getAttribute("id")&&(c="un"),"tomorrows"===n.getAttribute("id")&&(c="deu"),"threeDay"===n.getAttribute("id")&&(c="tro");const r=t.gettingData(c);e.thirdScreen(r)}))})),this.searchIcon.addEventListener("click",(()=>{e.searchView()})),document.querySelector("#search-input-elements").addEventListener("click",(()=>{e.searchView()})),this.menuIcon.addEventListener("click",(()=>{e.menuView()}))}}(document.querySelector(".start"),document.querySelectorAll(".days"),document.querySelector(".close-button"),document.querySelector(".search-icon"),document.querySelector(".menu-icon"));window.addEventListener("DOMContentLoaded",(()=>{a.showScreens(),r.getCity()})),document.querySelector("#searchForm").addEventListener("submit",(e=>{e.preventDefault()})),document.querySelector("#search").addEventListener("input",(e=>{const t=e.target.value;o.autocomplete(t)})),document.getElementById("showAuto").addEventListener("click",(t=>{e.loader(),o.handleClick(t)})),document.querySelector(".featured-element").addEventListener("click",(()=>{e.loader(),n.getApiData("Montréal")})),document.querySelector(".cities-suggestion").addEventListener("click",(t=>{e.loader(),n.getApiData(t.target.innerText)})),document.querySelector(".theme-animation").addEventListener("click",class{static toggleMode(){const e=document.querySelector("body"),t=document.querySelector(".mode-itself"),n=document.querySelector(".theme-animation"),c=document.querySelector(".menu-icon"),r=document.querySelector(".search-icon");t.classList.toggle("active"),t.classList.contains("active")?(n.style.backgroundColor="#fff",c.src="./icons/menu-light.png",r.src="./icons/Search-light.svg",e.classList.remove("theme-1"),e.classList.add("theme-2")):(n.style.backgroundColor="#000",c.src="./icons/menu-dark.svg",r.src="./icons/Search-Dark.svg",e.classList.remove("theme-2"),e.classList.add("theme-1"))}}.toggleMode)})();