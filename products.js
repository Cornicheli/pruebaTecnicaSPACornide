const LIST_PRODUCTS = [
      {
            id: 1,
            name: 'Smartphone',
            price: '$599',
            priceDiscount: '$359.40',
            description: 'Iphone 14 pro max. 40% OFF',
            image: '/public/image/iphone.jpg'
      },
      {
            id: 2,
            name: 'Laptop',
            price: '$999',
            description: 'Notebook Asus rog',
            image: '/public/image/asus.jpg'
      },
      {
            id: 3,
            name: 'Coffee Maker',
            price: '$49.99',
            description: 'Cafetera Hudson',
            image: '/public/image/cafetera.jpg'
      },
      {
            id: 4,
            name: "Men's Watch",
            price: '$129',
            description: 'Reloj Hilfiger.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_929275-MLU75592485675_042024-O.webp'
      },
      {
            id: 5,
            name: "Women's Handbag",
            price: '$79.99',
            description: 'Cartera Gures.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_871464-MLA71688023530_092023-O.webp'
      },
      {
            id: 6,
            name: 'Wireless Headphones',
            price: '$149',
            description: 'Auriculares Hyperx Cloud',
            image: '/public/image/auriculares.jpg'
      },
      {
            id: 7,
            name: 'Fantasy Novel',
            price: '$19.99',
            description: 'Libro de Fantasia',
            image: '/public/image/novela.jpg'
      },
      {
            id: 8,
            name: 'Cookbook',
            price: '$24.99',
            description: 'Libro de Cocina.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_839097-MLU52601956062_112022-O.webp'
      },
      {
            id: 9,
            name: 'Slow Cooker',
            price: '$59.99',
            description: 'Olla Hudson',
            image: 'https://http2.mlstatic.com/D_NQ_NP_884012-MLA71679416405_092023-O.webp'
      },
      {
            id: 10,
            name: 'Sunglasses',
            price: '$34.99',
            description: 'Notebook Acer Nitro',
            image: '/public/image/acer.jpg'
      },
      {
            id: 11,
            name: 'Smart TV',
            price: '$799',
            description: 'Smart Samsung TV',
            image: '/public/image/samsung.jpg'
      },
      {
            id: 12,
            name: 'Air Fryer',
            price: '$89.99',
            description: 'Freidora de Aire Gadnic. 30% OFF',
            image: '/public/image/freidora.jpg'
      },
      {
            id: 13,
            name: 'Self-Help Book',
            price: '$14.99',
            description: 'Somier Piero',
            image: '/public/image/colchon-somier.jpg'
      },
      {
            id: 14,
            name: 'Leather Jacket',
            price: '$199',
            description: 'Chaqueta de Cuero. 45% OFF',
            image: 'https://http2.mlstatic.com/D_NQ_NP_950927-MLA76265626359_052024-O.webp'
      },
      {
            id: 15,
            name: 'Wireless Speaker',
            price: '$79.99',
            description: 'Parlante JBL Bluetooth.',
            image: '/public/image/jbl.jpg'
      },
      {
            id: 16,
            name: 'Coffee Grinder',
            price: '$29.99',
            description: 'Cafetera SmartLife',
            image: '/public/image/cafetera-auto.jpeg'
      },
      {
            id: 17,
            name: 'Mystery Novel',
            price: '$16.99',
            description: 'Colchon Piero. 70% OFF',
            image: '/public/image/colchon.jpg'
      },
      {
            id: 18,
            name: 'Running Shoes',
            price: '$79.99',
            description: 'Zapatilla Adiddas. 40% OFF',
            image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw10af208e/products/ADGW6511/ADGW6511-6.JPG'
      },
      {
            id: 19,
            name: 'Tablet',
            price: '$299',
            description: 'Tablet Samsung',
            image: 'https://http2.mlstatic.com/D_NQ_NP_892038-MLU74328290469_012024-O.webp'
      },
      {
            id: 20,
            name: 'Rice Cooker',
            price: '$49.99',
            description: 'Hervidora Automatica',
            image: 'https://http2.mlstatic.com/D_NQ_NP_837539-MLA76155257154_052024-O.webp'
      },
      {
            id: 21,
            name: 'Monitor Gamer Zowie',
            price: '$18.99',
            description: 'Monitor Zowie',
            image: '/public/image/monitor.jpg'
      },
      {
            id: 22,
            name: 'Backpack Arena',
            price: '$49.99',
            description: 'Mochila Arena',
            image: '/public/image/mochila.jpg'
      },
      {
            id: 23,
            name: 'Smart Watch',
            price: '$149',
            description: 'Reloj Digital',
            image: '/public/image/reloj.jpg'
      },
      {
            id: 24,
            name: 'Toaster',
            price: '$29.99',
            description: 'Tostadora Peaboy. 30% OFF',
            image: 'https://http2.mlstatic.com/D_NQ_NP_960753-MLU75808848636_042024-O.webp'
      },
      {
            id: 25,
            name: 'Smartphone',
            price: '$149',
            description: 'Celular Samsung s24 Ultra',
            image: '/public/image/samsung-celular.jpg'
      },
];

