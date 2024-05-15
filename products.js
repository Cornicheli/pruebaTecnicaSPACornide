const LIST_PRODUCTS = [
      {
            id: 1,
            name: 'Smartphone',
            price: '$599',
            description: 'Iphone 14 pro max',
            image: 'https://s13emagst.akamaized.net/products/48592/48591223/images/res_0a49cd835e308621c4ce9f501418d2a5.jpg'
      },
      {
            id: 2,
            name: 'Laptop',
            price: '$999',
            description: 'Notebook Asus rog',
            image: 'https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg'
      },
      {
            id: 3,
            name: 'Coffee Maker',
            price: '$49.99',
            description: 'Cafetera Hudson',
            image: 'https://http2.mlstatic.com/D_NQ_NP_977975-MLU74085817099_012024-O.webp'
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
            image: 'https://http2.mlstatic.com/D_NQ_NP_832575-MLA46273166067_062021-O.webp'
      },
      {
            id: 7,
            name: 'Fantasy Novel',
            price: '$19.99',
            description: 'Libro de Fantasia',
            image: 'https://http2.mlstatic.com/D_NQ_NP_711528-MLU75151636463_032024-O.webp'
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
            image: 'https://compucordoba.com.ar/img/Public/1078/producto-1078-producto-acer-nitro-5-an515-55-55m1-21-79131-7163.jpg'
      },
      {
            id: 11,
            name: 'Smart TV',
            price: '$799',
            description: 'Smart Samsung TV',
            image: 'https://jumboargentina.vtexassets.com/arquivos/ids/812645/Led-43-Samsung-Un43au7000gczb-Uhd-4k-1-879206.jpg?v=638440521321370000'
      },
      {
            id: 12,
            name: 'Air Fryer',
            price: '$89.99',
            description: 'Freidora de Aire Gadnic',
            image: 'https://www.bidcom.com.ar/publicacionesML/productos/FREI0003/1000x1000-FREI0003.jpg'
      },
      {
            id: 13,
            name: 'Self-Help Book',
            price: '$14.99',
            description: 'Somier Piero',
            image: 'https://images.fravega.com/f500/75e6dc022b63530ab7e4c24fd109007b.jpg'
      },
      {
            id: 14,
            name: 'Leather Jacket',
            price: '$199',
            description: 'Chaqueta de Cuero',
            image: 'https://http2.mlstatic.com/D_NQ_NP_950927-MLA76265626359_052024-O.webp'
      },
      {
            id: 15,
            name: 'Wireless Speaker',
            price: '$79.99',
            description: 'Parlante JBL Bluetooth.',
            image: 'https://www.digitarinformatica.com.ar/wp-content/uploads/2022/04/Parlante-bluetooth-JBL-Flip-5-gris-20w-2.jpg'
      },
      {
            id: 16,
            name: 'Coffee Grinder',
            price: '$29.99',
            description: 'Cafetera SmartLife',
            image: 'https://smartlifear.vtexassets.com/arquivos/ids/155459-800-auto?v=638127683456300000&width=800&height=auto&aspect=true'
      },
      {
            id: 17,
            name: 'Mystery Novel',
            price: '$16.99',
            description: 'Colchon Piero.',
            image: 'https://dcdn.mitiendanube.com/stores/001/125/330/products/21-8f2a1e251d32757f0116237073088925-640-0.jpg'
      },
      {
            id: 18,
            name: 'Running Shoes',
            price: '$79.99',
            description: 'Zapatilla Adiddas',
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
            image: 'https://http2.mlstatic.com/D_NQ_NP_688223-MLU72580225214_112023-O.webp'
      },
      {
            id: 22,
            name: 'Backpack Arena',
            price: '$49.99',
            description: 'Mochila Arena',
            image: 'https://http2.mlstatic.com/D_NQ_NP_929967-MLU74157779910_012024-O.webp'
      },
      {
            id: 23,
            name: 'Smart Watch',
            price: '$149',
            description: 'Reloj Digital',
            image: 'https://http2.mlstatic.com/D_NQ_NP_627143-MLU70027968091_062023-O.webp'
      },
      {
            id: 24,
            name: 'Toaster',
            price: '$29.99',
            description: 'Tostadora Peaboy',
            image: 'https://http2.mlstatic.com/D_NQ_NP_960753-MLU75808848636_042024-O.webp'
      },
      {
            id: 25,
            name: 'Smartphone',
            price: '$149',
            description: 'Celular Samsung s24 Ultra',
            image: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/2/9/2ec9bc74-bb90-407c-b530-fc1f40895939.jpg'
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


// Actualiza el contador del carrito
const updateCartCount = () => {
      cartCountElement.textContent = `${cart.length}`;
};

// Muestra los productos en el carrito
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


// Añade eventos a los botones de "Agregar al carrito".
const loadEvents = () => {
      const buttons = document.querySelectorAll('.button');
      for (const button of buttons) {
            button.addEventListener('click', () => {
                  const selectedProduct = LIST_PRODUCTS.find(product => product.id === Number(button.id));
                  console.log(selectedProduct)
                  if (selectedProduct) {
                        alert(`Se agregó al carrito el producto: ${selectedProduct.name}`);
                        cart.push(selectedProduct);
                        displayCart();
                        updateCartCount();
                  }
            });
      }
};

// Crea y muestra las tarjetas de productos en la página principal. 
// Esta función puede filtrar productos si se le pasa un arreglo de productos filtrados.
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

// Muestran las imágenes de los productos
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

// Muestran las imágenes de los productos
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

// Abre y cierra el modal del carrito.
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


// Filtra los productos del usuario en la barra de búsqueda.
const searchProducts = (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredProducts = LIST_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
      );

      // Verificar si hay productos filtrados
      if (filteredProducts.length > 0) {
            createProducts(filteredProducts);
      } else {
            const root = document.querySelector("#root");
            root.innerHTML = ''; // Limpiar contenido anterior
            const emptyMessage = document.createElement('div');
            emptyMessage.textContent = "No se encontraron resultados! 😔";
            emptyMessage.className = 'empty-message-result'; // Opcional: para añadir estilos a este mensaje
            root.appendChild(emptyMessage);
      }
};


// Eventos del DOM: Se añaden eventos a la barra de búsqueda, al botón de abrir el carrito y al botón de cerrar el carrito.
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