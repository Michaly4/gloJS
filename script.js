let title = 'ProjektJS';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 252;
let rollback = 54;
let fullPrice = 52000;
let adaptive = false;

//! ************************

console.log(typeof title, typeof fullPrice,typeof rollback);
console.log(screens.length);
console.log(screens.toLowerCase().split(" "));
console.log(`Стоимость верстки экранов ${screenPrice} рублей ` );
console.log(`Стоимость разработки сайта ${fullPrice} рублей  `);
console.log(`Процент отката посреднику за работу (fullPrice * (rollback/100))`);
