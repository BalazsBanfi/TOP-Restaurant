import { renderHeader } from './header.js';
import { renderNav } from './nav.js';
import { tabMenu, tabLocal, tabContact } from './main.js';
import { renderFooter } from './footer.js';
import './style.css';


const content = document.getElementById('content');

renderHeader(content);
renderNav(content);
tabMenu();
renderFooter(content);

btn1.addEventListener("click", () => tabMenu());
btn2.addEventListener("click", () => tabContact());
btn3.addEventListener("click", () => tabLocal());