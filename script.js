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


if (fullPrice >= 30000){
   console.log("Даем скидку в 10%"); 
}
else if(fullPrice >= 15000 && fullPrice < 30000){
   console.log("Даем скидку в 5%");
}
else if(fullPrice < 15000 && fullPrice > 0){
   console.log("Скидка не предусмотрена");
}
else if(fullPrice <= 0){
   console.log("Что то пошло не так");
}




console.log(title);
console.log(screens.toLowerCase().split(","));
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePercentPrice);



/* console.log(typeof title, typeof fullPrice,typeof rollback);
console.log(screens.length);
console.log(screens.toLowerCase().split(","));
console.log(`Стоимость верстки экранов ${screenPrice} рублей ` );
console.log(`Стоимость разработки сайта ${fullPrice} рублей  `);
console.log(`Процент отката посреднику за работу` + " " + fullPrice * (rollback / 100)); */


