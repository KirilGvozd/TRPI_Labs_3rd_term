function circleFunctionDeclaration(radius) {
    alert("Площадь окружности равна: " + (Math.PI * Math.pow(radius, 2)));
    alert("Диаметр окружности равен: " + (2 * radius));
    alert("Длина окружности равна: " + (2 * Math.PI * radius));
}
let circleFunctionExpression = function (radius) {
    alert("Площадь окружности равна: " + (Math.PI * Math.pow(radius, 2)));
    alert("Диаметр окружности равен: " + (2 * radius));
    alert("Длина окружности равна: " + (2 * Math.PI * radius));
}
let arrowFunction = radius => {alert("Площадь окружности равна: " + (Math.PI * Math.pow(radius, 2)));
    alert("Диаметр окружности равен: " + (2 * radius));
    alert("Длина окружности равна: " + (2 * Math.PI * radius));
};


function withThreeParameters (secondParameter, thirdParameter, firstParameter = 123) {
    return String(firstParameter + secondParameter + thirdParameter);
}

function counterOfStudents () {
    let counter = 0
    while (true) {
        let student = String(prompt("Введите фамилию присутсвующего студента (Если хотите прекратить ввод, введите 0: "));
        if (student === "0") {
            alert("До свидания");
            return counter;
        }
        if (student !== "") {
            counter++
        }
    }
}

function counterOfTime () {
    let year = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let numberOfTries = 26 * 26 * 26 * 26 * 26 * 10 * 10 * 10;
    let seconds = numberOfTries * 3;
    while (seconds >= 60) {
        if (seconds >= 60) {
            minutes++;
            seconds -= 60;
        }
        if (minutes >= 60) {
            hours++;
            minutes -= 60;
        }
        if (hours >= 24) {
            days++;
            hours -= 24;
        }
        if (days > 30) {
            months++;
            days -= 30;
        }
        if (months > 12) {
            year++;
            months -= 12;
        }
    }
    alert(`Это займёт ${year} лет ${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`)
}

function conversions (userInput) {
    if (Number(userInput)) {
        if (Number.isInteger(Number(userInput))) {
            alert("Ваше число в hex: " + Number(userInput).toString(16).toUpperCase());
        }
        else {
            alert(Math.ceil(Number(userInput)));
            alert(Math.floor(Number(userInput)));
            alert(Math.round(Number(userInput)));
        }
    }
    else {
        userInput = userInput.toUpperCase();
        alert("Текст в верхнем регистре: " + userInput);
        userInput = userInput.toLowerCase();
        alert("Текст в нижнем регистре: " + userInput);
    }
}

function finderOfWrongSymbol(userInput) {
    let wrongSymbol;
    userInput = userInput.toUpperCase();
    let dictionaryWord = "Корова";

    if (userInput.toLowerCase() !== dictionaryWord.toLowerCase()) {
        for (let i = 0; i < dictionaryWord.length; i++) {
            if (        userInput.toLowerCase()[i] !== dictionaryWord.toLowerCase()[i]) {
                wrongSymbol = i;
                break;
            }
        }
        alert(`Неверный символ ${userInput[wrongSymbol]} на позиции ${wrongSymbol + 1}`);
    }
    else {
        alert("Всё правильно!")
    }
}


//1 задание
let radius = Number(prompt("Введите радиус окружности: "));
alert("Function Declaration: ");
circleFunctionDeclaration(radius);
alert("Function Expression");
circleFunctionExpression(radius);
alert("Arrow function:");
arrowFunction(radius);

//2 задание
let secondParameter = "Hello";
let thirdParameter = prompt("Введите третий параметр: ");
alert("Строка с тремя параметрами: " +  withThreeParameters(secondParameter, thirdParameter));

//3 задание
alert("Количество присутствующих студентов: " + counterOfStudents());

//4 задание
counterOfTime();

//5 задание
let userInput = prompt("Введите текст или любое число: ");
conversions(userInput);

//6 задание
let studentAnswer = prompt("Введите словарное слово к*р*ва: ");
finderOfWrongSymbol(studentAnswer);

//7 задание
let firstSide = Number(prompt("Введите первый катет:", ''));
let secondSide = Number(prompt("Введите второй катет:", ''));
let hypotenuse = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2)).toFixed(2);
let areaOfTriangle = (firstSide * secondSide) / 2;
let perimeterOfTriangle = firstSide + secondSide + Number(hypotenuse);
let heightOfTriangle = (firstSide * secondSide) / hypotenuse;
let cosinesOfTheFirstAngle = firstSide / hypotenuse;
let sinusOfTheFirstAngle = secondSide / hypotenuse; //Косинус второго угла равен синусу первого угла
let sinusOfTheSecondAngle = cosinesOfTheFirstAngle;
let tangentsOfTheFirstAngle = firstSide / secondSide;
let cotangentsOfTheFirstAngle = secondSide / firstSide; //Тангенс второго угла равен катангенсу первого угла
let cotangentsOfTheSecondAngle = tangentsOfTheFirstAngle;
alert(`Площадь треугольника: ${areaOfTriangle}`);
alert(`Периметр треугольника: ${perimeterOfTriangle}`);
alert(`Высота треугольника: ${heightOfTriangle}`);
alert(`Косинус первого угла треугольника: ${cosinesOfTheFirstAngle}`);
alert(`Косинус второго угла треугольника: ${sinusOfTheFirstAngle}`);
alert(`Синус первого угла треугольника: ${sinusOfTheFirstAngle}`);
alert(`Синус второго угла треугольника: ${sinusOfTheSecondAngle}`);
alert(`Тангенс первого угла треугольника: ${tangentsOfTheFirstAngle}`);
alert(`Тангенс второго угла треугольника: ${cotangentsOfTheFirstAngle}`);
alert(`Котангенс первого угла треугольника: ${cotangentsOfTheFirstAngle}`);
alert(`Котангенс второго угла треугольника: ${cotangentsOfTheSecondAngle}`);