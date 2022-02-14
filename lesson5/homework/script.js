// - створити функцію яка обчислює та повертає площу прямокутника
// let squareRectangle = (a,b) => a * b;
//
// console.log(squareRectangle(5, 5));

// - створити функцію яка обчислює та повертає площу кола
// let squareCircle = (r) => 3.14 * (r * 2);
//
// console.log(squareCircle(7));

// - створити функцію яка обчислює та повертає площу циліндру
//
// let foo = (r,h) => {
//
//     let squarecylinder = 2 * 3.14 * r * h
//
//     return squarecylinder;
// }
//
// console.log(foo(5, 1));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let foo = (a) => {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
//
// foo([1,false,'fsdfsd'])

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let foo = (a) => {
//     document.write(`${a}`)
// }
//
// foo('aaaaaaaaaa')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let foo = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${t}</li>`)
//     document.write(`</ul>`)
// }
//
// foo('yeah')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let foo = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foo('aaaa', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let foo = (xxx) => {
//     document.write(`<ul>`)
//     for (const element of xxx) {
//         document.write(`<li>${element}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// foo([false,12321, '12312', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let foo = (arr) => {
//
//     for (const arrElement of arr) {
//             document.write(`<div>${arrElement.id}.${arrElement.name}.${arrElement.age}</div>`)
//
//     }
//
// }
//
// foo([{id: 1, name: 'Orest', age: 25}, {id: 2, name: 'Ivan', age: 21}, {id: 3, name: 'Petro', age: 18}])