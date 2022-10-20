let firstSide = 45
let secondSide = 21
let areaOfRectangle = firstSide * secondSide
alert("Площадь прямоугольника равна " + areaOfRectangle)

let squareArea = 5*5

alert("В четырёхугольник А поместится " + Math.round(areaOfRectangle / squareArea) + " квадратов со стороной 5мм")

// 6 задание

let a = 2
alert(++a)
alert(a++)
alert(a++)
alert(++a)

alert("Привет" < "привет")//true
alert("Привет" < "Пока")//false
alert(45 < "53")//true
alert(false > 3)//false
alert(true < "3")//true
alert(3 < "5мм")//false
alert(null == undefined)//true

alert("Введённые вами данные неверны!")

let answer = prompt("Сейчас выходной?", '')
if (answer == "Да" || answer == "да") {
    alert("Ура, отдыхаем!")
}
else if (answer == "Нет" || answer == "нет") {
    alert("Работаем и ждём выходные!")
}
else {
    alert("Вы не то ввели!")
}