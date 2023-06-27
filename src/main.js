import menuImg from "./pizzaMenu.png";
import localImg from "./local.png";

export function tabMenu(content) {
  main.innerHTML = "";
  const menuPage = new Image();
  menuPage.src = menuImg;
  main.appendChild(menuPage);
}

export function tabContact() {
  const contacts = [
    [
      "Evy's glutenfree pizza",
      "Call me for further information on +36 70 123-45678",
    ],
    ["Bally, manager", "Technical informations: +36 70 223-4455"],
    [
      "Nori, the cooking assistant",
      "Call for table reservation: +36 70 444-5432",
    ],
    ["Bazsi, services", "Call for repair the car +36 70 888-7654"],
    ["Luca, kitchen aide", "Call for washing the dishes +36 70 222-3232"],
  ];
  main.innerHTML = "";
  
  contacts.forEach((value) => {
    let divMain = document.createElement("div");
    divMain.setAttribute("class", "divMain2");
    let h1 = document.createElement("h1");
    h1.textContent = value[0];
    divMain.appendChild(h1);
    let p = document.createElement("p");
    p.textContent = value[1];
    divMain.appendChild(p);
    main.appendChild(divMain);
  });
  
}

export function tabLocal() {
  main.innerHTML = "";
  const local = new Image();
  local.src = localImg;
  main.appendChild(local);
}
