// Object

const user = {
    name: 'Test user',
    skills: {
        html: true,
        css: true,
        react: false
    },
}

// call object

console.log(user.name);
console.log('css', user.skills.css);

const objectKey = 'skills'
const skillKey = 'css'

console.log(user[objectKey]);
console.log(user[objectKey][skillKey]);
console.log(user.skills[skillKey]);
console.log(user[objectKey].css);

// звернення за крапкою вказуємо фактичну назву ключа, через квадратні дужки змінна в якій зберігається ключ

// Change of value, made a new key

user.city = 'Lviv';
console.log(user);

user['age'] = 28;
console.log(user);

user.city = 'Odessa'; // Таким чином перебиваємо значення а не додаємо 
console.log(user);

// Object freeze - Object.freeze(user) можна також заблокувати вкладений обʼєкт Object.freeze(user.skills)

delete user.city // Видалення ключа
console.log(user);


// Method Object

const firstHuman = {
  name: "Artem",
  skills: {
    html: true,
    css: true,
    react: false,
    },
  city: 'Lviv',
    sayHello() { // теж ключ, але з вмістом функції
      console.log(`Hello my name is ${this.name}`);  // якщо ми звертаємось в обʼєкті до самого обʼєкта завжди вживаємо ключове слово this !!!!
  }
};

const secondHuman = {
  name: "Den",
  skills: {
    html: true,
    css: true,
    react: false,
  },
  city: "Lviv",
  sayHello: firstHuman.sayHello //  Завдяки ключовому слову this ми можемо перевикористовувати методи інших обʼєктів
};

firstHuman.sayHello();
secondHuman.sayHello();

// Cycle for...in

const copyObject = Object.create(firstHuman) // скопійоманий обʼєкт завжди пустий, але при обробці він посилається на основний обʼєкт і вспатковує властивості від нього
console.log(copyObject);

for (const key in secondHuman) { // Змінна завжди key перебераємо завжди ключі обʼєкта 
  if (user.hasOwnProperty(key)) {   // метод повертає true or false в залежності від того чи ключь вспадкований, таким чином перебираемо тільки власні ключі
    console.log(key, secondHuman[key]);  // немає вспадкованої функції
  }
}

// method Object.keys()

// перетворення обʼєкта в масив за допомогою глобального метода Object.keys() повертає лише власні ключі

const keys = Object.keys(user)
console.log(keys);

for (const key of keys) {        // перебираємо ключі (тільки власні)
  console.log(key, user[key]);
}


// method Object.values()

const values = Object.values(user)
console.log(values);


// method Object.entries() повертає масив [[key, values],[key, values]]

const entries = Object.entries(user);
console.log(entries);


// little tasks

// Task 1
// Створи функцію яка буде приямати 3 параметри та формувати обʼєкт покупки
// 1 - назва продукту
// 2 - кількість одиниць
// 3 - ціна за 1 одиницю товару
// функці моє повертати сформований обʼєкт з ключами name, price, quantity, totalPrice

function createBasket(product, quantity, price) {
  const totalPrice = quantity * price;

  return {
    product,
    quantity,
    price,
    totalPrice
  }

  // const basket = {
  //   product, // product(argument) : 'pizza'(values of this argument)
  //   quantity,
  //   price,
  //   totalPrice
  // }
  // return basket
}

console.log(createBasket('pizza', 3, 120));
console.log(createBasket("apple", 35, 70));

// Task 2

// Створи функцію для введення статистики компʼютерного клубу. Функція приймає 1 параметр це обʼєкт користувачів де клюс це імʼя користувача, а значення цу час оренди у хвилинах
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди компʼютера

const players = {  // коли однотипний тип данних ми можемо використати метод Object.values()
  Den: 60,
  Kate: 130,
  William: 45,
  Matthew: 120,
  Ethan: 40,
  David: 55
}

function getAvarageTime(obj) {
  const values = Object.values(obj)
  let total = 0;
  for (const value of values) {
    total += value
  }
  return `Count of players ${values.length}, average time ${total/values.length}`
}

console.log(getAvarageTime(players));

// Task 3

