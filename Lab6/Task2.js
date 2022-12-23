let products = [];

class Product {
    constructor(id, price, name, img, background) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    //Добавление товара
    AddProduct() {
        let div = document.createElement('div');
        div.className = "Information";
        div.style.width = '315px';
        div.style.height = '350px';
        div.style.textAlign = 'center';
        div.style.fontFamily = "Arial Black";
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '300px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','В корзину');
        let button1 = new Button(150, 75, 'blue','В корзину');
        div.append(button.AddProductButton());

    }

    Delete(id) {
        let arr = document.getElementsByClassName('Information');
        for (let x = 0; x < arr.length; x++) {
            if ((x + 1) === id) {
                arr[x].remove();
            }
        }
        let size = Object.getOwnPropertyNames(this);
        for(let i = 0; i < size.length; i++){
            delete this[size[i]];
        }
    }

}


class Button {

    constructor(width, height, background, text) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    //Создание кнопок
    AddProductButton() {
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.id = this.id;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
}

function backgroundOdd(){
    let arr = document.getElementsByClassName('Information');
    for(let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 === 1 || (i + 1) === 1 || (i+1) === 0) {
            arr[i].style.background = 'gray';
        }
    }
}

let first = new Product(1, 10000,'MacBook Pro 11\'', "MacBook.jpeg", 'white');
first.AddProduct();
let second = new Product(2, 2000,'MacBook Pro 12\'', "MacBook.jpeg", 'white');
second.AddProduct();
let third = new Product(3, 3000,'MacBook Pro 13\'', "MacBook.jpeg", 'white');
third.AddProduct();
let fourth = new Product(4, 4000,'MacBook Pro 14\'', "MacBook.jpeg", 'white');
fourth.AddProduct();
let fifth = new Product(5, 5000,'MacBook Pro 15\'', "MacBook.jpeg", 'white');
fifth.AddProduct();
let sixth = new Product(6, 6000,'MacBook Pro 16\'', "MacBook.jpeg", 'white');
sixth.AddProduct();
backgroundOdd();

const firstButton = document.createElement('button');

firstButton.setAttribute("id","button1");
firstButton.style.fontFamily = "Arial Black";
firstButton.style.color = "red";
const cont = document.querySelector('body');
cont.append(firstButton);
button1.onclick = function() {
    let i = 1;
    first.Delete(i);
    i++;
};
firstButton.innerText = "Delete"


const secondButton = document.createElement('button');

secondButton.setAttribute("id", "button2");
secondButton.style.fontFamily = "Arial Black";
secondButton.style.color = "green";
cont.append(secondButton);
button2.onclick = function() {
    let first = new Product(1, 10000, 'MacBook Pro 11\'', "MacBook.jpeg", 'white');
    first.AddProduct();
};

secondButton.innerText = "Add";
secondButton.style.width = 200;