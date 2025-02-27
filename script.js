document.getElementById('register').addEventListener('click', function() {
  // Mengarahkan ke halaman register.html
  window.location.href = 'register.html';
});

document.getElementById('specA').addEventListener('click', function() {
  // Mengarahkan ke halaman productA.html
  window.location.href = 'productA.html';
});

document.getElementById('specB').addEventListener('click', function() {
  // Mengarahkan ke halaman productB.html
  window.location.href = 'productB.html';
});

document.getElementById('specC').addEventListener('click', function() {
  // Mengarahkan ke halaman productC.html
  window.location.href = 'productC.html';
});


// Shadow pada navbar ketika di-scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/**************************************************************
 * MEMBUKA PRODUCT SAAT DICLICK
 **************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const productCardA = document.getElementById('productCardA');
  const productCardInner = productCardA.querySelector('.product-card-inner');
  const metaQuestTitleA = document.getElementById('metaQuestTitleA');
  const headingTitle = document.getElementById('headingTitle');

  // Klik teks "Meta Quest 3" => toggle terbbuka
  metaQuestTitleA.addEventListener('click', (e) => {
    // Hentikan event  tidak men-trigger hal lain
    e.stopPropagation();

    productCardA.classList.toggle('expanded');
    // Opsional: geser heading
    headingTitle.classList.toggle('shifted');
  });

  /**************************************************************
   * HOVER
   **************************************************************/
// product A //
  productCardA.addEventListener('mousemove', (e) => {
    const rect = productCardA.getBoundingClientRect();
    // Titik tengah card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offset mouse dari titik tengah
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateX = -offsetY * 0.03; 
    const rotateY = offsetX * 0.03;

    // Terapkan transform 3D
    productCardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset saat mouse keluar
  productCardA.addEventListener('mouseleave', () => {
    productCardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// product B //
document.addEventListener('DOMContentLoaded', () => {
  const productCardB = document.getElementById('productCardB');
  const productCardInner = productCardB.querySelector('.product-card-inner');
  const metaQuestTitleB = document.getElementById('metaQuestTitleB');
  const headingTitle = document.getElementById('headingTitle');

  // Klik teks "Meta Quest 3" => toggle expanded
  metaQuestTitleB.addEventListener('click', (e) => {
    // Hentikan event agar tidak men-trigger hal lain
    e.stopPropagation();

    productCardB.classList.toggle('expanded');
    // Opsional: geser heading
    headingTitle.classList.toggle('shifted');
  });

  productCardB.addEventListener('mousemove', (e) => {
    const rect = productCardB.getBoundingClientRect();
    // Titik tengah card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offset mouse dari titik tengah
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateX = -offsetY * 0.03; 
    const rotateY = offsetX * 0.03;

    // Terapkan transform 3D
    productCardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset saat mouse keluar
  productCardB.addEventListener('mouseleave', () => {
    productCardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// product C //
document.addEventListener('DOMContentLoaded', () => {
  const productCardC = document.getElementById('productCardC');
  const productCardInner = productCardC.querySelector('.product-card-inner');
  const metaQuestTitleC = document.getElementById('metaQuestTitleC');
  const headingTitle = document.getElementById('headingTitle');

  // Klik teks "Meta Quest 3" => toggle expanded
  metaQuestTitleC.addEventListener('click', (e) => {
    // Hentikan event agar tidak men-trigger hal lain
    e.stopPropagation();

    productCardC.classList.toggle('expanded');
    // Opsional: geser heading
    headingTitle.classList.toggle('shifted');
  });


  productCardC.addEventListener('mousemove', (e) => {
    const rect = productCardC.getBoundingClientRect();
    // Titik tengah card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Offset mouse dari titik tengah
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateX = -offsetY * 0.03; 
    const rotateY = offsetX * 0.03;

    // Terapkan transform 3D
    productCardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset saat mouse keluar
  productCardC.addEventListener('mouseleave', () => {
    productCardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

/**************************************************************
 * CART FUNCTIONALITY
 **************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Array untuk menyimpan produk yang ditambahkan ke cart
  let cart = [];

  // Fungsi untuk memperbarui badge notifikasi cart
  function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
  }

  // Fungsi untuk memperbarui isi overlay cart
  function updateCartOverlay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Bersihkan daftar sebelumnya
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
      let div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.imgSrc}" alt="Product Image" class="cart-item-img">
        <div class="cart-item-details">
          <span>${item.title}</span>
          <br>
          <span>$${item.price.toFixed(2)}</span>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
    document.getElementById('totalPrice').innerText = total.toFixed(2);
  }

  // Fungsi untuk menambahkan produk ke cart
  function addProductToCart(title, price, imgSrc) {
    cart.push({ title, price, imgSrc });
    updateCartCount();
    updateCartOverlay();
  }

  // Tambahkan event listener ke semua tombol "Add to cart"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      let productCard = e.target.closest('.product-card');
      let productTitle = productCard.querySelector('.meta-quest-3').innerText;
      let productPriceText = productCard.querySelector('.price-quest-3').innerText;
      let productPrice = parseFloat(productPriceText.replace('$', ''));
      let productImgSrc = productCard.querySelector('.product-img').getAttribute('src');
      addProductToCart(productTitle, productPrice, productImgSrc);
    });
  });

  // Tampilkan overlay cart ketika ikon cart diklik
  document.getElementById('cartIcon').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cartOverlay').classList.toggle('active');
  });

  // Tutup overlay cart ketika tombol close diklik
  document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cartOverlay').classList.remove('active');
  });

  // Tambahkan fitur Clear Cart
  document.getElementById('clearCart').addEventListener('click', function() {
    cart = [];
    updateCartCount();
    updateCartOverlay();
  });

  // Mengarahkan ke halaman payment 
  document.getElementById('payCart').addEventListener('click', function() {
    window.location.href = 'payment.html';
  });
});

