//1 задание
let products = {
    shoes: {
        boots:{
            id: 1,
            sizeOfTheShoe: 43,
            color: "Розовый",
            price: 150
        },
        sneakers: {
            id: 2,
            sizeOfTheShoe: 44,
            color: "Чёрный",
            price: 250
        },
        sandals:{
            id: 3,
            sizeOfTheShoe: 42,
            color: "Розовый",
            price: 50
        }
    }
}

//2 задание
products[Symbol.iterator] = function (){
    return{
        current:  products.shoes.boots.id,
        last: products.shoes.sandals.id,
        next(){
            if (this.current <= this.last){
                return {
                    done: false, value: this.current++
                };
            }
            else {
                return {
                    done: true
                }
            }
        }
    };
}

for (let shoe of products){
    alert(shoe);
}

//3 задание
/*
let foundChecker = false;
let lowestPrice = 30;
let highestPrice = 200;
let sizeOfShoe = 42;
let colorOfShoe = "Розовый";

alert(`Обувь в ценовом диапазоне от ${lowestPrice} до ${highestPrice} рублей:`);
for (let key in products.shoes){
    if (products.shoes[key].price >= lowestPrice && products.shoes[key].price <= highestPrice){
        alert(`Id товара: ${products.shoes[key].id}`);
        foundChecker = true;
    }
}
if(!foundChecker) {
    alert(`Нет пары ${sizeOfShoe} размера!`);
}

foundChecker = false;
alert(`Обувь ${sizeOfShoe} размера:`);
for (let key in products.shoes){
    if (products.shoes[key].sizeOfTheShoe === sizeOfShoe){
        alert(`Id товара: ${products.shoes[key].id}`);
        foundChecker = true;
    }
}
if(!foundChecker) {
    alert(`Нет пары ${sizeOfShoe} размера!`);
}

foundChecker = false;
alert(`Обувь цвета ${colorOfShoe}:`);
for (let key in products.shoes){
    if (products.shoes[key].color === colorOfShoe){
        alert(`Id товара: ${products.shoes[key].id}`);
        foundChecker = true;
    }
}
if(!foundChecker) {
    alert(`Нет пары ${sizeOfShoe} размера!`);
}
*/

//4 задание
let newBoots = {};

Object.defineProperty(newBoots, "id", {
    value: 4,
    writable: false,
    configurable: false
});

Object.defineProperty(newBoots, "sizeOfTheShoe", {
    value: 45,
    writable: false,
});

Object.defineProperty(newBoots, "color", {
    value: "Белый",
    writable: false,
});

Object.defineProperty(newBoots, "price", {
    value: 500
});

alert(`Цвет ботинок ${newBoots.sizeOfTheShoe} размера: ${newBoots.color}`);
delete newBoots.id;
alert(`Id товара: ${newBoots.id}`);

//5 задание
Object.defineProperty(newBoots, "discount", {
    value: 35,
    writable: false
});

Object.defineProperty(newBoots, "finalCost", {
    get(){
        return this.price - this.price * this.discount / 100;
    },
    set: function (value) {
        this.discount = 100 - value / this.price * 100;
    }
});

alert(`Полная цена: ${newBoots.price}`)
alert(`Скидка: ${newBoots.discount}`);
alert(`Цена со скидкой: ${newBoots.finalCost}`);