export const renderNav = (body) => {
    const container = document.createElement('nav');
    container.setAttribute('class', 'nav');
    const btn1 = document.createElement('button');
    btn1.setAttribute('id', 'btn1');
    btn1.innerHTML = "Menu";
    container.appendChild(btn1);
    const btn2= document.createElement('button');
    btn2.setAttribute('id', 'btn2');
    btn2.innerHTML = "Contact";
    container.appendChild(btn2);
    const btn3 = document.createElement('button');
    btn3.setAttribute('id', 'btn3');
    btn3.innerHTML = "Localization";
    container.appendChild(btn3);
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    body.appendChild(container);
    body.appendChild(main);
}