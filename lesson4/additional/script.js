// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function foo(...qwe) {
//     for (const qweElement of qwe) {
//         if (qwe.length === 1) {
//             console.log(qwe);
//         }else if (qwe.length === 2){
// document.write(`<p>${qwe[0]}${qwe[1]}</p>`)
//         }
//     }
// }
//
// foo('hhvh', 'hkkjbjk');

// / - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// function foo(a, b) {
//     let array = [];
//     for (let i = 0; i < a.length; i++) {
//         array.push(a[i] + b[i]);
//     }
//     return array
// }
//
// console.log(foo([1, 2, 3, 4], [2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// function foo(a) {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         const aElement = a[i];
//         for (const aElementKey in aElement) {
//             arr.push(aElementKey);
//         }
//     }
//     console.log(arr);
//     return arr
// }
//
// foo([{name: 'Dima', age: 13}, {model: 'Camry'}])

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let foo = (a) => {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         const aElement = a[i];
//         for (const aElementKey in aElement) {
//             arr.push(aElement[aElementKey]);
//         }
//     }
//     console.log(arr);
//     return arr
// }
//
// foo([{name: 'Dima', age: 13}, {model: 'Camry'}]);