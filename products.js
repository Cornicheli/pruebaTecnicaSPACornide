const Products = [
      {
            id: 1,
            name: 'Smartphone',
            price: '$599',
            description: 'High-performance.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp'
      },
      {
            id: 2,
            name: 'Laptop',
            price: '$999',
            description: 'Powerful laptop.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_992728-MLU72761228304_112023-O.webp'
      },
      {
            id: 3,
            name: 'Coffee Maker',
            price: '$49.99',
            description: 'Automatic coffee.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_977975-MLU74085817099_012024-O.webp'
      },
      {
            id: 4,
            name: "Men's Watch",
            price: '$129',
            description: 'Stylish watch.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_929275-MLU75592485675_042024-O.webp'
      },
      {
            id: 5,
            name: "Women's Handbag",
            price: '$79.99',
            description: 'Trendy handbag.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_871464-MLA71688023530_092023-O.webp'
      },
      {
            id: 6,
            name: 'Wireless Headphones',
            price: '$149',
            description: 'Premium wireless.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_871884-MLU72597569891_102023-O.webp'
      },
      {
            id: 7,
            name: 'Fantasy Novel',
            price: '$19.99',
            description: 'Bestselling fantasy.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_711528-MLU75151636463_032024-O.webp'
      },
      {
            id: 8,
            name: 'Cookbook',
            price: '$24.99',
            description: 'Collection of delicious.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_839097-MLU52601956062_112022-O.webp'
      },
      {
            id: 9,
            name: 'Slow Cooker',
            price: '$59.99',
            description: 'Programmable slow cooker.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_974804-MLU75357562149_032024-O.webp'
      },
      {
            id: 10,
            name: 'Sunglasses',
            price: '$34.99',
            description: 'Stylish sunglasses with UV protection.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_648592-MLU75305244806_032024-O.webp'
      },
      {
            id: 11,
            name: 'Smart TV',
            price: '$799',
            description: 'High-definition smart TV with streaming capabilities.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_748098-MLU75806266862_042024-O.webp'
      },
      {
            id: 12,
            name: 'Air Fryer',
            price: '$89.99',
            description: 'Compact air fryer for healthy frying with little to no oil.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_807565-MLU72748192047_112023-O.webp'
      },
      {
            id: 13,
            name: 'Self-Help Book',
            price: '$14.99',
            description: 'Practical guide to personal development and growth.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_950098-MLA72147793180_102023-O.webp'
      },
      {
            id: 14,
            name: 'Leather Jacket',
            price: '$199',
            description: 'Classic leather jacket for timeless style.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_950927-MLA76265626359_052024-O.webp'
      },
      {
            id: 15,
            name: 'Wireless Speaker',
            price: '$79.99',
            description: 'Portable wireless speaker for on-the-go music.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_922205-MLA41374470987_042020-O.webp'
      },
      {
            id: 16,
            name: 'Coffee Grinder',
            price: '$29.99',
            description: 'Electric coffee grinder for freshly ground coffee.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_600112-MLA53702411340_022023-O.webp'
      },
      {
            id: 17,
            name: 'Mystery Novel',
            price: '$16.99',
            description: 'Page-turning mystery novel with unexpected twists.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_864912-MLU69496908453_052023-O.webp'
      },
      {
            id: 18,
            name: 'Running Shoes',
            price: '$79.99',
            description: 'Comfortable running shoes with cushioned support.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_610461-MLA75960303037_042024-O.webp'
      },
      {
            id: 19,
            name: 'Tablet',
            price: '$299',
            description: 'Versatile tablet for work, entertainment, and more.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_892038-MLU74328290469_012024-O.webp'
      },
      {
            id: 20,
            name: 'Rice Cooker',
            price: '$49.99',
            description: 'Automatic rice cooker for perfectly cooked rice every time.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_837539-MLA76155257154_052024-O.webp'
      },
      {
            id: 21,
            name: 'Monitor Gamer Zowie',
            price: '$18.99',
            description: 'Exciting science fiction novel set in a distant future.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_688223-MLU72580225214_112023-O.webp'
      },
      {
            id: 22,
            name: 'Backpack Arena',
            price: '$49.99',
            description: 'Durable backpack for carrying essentials on the go.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_929967-MLU74157779910_012024-O.webp'
      },
      {
            id: 23,
            name: 'Smart Watch',
            price: '$149',
            description: 'Multi-functional smart watch with fitness tracking.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_627143-MLU70027968091_062023-O.webp'
      },
      {
            id: 24,
            name: 'Toaster',
            price: '$29.99',
            description: 'Stylish toaster for perfectly toasted bread every time.',
            image: 'https://http2.mlstatic.com/D_NQ_NP_960753-MLU75808848636_042024-O.webp'
      }
];

const DiscountOne = [
      {
            image: '/style/icon/discount1.webp'
      },
      {
            image: '/style/icon/discount2.webp'
      },
      {
            image: '/style/icon/discount7.webp'
      },
      {
            image: '/style/icon/discount6.webp'
      },
]
const DiscountTwo = [
      {
            image: '/style/icon/discount5.webp'
      },
      {
            image: '/style/icon/discount4.webp'
      },
      {
            image: '/style/icon/discount3.webp'
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
            cartDiv.classList.add("hidden");
      } else {
            cart.forEach((product, index) => {
                  const cartItem = document.createElement('div');
                  cartItem.innerHTML = `
                  <section class="cardModal">                        
                        <img class="imageModal" src='${product.image}' alt='${product.description}'>                        
                        <h4>${product.name}</h4>
                        <p>${product.price}</p>
                        <button id='remove-${index}' class='remove-button'>Quitar</button>
                  </section>
                  `;
                  cartContainer.appendChild(cartItem);
            })
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
                  const selectedProduct = Products.find(product => product.id === Number(button.id));
                  if (selectedProduct) {
                        alert(`Se agregó al carrito el producto: ${selectedProduct.name}`);
                        cart.push(selectedProduct);
                        displayCart();
                        updateCartCount();
                  }
            });
      }
};

const createProducts = (filteredProducts = Products) => {
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
      DiscountOne.forEach(discount => {
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
      DiscountTwo.forEach(discount => {
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
                        <p>
                              ${cart.length}
                        </p>
                  `
      })
}

const searchProducts = (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredProducts = Products.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
      );
      createProducts(filteredProducts);
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