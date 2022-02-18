// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this['id'] = id;
//     this['name'] = name;
//     this['surname'] = surname;
//     this['email'] = email;
//     this['phone'] = phone;
// }
//
// let users= [
//     new User(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
//     new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
//     new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
//     new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
//     new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
//     new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
//     new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
// ];
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userArrFilter = users.filter(function (value) {
//    return value.id %2 === 0;
//
// });
// console.log(userArrFilter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userArrSort = users.sort((a,b) => a.id - b.id);
// console.log(userArrSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = [
//     new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
//     new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
//     new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
//     new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(5, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(6, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(7, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(8, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(9, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
//     new Client(10, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
// ];
//
// console.log(client);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let clientSort = client.sort((a,b) => a.order.length - b.order.length);
// console.log(clientSort);

