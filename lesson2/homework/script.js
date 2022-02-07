// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 43
//     if (time <= 15) {
//         console.log('перша частина години')
//     } else if (time <= 30) {
//         console.log('друга частина години')
//
//     } else if (time <= 45) {
//         console.log('третя частина години')
//
//     }else {
//         console.log('четверта частина години')
//
//     }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 6
// if (day <=10) {
//     console.log('перша декада')
// }else if (day <=20) {
//     console.log('друга декада')
//
// }else  {
//     console.log('третя декада')
//
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = true;
// if (test === true) {
//     console.log('Вірно')
// }else {
//     console.log('Неправильно')
// }

// let test = false ? 'Вірно' : 'Неправильно'
// console.log(test)


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = -3;
// if (a !== 0) {
//     console.log('Вірно');
// }else {
//     console.log('Невірно');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let today = prompt('day of the week');
// switch(today) {
//     case'monday':
//         document.write('smth');
//         break;
//     case'tuesday':
//         document.write('anything');
//         break;
//     case'wednesday':
//         document.write('any');
//         break;
//     case'thursday':
//         document.write('anymore');
//         break;
//     case'friday':
//         document.write('anytime');
//         break;
//     case'saturday':
//         document.write('go');
//         break;
//     case'sunday':
//         document.write('stop');
//         break;
//     default:
//         document.write('error');
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt('enter year')
// if(year % 4 === 0) {
//     console.log('Високосний');
// }else {
//     console.log('невисокосний')
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let question = prompt('Яка «офіційна» назва JavaScript?');
// if(question === 'ECMAScript') {
//     alert('Правильно!');
// }else {
//     alert('Не знаєте? ECMAScript!');
// }