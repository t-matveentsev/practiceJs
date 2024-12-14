let value = 10;
console.log(value);

const arr = [1, 2, 3];
console.log(arr);
arr.splice(1, 1); // метод вирізання певного обʼєкту з масиву
console.log(arr);


console.log(Number('22.5')); //number конвертує простий рядок у число


console.log(undefined + 1);
console.log(null + 1); //null конвертується у 0
console.log(false + 1);
console.log(true + 1);

console.log(typeof value);
console.log(typeof value === 'string');

//комунікація з користувачем та можливість відображення результату

console.log('result total', 10 + 15);
console.log('array', 10, 15, 16);
console.log([10, 15, 17]);

// alert('hI');

// const message = prompt("Введіть імʼя");  prompt повертає або рядок або null

// const result = confirm('Are you over 18?'); повертає true or false

console.log(Number('25') === 25);

console.log('A' > 'a');

// ---- 6 значень які дають false ------------------

// 0 (число нуль)
console. log (Boolean (0));
// "" (порожній рядок)
console. log(Boolean(''));
// NaN
console. log(Boolean (NaN));
// undefined 
console.log(Boolean(undefined));
// null 
console.log(Boolean(null));
// false
console.log(Boolean(false));

//-----логічні оператори 
console.log('логічні оператори');

console.log(!!(''));
console.log(!'');

// const messages = prompt();

// if (!messages) {
//     console.log('рядок пустий')
// } else {
//     console.log(messages);
// }

//------оператори порівняння

// оператор або or || шукає true або повертає останнє false
console.log(false || 0 || 1);

// оператор нульового поєдання ?? шукає будь яке значення окрім null і undefined

let qty; //undefined
console.log(qty ?? 'Такого товару не знайдено');

// оператор && шукає false або повертає останнє true (має приорітет перед іншими операторами)

console.log(1 && 5 && 23);

//------математичні оператори

// +, -, *, /, %

// % залишок 

console.log(value % 2 === 0);  // парне чи не парне
const result = !(value % 2);
console.log(result);

//----методи для роботи з числами(тип даних Number )

const str = '25.7pX'

console.log(Number.parseInt(str));

console.log(Number.parseFloat(str));

console.log(Number.isNaN(str)); //перевіряє чи змінна NaN
console.log(isNaN(str)); // конвертує в Number і превіряє чи отимав Not A Number

//----клас Math

const valueInt = 11.42;

console.log(Math.floor(valueInt));

console.log(Math.ceil(valueInt));

console.log(Math.round(valueInt));

console.log(Math.pow(valueInt, 2)); // також можна використати операнд **


//----методи для роботи з рядками ( тип данних String )

const word = 'Hej.gayss'

console.log(word.length);

console.log(word.toLowerCase());

console.log(word.indexOf('.')); //повертає інтекс елемента
console.log(word.indexOf('r')); //якщо немає обʼєкта дає -1

console.log(word.includes('g')); // поверає бульове значення пошуку

console.log(word.endsWith(' ')); // перевірка закінчення слова

console.log(word.startsWith('H'));

console.log(word.replace('j' , 'no'));

console.log(word.replaceAll('s' , 'm'));

console.log(word.slice(4, -1));

console.log(word.padStart(12, 0)); // доповнює довжину фрази на початку або padEnd на кінець

/// mini task

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) 
// в рядок у - форматі годин та хвилин НН: ММ.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 • покаже • 24:01

const totalMinutes = 450;
const minutes = totalMinutes % 60;
const hour = Math.floor(totalMinutes / 60);
const days = Math.floor(totalMinutes / 1440);

console.log(`${hour.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0).padEnd(2, 0)}`);

// виклик виконання одного методу на іншому називається 'чейнінг' - приєднання 


// ----- інструкція if

if (value === 1) {
    console.log(1);
} else if (value === 3) {
    console.log(7);
} else if (value === 7) {
    console.log(7);
} else if (value === 10) {
    console.log(10);
} else {
    console.log('default');
}


// ----- інструкція swich

switch (value) {
    case 1:
        console.log('Один');
        break
    case 2:
        console.log('Два');
        break
    case 10:
        console.log('Десять');
        break
    default:
        console.log('Default');
}

// Тренарний оператор

value > 15 && value < 20 ? true : false

let priceItem;
priceItem = value > 5 && value < 15 ? 'Yap' : 'try again';
console.log(priceItem);


// облісті видимості 

// спочатку аналізується код та резервується місцу під змінні
// після чого йде виконанн коду, тому змінну можно використати тільки при вспр=ливанні на гору 

let sumStr = 'Hello';

if (true) {
    let number = 22;
    if (true) {
        console.log(value);
    }
    let sumStr = 'Hello'; // змінна не читається тому що зарезервована але ще не ініціалізована 
}

// Цикл for ---------

let strArray = 'Hello JS';
for (let i = 0; i < strArray.length; i += 1) {
    console.log(strArray[i]);
}

// continue and break

let idx = -1;
for (let i = 0; i < strArray.length; i += 1) {
    if (strArray[i] === 'o') {
        idx = i;
        break; // якщо перша умова задовільнила, якщо не прописувати break дасть останню задовільну умову
    }
}
console.log(idx);


for (let i = 0; i <= 6; i += 1) {
    if (i % 2 === 0) {
        console.log('even number', i);
        continue; // прериває виконання подальшого коду в циклі та переходить на наступну ітерацію 
    }
    console.log('odd number' , i);
}


// litle tasks 
// task 1

// let respond = prompt("What color is the traffic light?");

// if (respond) {
//     respond = respond.toLowerCase()
// } else {
//     alert("The traffic light is not working. Action be careful!!!");
// }

// if (respond === 'red') {
//     alert('Red, action stop');
// } else if(respond === 'yellow') {
//     alert('Yellow, action ready')
// } else if (respond === 'green') {
//     alert('Green, action go')
// } else {
//     alert("The traffic light is not working. Action be careful!!!");
// }

// task 2

// switch (respond) {
//     case 'red':
//         alert("Red, action stop");
//         break;
//     case 'yellow':
//         alert("Yellow, action ready");
//         break;
//     case 'green':
//         alert("Green, action go");
//         break;
//     default:
//         alert("The traffic light is not working. Action be careful!!!")
// }


// task 3

// function check(text, answer) {
//     let message = prompt(text)
//      if (message) {
//     message = message.toLowerCase()
//      }
//     return message === answer
// }

// const answer = check('Хоч не літак, а крилатий, без крил не може працювати', 'вітряк')
// check('Через воду він проходить, але сам з місця вік не сходить', 'міст')
// console.log(answer);

// task 4

// function getDays(deep) {
//     const speedOfDay = 7;
//     const speedOfNight = 2;
//     let totalDistance = 0;
//     let totalDays = 0;

//     while (totalDistance < deep) {
//         totalDistance += speedOfDay;
//         totalDays += 1;

//         if (totalDistance < deep) {
//             totalDistance -= speedOfNight
//         }
//     }
//     console.log(totalDays);
// }

// getDays(17)


// task 5

function countVowel(str) {
    const vowel = "aeiou";
    let counter = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (vowel.includes(str[i].toLowerCase())) {
            counter += 1
        }
    }
    return counter
}

console.log(countVowel('Hello world'));
console.log(countVowel('Junior Web Developer'));