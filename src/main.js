export function tabMenu(content) {
    main.innerHTML = "";
    const myIcon = new Image();
    myIcon.src = Icon;
    content.appendChild(myIcon);
}

export function tabContact() {
  main.innerHTML = "Contact";
}

export function tabLocal() {
  main.innerHTML = "Localization";
}