// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arrNumber = [1, 2, 3, 4, 5];
// let arrString = ['1', '2', '3', '4', '5'];
// let arrMix = [1, true, '2', false, 3,];
// console.log(arrNumber, arrString, arrMix);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
//
// arr[1] = true;
// arr[0] = 1;
// arr[3] = 5;
// arr[2] = 'false';
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 0; i < 10; i++ ) {
//     document.write('<div>dsfdsf</div>');
// }


// for (let i = 0; i < 10; i++ ) {
//     document.write(`<div>dsfdsf - ${i}</div>`);
// }


// let i = 0;
// while (i < 20) {
// document.write('<div>sadad</div>')
//     i++;
// }


// let i = 0;
// while (i < 20) {
//     document.write(`<div>sadad - ${i}</div>`)
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrNumber = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// for (let number of arrNumber) {
//     console.log(number);
// }


// let arrString = ['1q', '2w', '3e', '4r', '5t', '1y', '2u', '3i', '4o', '5p'];
// for (let string of arrString) {
//     console.log(string);
// }


// let arrMix = [1, 2, 3, 4, 5, '1q', '2w', '3e', '4r', '5t'];
// for (let arrMix1 of arrMix) {
//     console.log(arrMix1);
// }


// let arrMix = [1, 2, 3, 4, true, '1q', '2w', '3e', '4r', false];
// for (let arrMix1 of arrMix) {
//     if(typeof arrMix1 === "boolean") {
//         console.log(arrMix1)
//     }
// }


// let arrMix = [1, 2, 3, 4, true, '1q', '2w', '3e', '4r', false];
// for (let arrMix1 of arrMix) {
//     if(typeof arrMix1 === "number") {
//         console.log(arrMix1);
//     }
// }


// let arrMix = [1, 2, 3, 4, true, '1q', '2w', '3e', '4r', false];
// for (let arrMix1 of arrMix) {
//     if(typeof arrMix1 === "string") {
//         console.log(arrMix1);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let arr = [];
// arr[0] = '9090vz';
// arr[1] = 22;
// arr[2] = '1e';
// arr[3] = false;
// arr[4] = 1;
// arr[5] = 0;
// arr[6] = '5r';
// arr[7] = true;
// arr[8] = 3;
// arr[9] = '1';
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}</div>`);
//     console.log(i);
//
// }


// for (let i = 0; i < 100; i++) {
//     document.write(`<div>${i}</div>`);
//     console.log(i);
// }


// for (let i = 0; i < 100; i+=2) {
//     document.write(`<div>${i}</div>`);
//     console.log(i);
// }


// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0) {
//     document.write(`<div>${i}</div>`);
//     console.log(i);
//     }
// }


// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//         document.write(`<div>${i}</div>`)
//         console.log(i);
//     }
// }