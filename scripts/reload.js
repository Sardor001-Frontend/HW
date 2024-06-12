function reload(doc, arr) {
    doc.innerHTML = '';
    for (let i of arr) {
        doc.innerHTML += `
            <div class="product">
                <img src="${i.image}" alt="">
                <div class="product__info">
                    <h3>${i.title.slice(0, 50)}...</h3>
                    <p>${i.description.slice(0, 200)}...</p>
                    <div class="ratings">
                        <div class="price">
                            <img src="./Group 7.png" alt="">
                            <span>${i.price}</span>
                        </div>
                        <div class="mark">
                            <img src="./Group 10.png" alt="">
                            <span>${i.rating.rate}</span>
                        </div>
                        <div class="count">
                            <img src="./Group 9.png" alt="">
                            <span>${i.rating.count}</span>
                        </div>
                    </div>
                    <button id="${i.id}" class="${isAddedToCart(i.id) ? 'added' : ''}">
                        ${isAddedToCart(i.id) ? 'Добавлено' : 'В избранное'}
                    </button>
                </div> 
            </div>
        `;
    }

    const btns = document.querySelectorAll('.product__info button');
    const count = document.querySelector('h1 b');

    btns.forEach((btn) => {
        btn.onclick = () => {
            const id = +btn.id;

            const product = arr.find((el) => el.id == id);
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (isAddedToCart(id)) {
                const newCart = cart.filter(item => item.id !== id);
                localStorage.setItem('cart', JSON.stringify(newCart));
                updateButtonState(btn, false);
            } else {
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateButtonState(btn, true);
            }

            count.innerHTML = cart.length;
        };
    });
}
function updateButtonState(button, isAdded) {
    if (isAdded) {
        button.classList.add('added');
        button.textContent = 'Добавлено';
    } else {
        button.classList.remove('added');
        button.textContent = 'В избранное';
    }
}

function isAddedToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.some(item => item.id === id);
}