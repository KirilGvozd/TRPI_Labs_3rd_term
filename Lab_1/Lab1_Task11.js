let russianIsPassed = false
let mathIsPassed = false
let EnglishIsPassed = true

if (russianIsPassed && mathIsPassed && EnglishIsPassed) {alert("Поздравляю, вы переведены на следующий курс!")}
else if (!russianIsPassed && !mathIsPassed && !EnglishIsPassed) {alert("Произошло отчисление :(")}
else if (!russianIsPassed || !mathIsPassed || !EnglishIsPassed) {alert("Вас ожидает пересдача, готовьтесь!")}
