let firstNumber = Number(prompt("Введите первое число:", ''))
let secondNumber = Number(prompt("Введите второе число", ''))
let sum = Number(firstNumber + secondNumber)

alert("Сумма двух чисел равна " + sum)

alert(true + true)
alert(0 + "5")
alert(5 + "мм")
//alert(8 / infinity)
alert(9 * "\n9")
alert(null - 1)
alert("5" - 2)
alert("5px" - 3)
alert(true - 3)
alert(7 || 0)

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        i = i + 2;
        alert(i)
    }
    else {alert(i + "мм")}
}