var name = prompt("Your name?")

console.log("Меня зовут " + name);



const birthdateStr = prompt("Сколько вам лет");

console.log('мне ' + birthdateStr);


let ex = +prompt("5+8=")
console.log("Пример 1: 5 + 8 = " + (5 + 8) + " ваш ответ:" + ex);
let ex1 = +prompt("5*5=")
console.log("Пример 2: 5 * 5 = " + (5 * 5) + " ваш ответ:" + ex1);
let ex2 = +prompt("5/5=")
console.log("Пример 3: 5 + 5 = " + (5 / 5) + " ваш ответ:" + ex2);
let ex3 = prompt("5%5=")
console.log("Пример 4: 5 % 5 = " + (5 % 5) + " ваш ответ:" + ex3);

let a = +prompt('первое число')
let b = +prompt('второе число')
let j = +prompt('третье число')

let s = a + b + j
console.log(s / 3);

// const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth();
// const currentDay = new Date().getDate();
// const currentHour = new Date().getHours();

// const dobYear = parseInt(prompt("Введите год вашего рождения (например, 1990):"));
// const dobMonth = parseInt(prompt("Введите месяц вашего рождения (например, 1 для января):")) - 1; // Месяц начинается с 0 (январь)
// const dobDay = parseInt(prompt("Введите день вашего рождения:"));
// const dobHour = parseInt(prompt("Введите час вашего рождения (0-23):"));

// const years = currentYear - dobYear;
// const months = currentMonth - dobMonth;
// const days = currentDay - dobDay;
// const hours = currentHour - dobHour;

// console.log(`Прожито: ${years} год(а), ${months} месяц(ев), ${days} день(дней), ${hours} час(ов)`);
