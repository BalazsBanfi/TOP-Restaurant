import menuImg from './pizzaMenu.png';
import localImg from './local.png';

export function tabMenu(content) {
    main.innerHTML = "";
    const menuPage = new Image();
    menuPage.src = menuImg;
    main.appendChild(menuPage);
}

export function tabContact() {
  const contacts = [
    ["Evy's glutenfree pizza", 'Call me for further information on +36 70 123-45678'],
    ['Bally, manager', 'Technical informations: +36 70 223-4455'],
    ['Nori, the cooking assistant', 'Call for table reservation: +36 70 444-5432'],
    ['Bazsi, services', 'Call for repair the car +36 70 888-7654']
  ]
  main.innerHTML = "";

  

  const divMain = document.createElement('div');
  divMain.setAttribute('class', 'divMain');
  const divMainH1 = document.createElement('h1');
  divMainH1.textContent = "Evy's glutenfree pizzas";
  divMain.appendChild(divMainH1);
  const divMainP = document.createElement('p');
  divMainP.textContent = "Call me for further information on +36 70 123-45678";
  divMain.appendChild(divMainP);
  main.appendChild(divMain);
}


export function tabLocal() {
  main.innerHTML = "";
  const local = new Image();
  local.src = localImg;
  main.appendChild(local);
}