// - Дано натуральное число n. Выведите все числа от 1 до n.
// function f(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// f(10);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function f(a,b) {
//     if (a > b) {
//         for (let i = b; i <= a ; i++) {
//             console.log(i);
//         }
//     }else if(a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//
//     }
// }
//
// f(11,20)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = (arr, i) => {
//     arr.splice(i+2, 0, arr[i]);
//     arr.splice(i, 1);
//     console.log('arr =', arr)
//     return 0;
// }
//
// foo([9,8,0,4], 0);
// foo([9,8,0,4], 1);
// foo([9,8,0,4], 2);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
//
// let foo = (arr) => {
//     let newArr = [];
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         if (arrElement > 0) {
//             newArr.push(arrElement);
//         }
//
//         if (arrElement === 0) {
//             newArray.push(arrElement);
//         }
//
//     }
//     let resultArray = newArr.concat(newArray);
//     console.log(resultArray);
//
// }
// foo([1, 0, 6, 0, 3]);
// foo([0, 1, 2, 3, 4]);
// foo([0, 0, 1, 0]);







