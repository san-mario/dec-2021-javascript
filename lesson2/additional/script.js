// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let arrLength = friends.length;
// if (arrLength >= 3) {
//     console.log('большой массив');
// }else  {
//     console.log('маленкьий массив');
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a = +prompt();
let b = +prompt();
let c = +prompt();
       // 2   1    3   1    3   2    1   3  1   1   2    2   3       3   1
let abc = a > b && c > b && c > a && b > c? b : b > a && a > c &&  ? c : b;
console.log(abc);

// b : c 2 1 3