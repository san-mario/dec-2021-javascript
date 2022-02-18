// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function Car(model, manufacturer, edition, max_speed, engine_volume) {
//     this['model'] = model;
//     this['manufacturer'] = manufacturer;
//     this['edition'] = edition;
//     this['max_speed'] = max_speed;
//     this['engine_volume'] = engine_volume;
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this['max_speed']} на годину`)
//     }
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//        console.log(`Модель - ${this['model']}`)
//        console.log(`Країна виробник - ${this['manufacturer']}`)
//         console.log(`Рік випуску - ${this['edition']}`)
//         console.log(`Об'єм двигуна - ${this['engine_volume']}`)
//
//     }
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
// this.max_speed = this.max_speed + newSpeed;
//     };
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// this.changeYear = function (newValue) {
//         this['edition'] = newValue;
// }
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// this.addDriver = function (driver) {
//     this['driver'] = driver;
//     console.log(driver);
// }
// }
//
// let car1 = new Car('BMW', 'Germany', 2017, 230, 3)
// let car2 = new Car('Renault', 'France', 2020, 190, 2)
// console.log(car1);
// car1.drive();
// car2.drive();
// car1.info();
// car2.info();
// car1.increaseMaxSpeed(10);
// car1.changeYear(2022);
// car2.changeYear(2021);
// car1.addDriver('Volodya');
// console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, manufacturer, edition, max_speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.edition = edition;
        this.max_speed = max_speed;
        this.engine = engine;
    }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`Модель - ${this['model']}`)
       console.log(`Країна виробник - ${this['manufacturer']}`)
        console.log(`Рік випуску - ${this['edition']}`)
        console.log(`Об'єм двигуна - ${this['engine']}`)
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed) {
        this.max_speed = newSpeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newValue) {
        this.edition = newValue;
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver (driver) {
        this.driver = driver;
    }
}

let newCar = new Car('MG', 'GB', 2020, 190, 1.8);
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed(210)
newCar.changeYear(2019)
newCar.addDriver('Ivan')
console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Cinderella {
//
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
// let cinderellaPool = [
//     new Cinderella('igor', 22, 46),
//     new Cinderella('nina', 21, 25),
//     new Cinderella('ira', 24, 30),
//     new Cinderella('lesia', 26, 31),
//     new Cinderella('nadia', 29, 32),
//     new Cinderella('genia', 90, 58),
//     new Cinderella('lola', 87, 34),
//     new Cinderella('goha', 34, 39),
// ];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
//     xxx() {
//         console.log(this.name, this.age, this.findShose)
//     }
// }
// let newPrince = new Prince('Migel', 25, 34)
//
//     // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// let shoseFindeResult = (cinderellaPool, newPrince) => {
//     for (let i = 0; i < cinderellaPool.length; i++) {
//         const cinderellaPoolElement = cinderellaPool[i];
//         console.log(cinderellaPoolElement.foot_size);
//         if (cinderellaPoolElement.foot_size === newPrince.findShose) {
//             return `your Cinderella ${cinderellaPoolElement.name}`
//         }
//     }
// }
//
// console.log(shoseFindeResult(cinderellaPool, newPrince));
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let additional = cinderellaPool.find((value) => value.foot_size === newPrince.findShose )
//
// console.log(additional);

