export const renderFooter = (body) => {
    const container = document.createElement('footer');
    container.setAttribute('class', 'footer');
    const maker = document.createElement('p');
    maker.textContent = "Copyright © bally4";
    container.appendChild(maker);
    body.appendChild(container);
  };