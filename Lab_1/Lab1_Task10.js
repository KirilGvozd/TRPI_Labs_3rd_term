let login = "Kirill"
let password = "20122003"

let loginEntered = prompt("Введите логин: ", '')
let passwordEntered = prompt("Введите пароль: ", '')

if (loginEntered == login && passwordEntered == password) {alert("Вы вошли в личный кабинет!")}
else if (loginEntered != login) {alert("Вы не вошли! Неправильный логин!")}
else if (passwordEntered != password) {alert("Вы не вошли! Неправильный пароль!")}
