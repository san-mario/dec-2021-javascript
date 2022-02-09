// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     let squareRectangle = a * b;
//     console.log(squareRectangle);
//     return squareRectangle;
// }
//
// square(5, 10);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function square(r) {
//     let squareCircle = Math.PI * (r * 2);
//     console.log(squareCircle);
//     return
// }
//
// square(8);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square(h,r) {
//     let squareCylinder = 2 * 3.14 * r * h;
//     return squareCylinder;
// }
//
// console.log(square(10,50));


// - створити функцію яка приймає масив та виводить кожен його елемент
// function pushArray(...qwe) {
//     for (let i = 0; i < qwe.length; i++) {
//         const qweElement = qwe[i];
//         document.write(qwe[i]);
//     }
//
// }
// pushArray([3, 4, 188, 90, 'e']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(paragraph) {
//
//     document.write(`<p>${paragraph}</p>`);
//
// }
//
// text('fjfjjf');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
//
// listCreator('fsfs');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listCreator(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listCreator('fafdafds', 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function f(array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// f([true,'Stepan Giga', 2021, 'Ivo Bobul']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function objectListCreator(fff) {
//     for (const fffKey of fff) {
//         document.write(`<div>${fffKey.id}.${fffKey.name}.${fffKey.age}</div>`)
//
//     }
//
// }
//
// objectListCreator([{id: 1, name: 'Petro', age: 51}, {id: 2, name: 'Ivan', age: 48}]);