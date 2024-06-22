'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


document.getElementById('cartButton').addEventListener('click', function() {
  window.location.href = 'CartPage.html';
});

// let list = document.querySelectorAll('.product-grid, .showcase');
// list.forEach((showcase) => {
//   showcase.addEventListener('click', (event) => {
//     if (event.target.classList.contains('bag-add-outline')) {
//       alert("Sản phẩm đã được thêm vào giỏ hàng");
//     }
//   });
// });

// const list1 = document.querySelectorAll('.showcase');
// list1.forEach((showcase) => {
//   showcase.addEventListener('click', (event) => {
//     if (event.target.classList.contains('bag-add-outline')) {
//       var itemnew = showcase.cloneNode(true);
//       document.querySelector('.listCart').appendChild(itemnew);
//     }
//   });
// });


$(document).ready(function() {
  $('.btn-action').on('click', function() {
    alert("Sản phẩm đã được thêm vào giỏ hàng");

    var productName = $(this).closest('.showcase').find('.showcase-title').text().trim();
    var productPrice = $(this).closest('.showcase').find('.price').text().trim();
    var productImage = $(this).closest('.showcase').find('.product-img.default').attr('src');
    var idProduct = $(this).closest('.showcase').data('key');

    var product = {
      name: productName,
      price: productPrice,
      image: productImage,
      id: idProduct
    };
    var item = {
      product,
      quantity: 1
    };

    // Lấy giỏ hàng từ localStorage hoặc khởi tạo giỏ hàng trống
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    var found = false;
    cartItems.forEach(cartItem => {
      if (cartItem.product.id == item.product.id) {
        cartItem.quantity++;
        found = true;
      }
    });

    // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng
    if (!found) {
      cartItems.push(item);
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const countElements = document.querySelectorAll('.count'); // Lấy tất cả các phần tử có class 'count'

    countElements.forEach(element => {
        element.innerText = cartItems.length; // Cập nhật nội dung của phần tử với số lượng giỏ hàng
    });
    // window.location.href = 'CartPage.html';
  });
});

const translations = {
  en: {
      home: "Home",
      categories: "Categories",
      electronics: "Electronics",
      desktop: "Desktop",
      laptop: "Laptop",
      camera: "Camera",
      tablet: "Tablet",
      headphone: "Headphone",
      mens: "Men's",
      formal: "Formal",
      casual: "Casual",
      sports: "Sports",
      jacket: "Jacket",
      sunglasses: "Sunglasses",
      womens: "Women's",
      perfume: "Perfume",
      cosmetics: "Cosmetics",
      bags: "Bags",
      smartWatch: "Smart Watch",
      smartTV: "Smart TV",
      keyboard: "Keyboard",
      mouse: "Mouse",
      microphone: "Microphone",
      shirt: "Shirt",
      shortsJeans: "Shorts & Jeans",
      safetyShoes: "Safety Shoes",
      wallet: "Wallet",
      dressFrock: "Dress & Frock",
      earrings: "Earrings",
      necklace: "Necklace",
      makeupKit: "Makeup Kit",
      jewelry: "Jewelry",
      coupleRings: "Couple Rings",
      bracelets: "Bracelets",
      clothesPerfume: "Clothes Perfume",
      deodorant: "Deodorant",
      flowerFragrance: "Flower Fragrance",
      airFreshener: "Air Freshener",
      blog: "Blog",
      hotOffers: "Hot Offers"
  },
  vi: {
      home: "Trang chủ",
      categories: "Danh mục",
      electronics: "Điện tử",
      desktop: "Máy tính để bàn",
      laptop: "Máy tính xách tay",
      camera: "Máy ảnh",
      tablet: "Máy tính bảng",
      headphone: "Tai nghe",
      mens: "Nam",
      formal: "Trang trọng",
      casual: "Bình thường",
      sports: "Thể thao",
      jacket: "Áo khoác",
      sunglasses: "Kính râm",
      womens: "Nữ",
      perfume: "Nước hoa",
      cosmetics: "Mỹ phẩm",
      bags: "Túi xách",
      smartWatch: "Đồng hồ thông minh",
      smartTV: "TV thông minh",
      keyboard: "Bàn phím",
      mouse: "Chuột",
      microphone: "Micro",
      shirt: "Áo sơ mi",
      shortsJeans: "Quần shorts & jeans",
      safetyShoes: "Giày bảo hộ",
      wallet: "Ví",
      dressFrock: "Váy",
      earrings: "Bông tai",
      necklace: "Dây chuyền",
      makeupKit: "Bộ trang điểm",
      jewelry: "Trang sức",
      coupleRings: "Nhẫn đôi",
      bracelets: "Vòng tay",
      clothesPerfume: "Nước hoa quần áo",
      deodorant: "Khử mùi",
      flowerFragrance: "Hương hoa",
      airFreshener: "Làm thơm không khí",
      blog: "Blog",
      hotOffers: "Ưu đãi hot"
  }
};

function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.innerText = translations[language][key];
  });
}



