let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;
//! ************************
//alert('Hey Alert');
//console.log('Hey Console');
screenPrice = 444;
rollback = 99;
fullPrice = 50000;
screens = 'Простые,Сложные,Интерактивные  ';
title= 'ProjektJS';
let percent = 50000*(99/100);
//! *************************
console.log(title,screens,fullPrice,rollback,screenPrice);
console.log(screens.length);
console.log(screens.toLowerCase().split());
console.log(`Стоимость верстки экранов ${screenPrice} рублей ` );
console.log(`Стоимость разработки сайта ${fullPrice} рублей  `);
//console.log(`Процент отката посреднику за работу`,` ${fullPrice} * (${rollback}/100)`);
console.log(`Процент отката посреднику за работу ${percent}`);
