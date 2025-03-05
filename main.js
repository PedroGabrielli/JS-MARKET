window.addEventListener("load", ()=> {
    let layoutProducts = document.querySelector(".layout__products");

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

function showProducts(){
    products.forEach(product => {
        layoutProducts.innerHTML += `<article class="products__product">
                <div class="product__container-img">
                    <img class="product__img" src="${product.img}">
                </div>
                <div class="product__title">${product.title}</div>
                <div class="product__title">${product.price}</div>
                <button class="product__btn" data-id="${product.id}">Comprar</button>
            </article>
        `
    })
}

showProducts()
})

