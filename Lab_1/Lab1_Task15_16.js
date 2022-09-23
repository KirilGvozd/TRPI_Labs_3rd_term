let yourNumber = 0;

while (yourNumber < 100) {
    yourNumber = Number(prompt("Введмте любое число:", ''))
}

let numberOfTheDay = 1;

    numberOfTheDay = Number(prompt("Введите любое число от 1 до 7", ''))
    switch (numberOfTheDay) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Четверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье")
            break;
        default:
            alert("Нет такого дня недели!");
            break;
    }