function circle(radius) {
    alert("Площадь окружности равна: " + (Math.PI * Math.pow(radius, 2)));
    alert("Диаметр окружности равен: " + (2 * radius));
    alert("Длина окружности равна: " + (2 * Math.PI * radius));
}

function orderList(moneyOnCard) {
    while (true) {
        let priceOfProduct = Number(prompt("Введите сумму вашего товара: "));
        moneyOnCard -= priceOfProduct;
        if (moneyOnCard <= 0) {
            moneyOnCard += priceOfProduct;
            alert("Сумма товаров превышает денежные средства на вашей банковской карте. Выберите товар с меньшей " +
                "стоимостью или завершите покупку. Остаток на вашей карте: " + moneyOnCard + "BYN");
            let exitNumber = Number(prompt("Введите 0 для завершения покупки или любое другое число для продолжения: "));
            if (exitNumber === 0) {
                alert("До свидания!");
                break;
            }
        }
    }
}


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

function params1 (firstSide, secondSide) {
    if (firstSide === secondSide) {
        return "Периметр квадрата равен " + (firstSide * 4);
    }
    else {
        return "Площадь прямоугольника равна " + (firstSide * secondSide);
    }
}

let params2 = function (firstSide, secondSide) {
    if (firstSide === secondSide) {
        return "Периметр квадрата равен " + (firstSide * 4);
    }
    else {
        return "Площадь прямоугольника равна " + (firstSide * secondSide);
    }
};


function counterOfTime () {
    let year = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds;
    seconds = 26 * 26 * 26 * 26 * 26 * 10 * 10 * 10;
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


let radius = prompt("Введите радиус окружности: ");
circle(radius);

let moneyOnCard = Number(prompt("Введите сумму ваших денежных средств на счету: "));
orderList(moneyOnCard);

let secondParameter = "Hello";
let thirdParameter = prompt("Введите третий параметр: ");
alert("Строка с тремя параметрами: " +  withThreeParameters(secondParameter, thirdParameter));

alert("Количество присутствующих студентов: " + counterOfStudents());

let firstSide = Number(prompt("Введите длину первой стороны: "));
let secondSide = Number(prompt("Введите длину второй стороны"));

alert("Результат функции Function Declaration: " + params1(firstSide, secondSide));
alert("Результат функции как Function Expression: " + params2(firstSide, secondSide));

counterOfTime();

let arrowFunction = (secondParameter, thirdParameter, firstParameter = 123) => {return `${firstParameter} ${secondParameter} ${thirdParameter}`};
alert(arrowFunction(secondParameter, thirdParameter));