// Arrow function

// arrow() виклик перед оголошенням дає error
const arrow = () => { }
arrow()

const sum = (a, b) => a + b
console.log(sum(5, 6));

const sum1 = (a, b) => { return a + b } // явне повернення має бути з ключовим словом return та у фігурних дужках
console.log(sum(5, 6));

const sum3 = a => a + 6
console.log(sum3(5));

const foo = (...args) => console.log(args);

foo(1, 4, 5, 9, 5, 6)

// У методах обʼєкту не використовуємо стрілочні функції


// Callback function

function add(a, b) {
    return a + b
}
console.log(add(5, 8));

function addValue(a, b) {
    return a + b
}

function sumValue(a, b) {
    return a * b
}

// callback дозволяє викликати потрібну функцію для того самого аргумента, фактично функція яка використовує та видає результат іншої функції за посиланням
function fooCall(a, b, callback) { 
    const result = callback(a, b)
    console.log(`Result is ${result}`);
    console.log(callback);
}

fooCall(4, 5, addValue); // під час виклику функції з callback параметром передаємо масив та назву функції яку треба використати
fooCall(4, 5, sumValue)
fooCall(4, 5, (a, b) => a + b)
fooCall(4, 5, (a, b) => a * b)


// forEach метод перебору масиву

const arr = [2, 6, 4, 8, 9];

function customForEach(arr, callback) {
    for (let i = 0; i< arr.length; i += 1) {
      callback(arr[i], i, arr)
    }
}

customForEach(arr, callback)
function callback(elem, idx, array) {
    if (elem === 3) {
        array.splice(idx, 1)
    }
}

arr.forEach((elem, idx, array) => {
    if (elem === 8) {
      array.splice(idx, 1);
    }
})

console.log(arr);

arr.map((item) => item * item).forEach((elem, idx, array) => console.log(array))

// Tasks

// Task 1

// Створи стрілочну функцію logItem(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach()


const logItems = arr => arr.forEach((item, idx, arr) => console.log(`${idx + 1} - ${item}`))


logItems(['Mango', 'Poly', 'Ajax'])
logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// Task 2
// Напиши наступні функції:
// createProduct(obj, callback) - приймає обʼєкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає callback передаючт йому створений обʼєкт
// logProduct(product) - callback приймаючий обʼєкт продукту і логуючий його в консоль
// logTotalPrice(product) - callback, що приймає обʼєкт продукту і логує загальну вірстість товару в консоль


function createProduct(obj, callback) {
    const product = {
        id: Date.now(),
        ...obj
    }
    callback(product)
}

function logProduct(product) {
    console.log('Product:', product);
}

function logTotalPrice({ price, quantity }) {
    console.log(`Product total price ${price * quantity}`);
}

createProduct({ name: "Apple", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "Apple", price: 30, quantity: 3 }, logTotalPrice);

createProduct({ name: "Lemon", price: 20, quantity: 3 }, logProduct);
createProduct({ name: "Lemon", price: 20, quantity: 3 }, logTotalPrice);

// Task 3
// Створи функцію яка буде отримувати 2 параметри.
// 1 - масив чисел
// 2 - функцію яка має опрацювати кожен елемент масиву.
// Функція повертає новий масив кожел елемент якого є результатом виконання callback function


function each(arr, action) {
    const item = [];
    arr.forEach( elem => item.push(action(elem)))
    return item
}

console.log(each([64, 49, 36, 25, 16], value =>  value - 10));
console.log(each([64, 49, 36, 25, 16], value =>  value * 2));
console.log(each([64, 49, 36, 25, 16], value =>  Math.ceil(value)));
console.log(each([64, 49, 36, 25, 16], value =>  Math.floor(value)));


// Task 4
// Напиши функцію getProductDetails, яка приймає ідентифікатор товару productId та дві callbacks function successCallback та erroeCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback. У випадку помилки, викликається errorCallback і передається повідомлення про помилку.

const products = [
    {
    id: 1,
    name: "Phone",
    price: 10000,
    description: "Phone whith best display and god processor"
    },
    {
    id: 2,
    name: 'Laptop',
    price: 25000,
    description: 'Smart and strong laptop for work and games'
    },
    {
    id: 3,
    name: 'Pad',
    price: 8000,
    description: 'Compatibility pad for watch contant'
    }] 

function getProductDetails(id, success, error) {
    for (const product of products) {
        if (product.id === id) {
            success(product);
            return;
        }
    }
    error(id)
};

getProductDetails(2, handleSuccess, handleError)
getProductDetails(10, handleSuccess, handleError)

function handleSuccess(message) {
    console.log('Success!', message);
};

function handleError(productId) {
    console.log(`Error! product with id:${productId} not found`);
}