// Створи функцію яка буде приймати 2 параметри
// 1 - параметр масив
// 2 - параметр назва книги
// Функція повертає Імена юхерів(формат string) в яких є данна книга 
// поорахувати вік всіх юзерів у яких є ключ age

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War-and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 }
]

function getUsers(arr, book) {
  let userNames = [];
  for (const user of arr) {
    if (user.books.includes(book)) {
      userNames.push(user.name)
    }
  }
  return userNames.join(', ')
}

console.log(getUsers(friends, 'Harry Potter'));

function getTotalAge(arr) {
  let totalAge = 0;
  for (const user of arr) {
    if ('age' in user) {  // оператор in перевіряє власні та вспадковані ключі
      console.log(`${user.name} - ${user.age}`);
      totalAge += user.age
    }
    // if (user.hasOwnProperty('age')) { // оператор hasOwnProperty перевіряє тільки власні ключі
    //   totalAge += user.age
    // }
    // if (user.age !== undefined) {
    //   totalAge += user.age
    // }
    
  }
  return `Total age of all users ${totalAge}`
}

console.log(getTotalAge(friends));

// Task 4

// 1 - Створи метод обʼєкту який буде приямати 1 параметр назву факультету та повертати список імен учнів факультету
// 2 - Створи метод обʼєкту який буде прияймати 1 параметр назву факультету та повертати кількість очків факультету 

const hogvarts = {
  griffindor: [
    {
      name: "Harry",
      points: 17
    },
    {
      name: "Hermiona",
      points: 19 
    },
    {
      name: "Ron",
      points: 17
    }
  ],
  slizerin: [
    {
      name: "Drako",
      points: 17
    },
    {
      name: "Goyl",
      points: 14
    },
    {
      name: "Crabbe",
      points: 5
    }
  ],
  getUserList(faculty) {
    if (!(faculty in this)) {
      return 'Faculty not found 😢'
    }
    const students = [];
    for (const student of this[faculty]) {
      students.push(student.name)
    }
    return students.join(', ')
  },
  getTotalPoints(faculty) {
    if (!(faculty in this)) {
      return "Faculty not found 😢";
    }
    let totalPoints = 0;
    for (const student of this[faculty]) {
      if ('points' in student) {
        totalPoints += student.points;
      }
    }
    return `Total points of ${faculty} - ${totalPoints}`;
  }
};

console.log(hogvarts.getUserList("griffindor"));
console.log(hogvarts.getUserList("slitherin"));

console.log(hogvarts.getTotalPoints('griffindor'));
console.log(hogvarts.getTotalPoints('slitherin'));



// деструктуризація масиву

const array = [1, 4, 6, 8, 9]
// const first = array[0]
// const second = array[2]
// console.log(first);
// console.log(second);

const [first, , , second] = array; // Деструктуризація масива, отримання значення з масива за послідовністью
console.log(first);
console.log(second);
  

// деструктуризація обʼєктів 

const userDes = {
  name: 'Destractor',
  skills: {
    html: true,
    css: false,
    js: true
  }
}

console.log(userDes.skills.html);

const {skills, skills : {html}} = userDes
console.log('object', skills);
console.log('html', html);

const css = 'i don`t know'
const { skills: { css: cssLanguage } } = userDes // зміна назви змінної під час деструктуризації
console.log(css);
console.log(cssLanguage);

// практично застосовуєтсья

function getUserName({name, skills : {html, css, js}} = {}) {  // фігурні дужки дефолтне значення, хороший тон
  console.log(`Hello my name is ${name}, i now html - ${html}, css - ${css}, js - ${js}`);
}

getUserName(userDes)

const users = [{ name: 'Artem' }, { name: 'Kate' }, { name: 'Mark' }];

const names = [];
for (const user of users) {
  names.push(user.name)
}
for (const { name } of users) {
  names.push(name)
}

console.log(names);


//  оператори ...rest and ..spread

// для того щоб створити копію складних типів даних ми можемо використати оператор ...rest

const arr1 = [1, 2, 3, 4]
const arr2 = [...arr1]
arr1.splice(0, 1);
console.log('arr1', arr1);
console.log('arr2', arr2);
console.log(arr1 === arr2);


