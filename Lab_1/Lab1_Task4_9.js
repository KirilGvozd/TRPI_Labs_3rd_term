let firstSide = 45
let secondSide = 21
let areaOfRectangle = firstSide * secondSide
alert("Площадь прямоугольника равна " + areaOfRectangle)

let squareArea = 5*5

alert("В четырёхугольник А поместится " + Math.round(areaOfRectangle / squareArea) + " квадратов со стороной 5мм")

// 6 задание

let i = 2
let a = ++i
let b = i++
alert("Значение a: " + a)
alert("Значение b: " + b)

alert("Привет" < "привет")//true
alert("Привет" < "Пока")//false
alert(45 < "53")//true
alert(false > 3)//false
alert(true < "3")//true
alert(3 < "5мм")//false
alert(null < undefined)//false

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