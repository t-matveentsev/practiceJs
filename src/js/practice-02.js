const exampleArray = ["Hello", null, true, 15];

console.log(typeof exampleArray);
console.log(Array.isArray(exampleArray));

const firstEl = console.log(exampleArray[0]);
const lastEl = console.log(exampleArray[exampleArray.length - 1]);

for (let i = 0; i < exampleArray.length; i += 1) {
  // використовуємо для мутації масиву за індексом
  const element = exampleArray[i];
  console.log(element);
}

for (const item of exampleArray) {
  // перебирає без індексу
  console.log(item);
}

// приклад мутації масиву за типом данних

for (let i = 0; i < exampleArray.length; i++) {
  if (typeof exampleArray[i] === "string") {
    exampleArray[i] = false;
  }
  console.log(exampleArray);
}

// присвоєння за посиланням за за значенням

const a = 5;
const b = a + 1;

console.log(a);
console.log(b);
console.log(a === b);

// під капотом не виділяється памʼять під складні типи танних, прості відокремлюються при присвоєнні
// складні присвоюються фактично посилання на оригінальну змінну

let c = [1, 2, 3];
let d = c;

d.push(4);

console.log(c);
console.log(d);
console.log(c === d);

// методи push та pop, працює з останнім елементом массиву

const number = [2, 6, 8, -1];
number.push(4, "2", 0, true, [-4, -1]); // додає любий типи данних до массиву на кінець
number.pop(); // видаляє останній та повертає його
console.log(number);

// метод slice та splice !!!!!!!

const array = [false, 5, -1, null, 9, 0, NaN, 4];
// const result = array.slice(0, 1); // вирізає до зазаначеного індесу та створює новий масив
// console.log(result);
// console.log(array);

const result = array.splice(2, 2); // (з якого починаю, і скільки вірізаю)
console.log(result);
console.log(array);

const replacement = array.splice(4, 0, "Cut", "cut"); // (з кого починається вирізати, скільки елементів, що вставляю)
console.log(replacement);
console.log(array);

const pasting = array.concat(replacement, result); // поєднує два масива але не за рахунок мутації, а створює новий

// little tasks

// Task 1

// Напиши скрипт який буде перебирати масив та видаляти з - нього (мутувати)
// всі елементи що не є типом даних Number.

const arrA = [3, "Hello", null, 42, false];
// const arrB = ['world', true, 22, 41, undefined];

for (let i = arrA.length - 1; i >= 0; i -= 1) {
  // приклад перебору масисву з кінця( так краще видаляти)
  if (typeof arrA[i] !== "number") {
    arrA.splice(i, 1);
  }
}
console.log(arrA);

// Task 2
//  Task-2
//  Потрібно створити функцію яка буде приймати - 1  параметр
// Функція повина відбирати з масиву тільки ті елементи що дублюються в ньому  та повернути їх в вигляді нового масиву як  результат виконання функції

function getCommonElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1)) { // додаткоіа функція у методі includes з якого елементу починати преевірку, починаємо її після перевіряємого елементу(піля мене шляхом додавання 1 до i)
          result.push(arr[i])
      }
    }
    return result
}
console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));


// Task 3

//  Task-3
//Потрібно створити функцію яка буде приймати   2   параметри
//1   параметр це масив всіх юзерів
//2   параметр це масив з чоловічими іменами.
// Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.
const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', '0lga '];
const man = ['Artem', 'Maksim', 'David', 'Roman'];

function getWomen(users, man) {
    const women = [];
    for (const user of users) {
        if (!man.includes(user)) {
            women.push(user)
        }
    }
    return women
}

console.log(getWomen(users, man));

// Task 4

// Масиви   та   рядки
// Напиши скрипт, який «розгортає» рядок   (зворотний порядок   букв)   і виводить його в консоль.
const string = 'Welcome to the future';
const SEPARATOR = '';  // Якщо роздільник більш складний і ми його використовуємо кілька разів краще його винести в окрему змінну
const reverseString = string.split(SEPARATOR).reverse().join(SEPARATOR); // Таке використання методу на результаті попереднього методу називається чейнінгом 
console.log(reverseString);

// Task 5 

//  Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання, якщо ні то замінювати елемент на вірний
const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] - numbers[i - 1] !== 1) {
      numbers[i] = numbers[i - 1] + 1;
    }
}
console.log(numbers);

// Task 6

// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок. Функцію має повернути текст, як вказано у прикладах:
// [] ------------------------------------> "no one likes this"
// ['Peter'] -----------------------------> "Peter likes this"
// ['Jacob', 'Alex'] ---------------------> "Jacob and Alex like this"
// ['Max','John','Mark'] -----------------> "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"] ------> "Alex, Jacob and 2 others like this"

function createStr(arr) {
    let message;
    switch (arr.length) {
        case 0:
            message = "no one likes this"
                break;
        case 1:
            message = `${arr[0]} likes this`
                break;
        case 2:
            message = `${arr[0]} and ${arr[1]} like this`
                break;
        case 3:
            message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
                break;
        default:
            message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
                break;
            
    }
    return message
}

console.log(createStr([]));
console.log(createStr(["Peter"]));
console.log(createStr(["Jacob", "Alex"]));
console.log(createStr(["Max", "John", "Mark"]));
console.log(createStr(["Alex", "Jacob", "Mark", "Max", "Jacob", "Mark", "Max"]));
