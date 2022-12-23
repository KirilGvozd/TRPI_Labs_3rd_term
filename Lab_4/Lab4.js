<<<<<<< HEAD
//1 задание
function FunctionWithoutParameters(...args) {
    if (args.length <= 3) {
        return args.join(' ');
    }
    else if (args.length > 3 && args.length <= 5) {
        return args.map(arg => typeof arg);
    }
    else if (args.length > 5 && args.length <= 7) {
        return args.length;
    }
    else {
        return 'Количество аргументов больше 7';
    }
}

alert(FunctionWithoutParameters(1, 2, 3));
alert(FunctionWithoutParameters(1, 2, 3, 4));
alert(FunctionWithoutParameters(1, 2, 3, 4, 5, 6, 7));
alert(FunctionWithoutParameters(1, 2, 3, 4, 5, 6, 7, 8));



//2 задание
// 1)
//window.a;
//alert(a);    ReferenceError: a is not defined

// 2)
//alert(a);
//window.a = 2; ReferenceError: a is not defined

// 3)
//alert(a);
//window.a = 2;
//let a;   Cannot access 'a' before initialization

// 4)
//alert(a);
//window.a = 2;
//var a;  undefined

// 5)
//alert(a);
//let a = 2; Cannot access 'a' before initialization

//6)
//let a = 2;
//window.a = 3;
//alert(a);

// 7)
//var a = 2;
//window.a = 3;
//alert(a);


//3 задание
let s = 5;
function sum() {
    alert(s);
}

sum();


//4 задание
function makeCounter1() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counter1 = makeCounter1();

alert( counter1() ); // 1
alert( counter1() ); // 2
alert( counter1() ); // 3

let counter2 = makeCounter1();
alert( counter2() ); // 1

/*Вариант 2 */
let currentCount = 1;

function makeCounter2() {
    return function() {
        return currentCount++;
    };
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

alert( counter3() ); // 1
alert( counter3() ); // 2

alert( counter4() ); // 3
alert( counter4() ); // 4


//5 задание
alert(`${FunctionWithoutParameters.name}\n
${sum.name}\n
${makeCounter1.name}\n
${makeCounter2.name}\n
`);


//6 задание
function Volume(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

alert(`Объем первого параллелепипеда: ${Volume(2)(3)(4)}`);
function Volume2(a) {
    return (b, c) => {
        return a * b * c;
    }
}
let volume2 = Volume2(5);
alert(`Объем второго: ${volume2(3, 4)}`);
alert(`Объем третьего параллелепипеда: ${volume2(6, 8)}`);


//7 задание
function* move() {
    let a;
    let x = 0;
    let y = 0;
    let direction;

    for (let i = 0; i < 10; i++) {
        direction = (a = prompt("Введите направление")) !== null && a !== undefined ? a : "default"; // Проверка на null и undefined
        switch (direction.trim().toLowerCase()) {
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            case "up":
                y++;
                break;
            case "down":
                y--;
                break;
        }
        yield [x];
        yield [y]
    }
}

let generator = move();

for (let i = 0; i < 10; i++) {
    alert("X: " + generator.next().value + " Y: " + generator.next().value);
=======
//1 задание
function FunctionWithoutParameters(...args) {
    if (args.length <= 3) {
        return args.join(' ');
    }
    else if (args.length > 3 && args.length <= 5) {
        return args.map(arg => typeof arg);
    }
    else if (args.length > 5 && args.length <= 7) {
        return args.length;
    }
    else {
        return 'Количество аргументов больше 7';
    }
}

alert(FunctionWithoutParameters(1, 2, 3));
alert(FunctionWithoutParameters(1, 2, 3, 4));
alert(FunctionWithoutParameters(1, 2, 3, 4, 5, 6, 7));
alert(FunctionWithoutParameters(1, 2, 3, 4, 5, 6, 7, 8));



//2 задание
// 1)
//window.a;
//alert(a);    ReferenceError: a is not defined

// 2)
//alert(a);
//window.a = 2; ReferenceError: a is not defined

// 3)
//alert(a);
//window.a = 2;
//let a;   Cannot access 'a' before initialization

// 4)
//alert(a);
//window.a = 2;
//var a;  Вывод: undefined

// 5)
//alert(a);
//let a = 2; Cannot access 'a' before initialization

//6)
//let a = 2;
//window.a = 3;
//alert(a);  Вывод: 2

// 7)
//var a = 2;
//window.a = 3;
//alert(a);  Вывод: 3


//3 задание
let s = 5;
function sum() {
    alert(s); // выведет 5, т.к. переменная s находится в глобальной области видимости
}

sum();


//4 задание
function makeCounter1() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
}

let counter1 = makeCounter1();

//alert( counter1() ); // 1
//alert( counter1() ); // 2
//alert( counter1() ); // 3

let counter2 = makeCounter1();
//alert( counter2() ); // 1

/*Вариант 2 */
let currentCount = 1;

function makeCounter2() {
    return function() {
        return currentCount++;
    };
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

//alert( counter3() ); // 1
//alert( counter3() ); // 2

//alert( counter4() ); // 3
//alert( counter4() ); // 4


//5 задание
alert(`${FunctionWithoutParameters.name}\n
${sum.name}\n
${makeCounter1.name}\n
${makeCounter2.name}\n
`);


//6 задание
function Volume(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

alert(`Объем параллелепипеда №1: ${Volume(2)(3)(4)}`);
/* Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, у
которых одно ребро одинаковой длины. */
function Volume2(a) {
    return (b, c) => {
        return a * b * c;
    }
}
let volume2 = Volume2(5);
alert(`Объем параллелепипеда №2: ${volume2(3, 4)}`);
alert(`Объем параллелепипеда №3: ${volume2(6, 8)}`);


//7 задание
function* move() {
    let a;
    let x = 0;
    let y = 0;
    let direction;

    for (let i = 0; i < 10; i++) {
        direction = (a = prompt("Введите направление")) !== null && a !== undefined ? a : "default"; // Проверка на null и undefined
        switch (direction.trim().toLowerCase()) {
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            case "up":
                y++;
                break;
            case "down":
                y--;
                break;
        }
        yield [x, y];
    }
}

let generator = move();

for (let i = 0; i < 10; i++) {
    alert(generator.next().value);
>>>>>>> origin/main
}