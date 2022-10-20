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
let arrowFunction = (radius) => {alert("Площадь окружности равна: " + (Math.PI * Math.pow(radius, 2)));
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
        counter++
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
    alert(seconds);
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


