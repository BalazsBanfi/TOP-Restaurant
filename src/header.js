export const renderHeader = (body) => {
    const container = document.createElement('header');
    container.setAttribute('class', 'header');
    const maker = document.createElement('h1');
    maker.textContent = "Evy's glutenfree pizzas";
    container.appendChild(maker);
    body.appendChild(container);
}