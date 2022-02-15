let appDate = {
   title: "",
   screens: "",
   screenPrice: 0,
   adaptive: true,
   rollback: 10,
   allServicePrices: 0,
   fullPrice: 0,
   servicePercentPrice: 0,
   service1: "",
   service2: "",
 
   asking: function () {
     appDate.title = prompt("Как называется ваш проект?");
     appDate.screens = prompt(
       "Какие типы экранов нужно разработа?  \n  Простые, Сложные, Интерактивные"
     );
     do {
       appDate.screenPrice = +prompt("Сколько будет стоить данная работа?");
       
     } while (!isNumber(appDate.screenPrice));
 
     appDate.adaptive = confirm("Нужен ли адаптив на сайте?");
   },
   start: function () {
    appDate.asking()
    appDate.allServicePrices = getAllServicePrices()
    appDate.fullPrice = getFullPrice()
    appDate.servicePercentPrice = getServicePercentPrices()
    appDate.title = getTitle()
  },
 
   isNumber: function (num) {
     return !isNaN(parseFloat(num)) && isFinite(num) && num != " ";
   },
 
   getAllServicePrices: function () {
     let sum = 0;
 
     for (let i = 0; i < 2; i++) {
       let price = 0;
 
       if (i === 0) {
         appDate.service1 = prompt("Какой дополнительный тип услуги нужен?");
       }
       if (i === 1) {
         appDate.service2 = prompt("Какой дополнительный тип услуги нужен?");
       }
       do {
         price = prompt("Сколько это будет стоить?");
       } while (!isNumber(price));
       sum += +price;
     }
 
     return sum;
   },
   getServicePercentPrices: function () {
     return Math.ceil(appDate.fullPrice - (appDate.fullPrice * appDate.rollback) / 100);
   },
 
   getTitle: function () {
     return (
       appDate.title.trim()[0].toUpperCase() + appDate.title.trim().substring(1).toLowerCase()
     );
   },
 
   getRollbackMessage: function (price) {
     if (price > 30000) {
       return "Даем скидку в 10%";
     } else if (price > 15000 && price <= 30000) {
       return "Даем скидку в 5%";
     } else if (price <= 15000) {
       return "Скидка не предусмотрена";
     } else if (price <= 0) {
       return "Что-то пошло не так,вы в пролёте";
     }
   },
 
 
   logger: function () {
     for (const key in appDate) {
       console.log(key + " " + appDate[key]);
     }
   },
 };
 appDate.start();
 
 
 
 
 
 
 
 /*
 function showTypeOf() {
   console.log(typeof title, typeof fullPrice, typeof rollback);
 } 
 showTypeOf();
 console.log(getRollbackMessage(fullPrice));
 console.log(servicePercentPrice);
 console.log(screens.toLowerCase().split(","));
  */
 
 /*  do {
        sum+= +prompt("Сколько это будет стоить?");
         } while (!isNumber(sum)); */
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
 