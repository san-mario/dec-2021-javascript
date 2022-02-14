// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n3, '_');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let foo = (a, b) => {
//     let arr = [];
//     for (let i = 0; i < a; i++) {
//         arr.push(Math.floor(Math.random() * b));
//     }
//     return arr;
// }
//
// let result = foo(4, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// result.sort((a,b) => a - b);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let filter = result.filter(function (result) {
//     return result %2 === 0;
// })
//
// console.log(filter);;

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let map = (arr) => {
//     return result.map(value => value.toString())
// }
// console.log(map(result));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let sortNums = (array, direction) => {
//         if (direction === 'ascending') return array.sort((current, next) => current- next);
//         if (direction === 'descending') return  array.sort((current, next) => next - current);
//
//
// }
// console.log(sortNums([1, 56, 9, 2345, 34, 98, 5], 'ascending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let foo = (array) => {
//     return array.sort((a,b) => a.monthDuration - b.monthDuration);
// }
//
// console.log(foo(coursesAndDurationArray));
//
// let newFilter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(newFilter)
