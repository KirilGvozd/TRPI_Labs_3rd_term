//1 задание
function ModerationOfComments(comment) {
    let lengthOfComment = 50;
    let editedComment = comment;

    if (comment.length > lengthOfComment) {
        return `Комментарий должен быть не более ${lengthOfComment} символов!`;
    }
    else {
        editedComment = comment.replaceAll(/кот/ig, "*");
        editedComment = editedComment.replaceAll("собак", "Собак");
        editedComment = editedComment.replaceAll("пёс", "многоуважаемый пёс");
        editedComment = editedComment.replaceAll("пес", "многоуважаемый пёс");
        return editedComment;
    }
}

//2 задание
function NumberOfTheWeek(number) {
    let nameOfTheDay = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресенье"
    }
    if (number < 1 || number > 7) {
        alert("Нет такого дня недели!")
    }
    else {
        alert(`День недели: ${nameOfTheDay[number]}`);
    }

    for (let i = 0; i < 8; i++){
        if (i % 2 !== 0){
            alert(`Номер дня недели: ${i}, название дня: ${nameOfTheDay[i]}`);
        }
    }
}


//1 задание
let userComment = prompt("Введите комментарий:");
alert("Отредактированный комментарий: " + ModerationOfComments(userComment));

//2 задание
let numberOfTheDay = prompt("Введите номер дня (от 1 до 7):");
NumberOfTheWeek(numberOfTheDay);

//3 задание
let link = document.createElement("a");
let firstButton = document.createElement("button");
let secondButton = document.createElement("button");
let accent = document.createElement("em");
let bodyOfPage = document.querySelector("body");

let linkStyle =  {
    color: "blue",
    background: "yellow",
    'font-size': "50px",
    'margin-right': "20px",
}

let buttonStyle = {
    color: "red",
    background: "yellow",
    'font-size': "50px",
    'margin-right': "20px",
}

let accentStyle = {
    color: "magenta",
    'margin-right': "20px",
}

Object.assign(link.style, linkStyle);
Object.assign(firstButton.style, buttonStyle);
Object.assign(secondButton.style, buttonStyle);
Object.assign(accent.style, accentStyle);

link.innerHTML = "Это ссылка";
firstButton.innerHTML = "Первая кнопка";
secondButton.innerHTML = "Вторая кнопка"
accent.innerHTML = "Акцент";

bodyOfPage.append(secondButton);
bodyOfPage.append(firstButton);
bodyOfPage.append(accent);
bodyOfPage.append(link);

//4 задание
let shoppingList = new Set(["Молоко", "Хлеб", "Батон", "Батон"]);
let productName;
let isWorking = true;

while (isWorking) {
    let userAnswer = prompt("Что вы хотмте сделать:\n" +
        "1.Добавить товар в список покупок.\n" +
        "2. Удалить товар из списка покупок.\n" +
        "3. Проверить наличие товара в списке.\n" +
        "0. Выход");
    switch (userAnswer) {
        case "0":
            isWorking = false;
            alert("До свидания!")
            break;
        case "1":
            productName = prompt("Введите название товара:");
            let newProduct = productName;
            shoppingList.add(newProduct);
            break;
        case "2":
            productName = prompt("Введите название товара:");
            let checker = shoppingList.delete(productName);
            if (!checker) {
                alert("Нет такого товара в вашем списке!")
            }
            break;
        case "3":
            productName = prompt("Введите название товара:");
            if (shoppingList.has(productName)) {
                alert(`${productName} имеется в вашем списке покупок.`);
            }
            else {
                alert(`Товара ${productName} нет в вашем списке!`);
            }
            break;
        default:
            alert("Вы не то выбрали!");
            break;
    }
}
alert("Количество товаров в списке: " + shoppingList.size);

//5 задание
let shoppingCart = new Map();
exit = true;
let sumOfAllProducts = 0;
let numberOfAllProducts = 0;
while (exit) {
    let choice = Number(prompt("1 - Добавить товар\n2 - Удалить товар\n3 - Изменить кол-во товара\n4 - Информация о товарах в тележке\n5 - Выход"));
    let temporary = {
        Id: id = 0,
        Counter: ct = 0,
        Price: pr = 0
    }
    switch (choice) {
        case 1: {
            temporary.Id = Number(prompt("Введите id"));
            temporary.Counter = Number(prompt("Введите кол-во товаров"));
            temporary.Price = Number(prompt("Введите цену"));
            shoppingCart.set(temporary.Id, temporary);
            numberOfAllProducts++;
            break;
        }
        case 2: {
            shoppingCart.delete(Number(prompt("Введите id товара для удаления")));
            numberOfAllProducts--;
            break;
        }
        case 3: {
            let buff = {
                Id: temporary.Id,
                Counter: Number(prompt("Введите новое кол-во товара")),
                Price: temporary.Price
            }
            shoppingCart.set(Number(prompt("Введите номер товара")), buff);
            break;
        }
        case 4: {
            for (let item of shoppingCart.values()) {
                sumOfAllProducts += item.Price * item.Counter;
            }
            alert(sumOfAllProducts + " - сумма " + numberOfAllProducts + " - кол-во позиций");
            break;
        }
        case 5: {
            exit = false;
            break;
        }
        default: {
            exit = false;
            break;
        }
    }
}