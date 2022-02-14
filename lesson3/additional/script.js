// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 2; i <= 50; i+=2) {
//     arr[i] = i;
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 1; i <= 50; i+=3) {
//     arr[i]= i;
// }
// console.log(arr);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = ((Math.random() * 12) - 15);;
//
//
// }
// console.log(arr);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)



let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];


let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let result =  [citiesWithId, usersWithId];
// console.log(result)
for (let i = 0; i < result.length; i++) {
    const resultElement = result[i];
    console.log(resultElement.re);
}