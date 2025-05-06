// массив товаров по электронике
const products = [
  {
    id: 1,
    name: "Смартфон",
    price: 50000,
    description: "Смартфон с отличной камерой и производительностью.",
    image: "../img/products/smartphone.png",
  },
  {
    id: 2,
    name: "Ноутбук",
    price: 80000,
    description: "Мощный ноутбук для работы и игр.",
    image: "../img/products/laptop.png",
  },
  {
    id: 3,
    name: "Планшет",
    price: 30000,
    description: "Удобный планшет для чтения и просмотра видео.",
    image: "../img/products/tablet.png",
  },
  {
    id: 4,
    name: "Наушники",
    price: 5000,
    description: "Беспроводные наушники с хорошим звуком.",
    image: "./img/products/headphones.png",
  },
  {
    id: 5,
    name: "Умные часы",
    price: 15000,
    description: "Умные часы с функциями фитнес-трекинга.",
    image: "./img/products/smartwatch.png",
  },
  {
    id: 6,
    name: "Электронная книга",
    price: 10000,
    description: "Электронная книга с подсветкой и большим экраном.",
    image: "./img/products/ebook.png",
  },
  {
    id: 7,
    name: "Фитнес-браслет",
    price: 5000,
    description: "Фитнес-браслет с мониторингом сердечного ритма.",
    image: "./img/products/fitnessband.png",
  },
  {
    id: 8,
    name: "Внешний жесткий диск",
    price: 7000,
    description: "Внешний жесткий диск на 1 ТБ.",
    image: "./img/products/externalharddrive.png",
  },
];

// обрабатываем массив товаров и создаем карточки
function renderProducts() {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = ""; // очищаем контейнер перед добавлением новых карточек
  products.forEach((goods) => {
    const goodsCard = document.createElement("div");
    goodsCard.className = "product-card";
    goodsCard.innerHTML = `
    <img src="${goods.image}" alt="${goods.name}" class="product-image">
    <h2>${goods.name}</h2>
    <p>${goods.description}</p>
    <p>Цена: ${goods.price} €.</p>
    <button class="add-to-cart" data-id="${goods.id}">Добавить в корзину</button>
    `;
    productContainer.appendChild(goodsCard);
  });
}

// вызываем функцию для отображения товаров
renderProducts();
