window.addEventListener("load", ()=> {
    let layoutProducts = document.querySelector(".layout__products");
    let layoutCart = document.querySelector(".layout__cart");
    let cartProducts = document.querySelector(".cart__products");


let products = [
    {
        id: 0,
        title: "camiseta",
        img: "recursos-imagenes-proyecto50/img/product-1.jpg",
        stock: 5,
        price: 4.99,
    },
    {
        id: 1,
        title: "Camara",
        img: "recursos-imagenes-proyecto50/img/product-2.jpg",
        stock: 7,
        price: 49.99,
    },
    {
        id: 2,
        title: "Portatil",
        img: "recursos-imagenes-proyecto50/img/product-3.jpg",
        stock: 8,
        price: 499.99,
    },
    {
        id: 3,
        title: "Zapatillas",
        img: "recursos-imagenes-proyecto50/img/product-4.jpg",
        stock: 3,
        price: 29.99,
    }
];

let cart = [];

function showCart(){
    if(cart.length > 0){
        layoutCart.classList.remove("layout__cart--hide");
    }else{
        layoutCart.classList.add("layout__cart--hide");
    }
    cartProducts.innerHTML = "";
    cart.forEach(cartProduct => {
        let product = findProduct(cartProduct.id);
        let subtotal = product.price * cartProduct.quantity;

        cartProducts.innerHTML += `<article class="cart__item">
                    <div class="cart__container-img">
                        <img class="cart__img" src="${product.img}">
                    </div>
                    <div class="cart__content">
                        <h3 class="cart__product-title">${product.title}</h3>
                        <button class="cart__btn-quantity">
                            <i class="btn-quantity__ico-minus fa-solid fa-minus" data-id="${product.id}"></i>
                            <span class="btn-quantity__number">${cartProduct.quantity}</span>
                            <i class="btn-quantity__ico-plus fa-solid fa-plus" data-id="${product.id}"></i>
                        </button>
                        <p class="cart__subtotal">${subtotal}</p>
                    </div>

                </article>`
    })
}

function loadCart(){
    let myCart = JSON.parse(localStorage.getItem("cart"));

    if(myCart){
        cart = myCart;
        
    }

    if(cart.length > 0){
        layoutCart.classList.remove("layout__cart--hide");
    }
}

function addCart(id){

    let cartProduct = findCart(id);
    let product = findProduct(id);

    if(cartProduct == null){
        cart.push({
            id: id,
            quantity: 1
    });
    }else{
        cartProduct.quantity++;
        if(cartProduct.quantity > product.stock){
            alert("No hay stock suficiente para tu pedido");
            cartProduct.quantity = product.stock;
        }
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
}


function findCart(id){
    let exists = cart.findIndex(productCart => productCart.id == id);

    if(exists != -1){
        return cart[exists];
    }else{
        return null;
    }
}

function findProduct(id){
    return products.find(product => product.id == id);
}

function showProducts(){
    products.forEach(product => {
        layoutProducts.innerHTML += `<article class="products__product">
                <div class="product__container-img">
                    <img class="product__img" src="${product.img}">
                </div>
                <div class="product__title">${product.title}</div>
                <div class="product__price">${product.price}</div>
                <button class="product__btn" data-id="${product.id}">Comprar</button>
            </article>
        `
    })

    let allBtnBuy = document.querySelectorAll(".product__btn");

    allBtnBuy.forEach(btn => {
        btn.addEventListener("click", () => {
            let productId = parseInt(btn.getAttribute("data-id"));
            let product = findProduct(productId);

            if(product.stock > 0){
                addCart(productId);
            }

        })
    })

}

showProducts();
loadCart();
showCart();
})

