// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a,b,c) {
//     let result = a < b && a < c ? a : b < c && b < a ? b : c
//     console.log(result)
// }
//
// numbers(5, 144, 7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function number(a,b,c) {
//     let result = a > b && a > c ? a : b > c && b > a ? b : c;
//     console.log(result);
// }
//
// number(5,1,18)


// - створити функцію яка повертає найбільше число з масиву
// function maxNumberOfArray(array) {
//     let max = array[0];
//     for (const element of array) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
//
// console.log(maxNumberOfArray([1, 323, 43423, 4454]));


// - створити функцію яка повертає найменьше число з масиву
// function minNumberOfArray(array) {
//     let min = array[0];
//     for (const element of array) {
//         if (element < min){
//             min = element;
//         }
//
//     }
//     return min;
// }
//
// console.log(minNumberOfArray([1, 323, 43423, 4454]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function calc (array) {
//     let sum = 0;
//     for (const argument of array) {
//         sum += argument;
//     }
//     return sum;
// }
//
// console.log(calc([1, 2, 10]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function mean(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement/array.length;
//     }
//     return sum;
// }
//
// console.log(mean([1, 2, 3, 4, 5,]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function arr(...qwe) {
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
// document.write(arr(0, 232, 43245, 34353, 11))


// - створити функцію яка заповнює масив рандомними числами
// function random(arr) {
//     let array = [];
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.floor(Math.random()*100));
//     }
//     return array;
// }
//
// console.log(random(12));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomLimit(arr, limit) {
//     let array = [];
//     for (let i = 0; i < arr; i++) {
//         array.push(Math.floor((Math.random()*limit)))
//     }
//     return array;
// }
//
// console.log(randomLimit(12, 2));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let newArr = [];
//     for (let i = newArr.length - 1; ri = 0, i>=0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//     return newArr;
// }



