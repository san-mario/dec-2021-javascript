// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let foo = (a,b,c) => {
//     let result = a < b && a < c ? a : b < c && b < a ? b : c
//     console.log(result)
// }
//
// foo(5,99,17)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let foo = (a,b,c) => {
//     let result = a > b && a > c ? a : b > c && b > a ? b : c;
//     console.log(result);
// }
//
// foo(5,99,17)

// - створити функцію яка повертає найбільше число з масиву
// let foo = (arr) => {
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max
// }
//
// console.log(foo([1, 3, 5, 99, 28]));

// - створити функцію яка повертає найменьше число з масиву
// let foo = (arr) => {
//     let min = arr[0];
//     for (const element of arr) {
//         if (element < min){
//             min = element;
//         }
//
//     }
//     return min;
// }
//
// console.log(foo([1, 323, 43423, 4454]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let foo = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(foo([1, 323, 43423, 4454]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let foo = (arr) => {
//     let sum = 0
//     for (const arrElement of arr) {
//         sum += arrElement
//     }
//     result = sum / arr.length
//     return result;
// }
//
// console.log(foo([1, 323, 43423, 4454]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let foo = (...qwe) => {
//     let min = qwe[0]
//     let max = qwe[0]
//     for (const element of qwe) {
//         if (element < max) {
//             max = element;
//         } else if (element > min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min
// }
//
// document.write(foo(1, 323, 43423, 4454));

// - створити функцію яка заповнює масив рандомними числами
// let foo = (arr) => {
//     let array = [];
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.floor(Math.random()*100));
//     }
//     return array;
// }
//
// console.log(foo(12));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let foo = (arr, limit) => {
//     let array = [];
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.floor((Math.random()*limit)))
//     }
//     return array;
// }
//
// console.log(foo(12, 5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let foo = (arr) => {
//     let ri = arr.length - 1;
//     let arrReverse = [];
// for (const element of arr) {
//     arrReverse[ri] = element;
//     ri--;
// }
// console.log(arrReverse)
// }
//
// foo([1, 2, 3]);
