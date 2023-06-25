import header from './header.js';
import { renderFooter } from './footer.js';


const content = document.getElementById('content');
const maker12 = document.createElement('p');
maker12.innerHTML = 'Okok';
content.appendChild(maker12);

header();


console.log('Yes, it is working 3!');



renderFooter(content);