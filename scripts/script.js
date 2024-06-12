const products = document.querySelector('.products');
const show_five = document.querySelector('.btns button');
const show_all = document.querySelector('.btns .all');
const count = document.querySelector('h1 b');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

count.innerHTML = cart.length;

show_five.onclick = () => {
    const arr = JSON.parse(localStorage.getItem('products')).splice(0, 5);
    reload(products, arr);
};

show_all.onclick = () => {
    const arr = JSON.parse(localStorage.getItem('products'));
    reload(products, arr);
};

reload(products, product_arr);
