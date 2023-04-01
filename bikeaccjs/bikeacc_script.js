import { displayCartItems } from './bikeacc_cart.js';
import { displayData } from './bikeacc_products.js';

const iconQtyAction = document.querySelector('.header__icon');

//fetch all data
function fetchData() {
  fetch('../bikeacc.json')
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.error(err.message));
}

function getLocalStorage(description) {
  return localStorage.getItem(description)
    ? JSON.parse(localStorage.getItem(description))
    : undefined;
}

function setLocalStorage(description, article) {
  localStorage.setItem(description, JSON.stringify(article));
  if (description === 'currentCart') displayCartItems(article);
}

iconQtyAction.addEventListener('click', handlePageView);

function handlePageView() {
  const allProductsApp = document.querySelector('.allProductsApp');
  const shoppingCartApp = document.querySelector('.shoppingCartApp');
  allProductsApp.style.display = 'none';
  shoppingCartApp.style.display = 'block';
}

//start app loading all data
fetchData();

export { getLocalStorage, setLocalStorage };