const DISCOUNT_ONE = [
      {
            image: '/public/image/discount1.webp'
      },
      {
            image: '/public/image/discount2.webp'
      },
      {
            image: '/public/image/discount7.webp'
      },
      {
            image: '/public/image/discount6.webp'
      },
]
const DISCOUNT_TWO = [
      {
            image: '/public/image/discount5.webp'
      },
      {
            image: '/public/image/discount4.webp'
      },
      {
            image: '/public/image/discount3.webp'
      },
]

const root = document.querySelector("#root");
const cart = [];
const modal = document.getElementById("cart-modal");
const openCartButton = document.getElementById("open-cart-button");
const closeButton = document.querySelector(".close-button");
const cartDiv = document.querySelector(".modalCart");
const cartCountElement = document.getElementById("cart-count");
const createDiscountOne = document.getElementById('cartDiscountOne')
const createDiscountTWo = document.getElementById('cartDiscountTwo')
const searchBar = document.getElementById("search-bar");

const updateCartCount = () => {
      cartCountElement.textContent = `${cart.length}`;
};

const displayCart = () => {
      console.log("Carrito:", cart);
      const cartContainer = document.querySelector("#cart");
      cartContainer.innerHTML = '';
      if (cart.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.textContent = "Su carrito está vacío! 😅";
            emptyMessage.className = 'empty-message'; // Opcional: para añadir estilos a este mensaje
            cartContainer.appendChild(emptyMessage);
      } else {
            cart.forEach((product, index) => {
                  const cartItem = document.createElement('div');
                  cartItem.innerHTML = `                  
                  <div class="cardModal">
                        <figure class="contentImageModal">
                              <img class="imageModal" src='${product.image}' alt='${product.description}'>
                        </figure>
                        <div class="contentTitleModal">
                              <h4>${product.description}</h4>
                              <p>${product.price}</p>
                        </div>
                        <button id='remove-${index}' class='remove-button'>Quitar</button>
                  </div>
            `;
                  cartContainer.appendChild(cartItem);
            });

            const removeButtons = document.querySelectorAll('.remove-button');
            for (const button of removeButtons) {
                  button.addEventListener('click', () => {
                        const index = button.id.split('-')[1];
                        cart.splice(index, 1);
                        displayCart();
                        updateCartCount();
                  });
            }
      }
};

const loadEvents = () => {
      const buttons = document.querySelectorAll('.button');
      for (const button of buttons) {
            button.addEventListener('click', () => {
                  const selectedProduct = LIST_PRODUCTS.find(product => product.id === Number(button.id));
                  console.log(selectedProduct)
                  if (selectedProduct) {
                        const cartCheckProduct = document.createElement('div');
                        cartCheckProduct.innerHTML = `
                              <div class="cart-check-product">
                                    <p>Su producto se agregó correctamente: ${selectedProduct.description}</p>
                              </div>
                        `;
                        cartCheckProduct.className = 'cart-check-product';
                        document.body.appendChild(cartCheckProduct);
                        setTimeout(() => {
                              document.body.removeChild(cartCheckProduct);
                        }, 3000);

                        cart.push(selectedProduct);
                        displayCart();
                        updateCartCount();
                  }
            });
      }
};

const createProducts = (filteredProducts = LIST_PRODUCTS) => {
      root.innerHTML = ''
      filteredProducts.forEach(product => {
            console.log(filteredProducts)
            const card = document.createElement('div');
            card.innerHTML = `
            <section class="card">      
                  <img class="card-image" src='${product.image}' alt='${product.description}'>                   
                  <h3>${product.price}</h3>
                  <h4>${product.description}</h4>
                  <button id='${product.id}' class='button'>Agregar al carrito</button>
            </section>
            `;
            root.appendChild(card);
      });
      loadEvents();
};

const productsDiscountOne = () => {
      DISCOUNT_ONE.forEach(discount => {
            const cardDiscountOne = document.createElement('figureOne');
            cardDiscountOne.innerHTML = `
                  <figure class="content-discount-one">
                        <img class="image-discount" src='${discount.image}'>
                  </figure>
            `
            createDiscountOne.appendChild(cardDiscountOne)
      })
}

const productsDiscountTwo = () => {
      DISCOUNT_TWO.forEach(discount => {
            const cardDiscountTwo = document.createElement('figureTwo');
            cardDiscountTwo.innerHTML = `
                  <figure class="content-discount-two">                  
                        <img class="image-discount" src='${discount.image}'>
                  </figure>
            `
            createDiscountTWo.appendChild(cardDiscountTwo)
      })
}

const toggleModal = () => {
      modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
};

const shoppingCart = () => {
      cart.length(() => {
            const cardShopping = document.createElement('div');
            cardShopping.innerHTML =
                  ` 
                        <p> ${cart.length} </p>
                  `
      })
}

const searchProducts = (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredProducts = LIST_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
      );
      if (filteredProducts.length > 0) {
            createProducts(filteredProducts);
      } else {
            const root = document.querySelector("#root");
            root.innerHTML = '';
            const emptyMessage = document.createElement('div');
            emptyMessage.textContent = "No se encontraron resultados! 😔";
            emptyMessage.className = 'empty-message-result';
            root.appendChild(emptyMessage);
      }
};

searchBar.addEventListener('input', searchProducts);
openCartButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

window.onclick = (event) => {
      if (event.target === modal) {
            modal.style.display = "none";
      }
};

createProducts();
productsDiscountOne();
productsDiscountTwo();
updateCartCount();