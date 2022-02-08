let title = prompt('Как называется ваш проект?');
let screens = prompt("Какие типы экранов нужно разработа?  \n  Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 4;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * rollback / 100);
let allServicePrices;


// **** start Function ****

const getAllServicePrices = function () {
   return servicePrice1 + servicePrice2;
};
function getFullPrice() {
   return screenPrice + allServicePrices;
};
function getServicePercentPrices() {
   return Math.ceil(fullPrice - (fullPrice * rollback / 100));
};
function getTitle() {
   return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
}
function getRollbackMessage(price) {

   if (price > 30000) {
      return "Даем скидку в 10%";
   } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
   } else if (price <= 15000) {
      return 'Скидка не предусмотрена';
   } else if (price <= 0) {
      return "Что-то пошло не так,вы в пролёте";
   }
}
function showTypeOf() {
   console.log(typeof title, typeof fullPrice, typeof rollback);
}

// **** start Variables ****
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


// **** start console ****
showTypeOf();
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log(screens.toLowerCase().split(","));





//******************************
/*
console.log(title.toUpperCase());
console.log(screens.toLowerCase().split(","));
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);
*/



/* console.log(typeof title, typeof fullPrice,typeof rollback);
console.log(screens.length);
console.log(screens.toLowerCase().split(","));
console.log(`Стоимость верстки экранов ${screenPrice} рублей ` );
console.log(`Стоимость разработки сайта ${fullPrice} рублей  `);
console.log(`Процент отката посреднику за работу` + " " + fullPrice * (rollback / 100)); 

function getTitle() {

   if (title !== "" && title.charAt(0) !== " ") {
      return title.charAt(0).toUpperCase() + title.slice(1);
   }
}

*/