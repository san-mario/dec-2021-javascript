// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let firstNumber = prompt('enter your first number');
// let secondNumber = prompt('enter your second number');
//
// let result = firstNumber > secondNumber ? firstNumber : secondNumber === firstNumber ?  'числа равны' : firstNumber
// console.log(result)


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let apartmentsNumber = +prompt('номер квартиры?');
// if (apartmentsNumber <= 20) {
//     document.write('Первый подъезд');
// }else if (apartmentsNumber <= 48){
//     document.write('Второй подъезд');
// }else if (apartmentsNumber <=90) {
//     document.write('Третий подъезд');
// }else {
//     document.write('В доме только 90 квартир!')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// enter = +prompt();
// let result = enter === 10 ? 'правильно' :'неправильно';
// console.log(result)


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = 1;
// let z = (typeof x)
// if (z === "number") {
//     console.log(1);
// }else if(z === "string") {
//     console.log(2);
// }else if (z === "boolean" || {} || []) {
//     console.log(3);
// }else {
//     console.log('nope');
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let x = +prompt();
// if(x >= 10 && x <= 20) {
//     document.write('идем в OKTEN');
// }else {
//     document.write('сидим дома и учимся онлайн');
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let x = 5;
//
// switch (x) {
//     case 1:
//         console.log('phone');
//         break;
//     case 2:
//         console.log('moto');
//         break;
//     case 3:
//         console.log('auto');
//         break;
//     case 4:
//         console.log('cache');
//         break;
//     case 5:
//         console.log('house');
//         break;
//     default:
//         console.log('incorrect number');
// }