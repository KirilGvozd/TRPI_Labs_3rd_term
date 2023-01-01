//Выполните валидацию формы.
const registration = document.querySelector('.registration');
const autorisation = document.querySelector('.autorisation');

let isClicked = false; 

const regs = {
    emailRegEx: new RegExp(/^[a-zA-Z0-9_.]+@[a-z]+\.[a-z]+$/),
    nameRegEx: new RegExp(/^[a-zA-Z]{2,}$/),
    passwordRegEx: new RegExp(/^[a-zA-Z0-9_.]{8,64}$/)
};

let checkEmail = (email) => {
    return regs.emailRegEx.test(email.value);//выполняет поиск сопоставления регулярного выражения указанной строке.
}
let checkPassword = (password) => {
    return regs.passwordRegEx.test(password.value);
}
let checkName = (userName) => {
    return regs.nameRegEx.test(userName.value);
}

function checkAuthorisationForm() {
    let form = document.forms.authForm; //возвращает коллекцию форм
    let inputsAuth = Array.from(form.elements.inputAuth);
    let email = inputsAuth.find(el => el.type === "text"); //возвращает значение первого найденного в массиве элемента
    let password = inputsAuth.find(el => el.type === "password");

    let resEmail = checkEmail(email);
    let resPassword = checkPassword(password);

    if (!resPassword) {
        password.value = "";
        document.getElementById("passAuth").focus();//устанавливает фокус на элементе
        password.placeholder = "Password is not valid";
    }
    if (!resEmail) {

        email.value = "";
        password.placeholder = "Password is not valid";
    }
    isClicked = false;
}

function checkRegistrationForm() {
    let form = document.forms.regForm;
    let inputsReg = Array.from(form.elements.inputReg); //создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.

    let email = inputsReg.find(el => el.type === "email");
    let password = inputsReg.find(el => el.type === "password");
    let userName = inputsReg.find(el => el.type === "text");

    let resEmail = checkEmail(email);
    let resPassword = checkPassword(password);
    let resName = checkName(userName);

    if (!resPassword) {
        password.value = "";
        password.placeholder = "Password is not valid";
    }
    if (!resEmail) {
        email.value = "";
        email.placeholder = "Email is not valid";
    }
    if (!resName) {
        userName.value = "";
        name.placeholder = "Name is not valid";
    }
    isClicked = false;
}



autorisation.onclick = () => {
    if (!isClicked) {
        isClicked = true;
        checkAuthorisationForm();
    }
};

registration.onclick = () => {
    if (!isClicked) {
        isClicked = true;
        checkRegistrationForm();
    }
};

