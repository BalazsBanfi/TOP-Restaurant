import menuImg from './pizzaMenu.png';
export function tabMenu(content) {
    main.innerHTML = "";
    const menuPage = new Image();
    menuPage.src = menuImg;
    main.appendChild(menuPage);
}

export function tabContact() {
  main.innerHTML = "Contact";
}

export function tabLocal() {
  main.innerHTML = "Localization";
}