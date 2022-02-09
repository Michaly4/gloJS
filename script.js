let title;
let screens;
let screenPrice;
let adaptive = confirm;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function (num) {
   return !isNaN(parseFloat(num)) && isFinite(num) && num != " ";
};


// **** start Function ****
const asking = function () {
   title = prompt("Как называется ваш проект?");
   screens = prompt(
      "Какие типы экранов нужно разработа?  \n  Простые, Сложные, Интерактивные"
   );
   do {
      screenPrice = +prompt("Сколько будет стоить данная работа?");
   } while (!isNumber(screenPrice));

   adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
   let sum1 = 0;
   let sum2 = 0;
   let res;


   for (let i = 0; i < 2; i++) {
      if (i === 0) {
         service1 = prompt("Какой дополнительный тип услуги нужен?");
      }
      if (i === 0) {
         do {
            sum1 = +prompt("Сколько это будет стоить?");
         } while (!isNumber(sum1));

      }
      if (i === 1) {
         service2 = prompt("Какой дополнительный тип услуги нужен?");
      }
      if (i === 1) {
         do {
            sum2= +prompt("Сколько это будет стоить?");
         } while (!isNumber(sum2));
      }
      /*  do {
      sum+= +prompt("Сколько это будет стоить?");
       } while (!isNumber(sum)); */
   }
   res = sum1 + sum2;
   console.log(res);
   return res;
};

function getFullPrice() {
   return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
   return Math.ceil(fullPrice - (fullPrice * rollback) / 100);
}

function getTitle() {
   return (
      title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
   );
}

function getRollbackMessage(price) {
   if (price > 30000) {
      return "Даем скидку в 10%";
   } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
   } else if (price <= 15000) {
      return "Скидка не предусмотрена";
   } else if (price <= 0) {
      return "Что-то пошло не так,вы в пролёте";
   }
}

function showTypeOf() {
   console.log(typeof title, typeof fullPrice, typeof rollback);
}

// **** start Variables ****
asking();
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