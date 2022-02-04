let title = prompt('Как называется ваш проект?');
console.log(title);
let screens = prompt("Какие типы экранов нужно разработа?  \n  Простые, Сложные, Интерактивные");
console.log(screens);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);
let rollback = 4;
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
let servicePercentPrice = fullPrice - (fullPrice * rollback / 100);
console.log(servicePercentPrice);

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

/* console.log(typeof title, typeof fullPrice,typeof rollback);
console.log(screens.length);
console.log(screens.toLowerCase().split(","));
console.log(`Стоимость верстки экранов ${screenPrice} рублей ` );
console.log(`Стоимость разработки сайта ${fullPrice} рублей  `);
console.log(`Процент отката посреднику за работу` + " " + fullPrice * (rollback / 100)); */


