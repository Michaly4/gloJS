let appDate = {
   title: "",
   screens: [],
   screenPrice: 0,
   adaptive: true,
   rollback: 10,
   allServicePrices: 0,
   fullPrice: 0,
   servicePercentPrice: 0,
   services: {},


   start: function () {
      appDate.asking();
      appDate.addPrices();
      appDate.getFullPrice();
      appDate.getServicePercentPrices();
      appDate.getTitle();
      appDate.logger();
   },
   asking: function () {
      do {
         title = prompt("Как называется ваш проект?");
      } while (appDate.isString(title));

      for (let i = 0; i < 2; i++) {
         let name;
         do {
            name = prompt("Какие типы экранов нужно разработать?");
         } while (appDate.isString(name));
         let price = 0;
         do {
            price = +prompt("Сколько будет стоить данная работа?");
         } while (!appDate.isNumber(price));
         appDate.screens.push({
            id: i,
            name: name,
            price: price,
         });
      }

      for (let i = 0; i < 2; i++) {
         let name;
         do {
            name = prompt("Какой дополнительный тип услуги нужен?");
         } while (appDate.isString(name));

         let price = 0;

         do {
            price = prompt("Сколько это будет стоить?");
         } while (!appDate.isNumber(price));
         appDate.services[name] = +price;
      }

      appDate.adaptive = confirm("Нужен ли адаптив на сайте?");
   },

   addPrices: function () {
      // for (const screen of appDate.screens) {
      //    appDate.screenPrice += +screen.price;
      // }
      appDate.screenPrice = appDate.screens.reduce(function (total, screen) {
         return total.price + screen.price;
      });

      for (const key in appDate.services) {
         appDate.allServicePrices += appDate.services[key];
      }


   },

   isNumber: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num) && num != " ";
   },
   isString: function (num) {
      //return num !== " " || num !== "";
      return !isNaN(Number(num));
   },

   getFullPrice: function () {
      appDate.fullPrice = appDate.screenPrice + appDate.allServicePrices;
   },

   getServicePercentPrices: function () {
      appDate.servicePercentPrice = Math.ceil(appDate.fullPrice - (appDate.fullPrice * appDate.rollback) / 100);
   },

   getTitle: function () {
      appDate.title = title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
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
      console.log(appDate.fullPrice);
      console.log(appDate.servicePercentPrice);
      console.log(appDate.screens);
      /*   for (const key in appDate) {
           console.log("Метод" + " " + key + ": " + appDate[key]);
        } */
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