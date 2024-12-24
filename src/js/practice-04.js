// Arrow function

// arrow() виклик перед оголошенням дає error
const arrow = () => {};
arrow();

const sum = (a, b) => a + b;
console.log(sum(5, 6));

const sum1 = (a, b) => {
  return a + b;
}; // явне повернення має бути з ключовим словом return та у фігурних дужках
console.log(sum(5, 6));

const sum3 = (a) => a + 6;
console.log(sum3(5));

const foo = (...args) => console.log(args);

foo(1, 4, 5, 9, 5, 6);

// У методах обʼєкту не використовуємо стрілочні функції

// Callback function

function add(a, b) {
  return a + b;
}
console.log(add(5, 8));

function addValue(a, b) {
  return a + b;
}

function sumValue(a, b) {
  return a * b;
}

// callback дозволяє викликати потрібну функцію для того самого аргумента, фактично функція яка використовує та видає результат іншої функції за посиланням
function fooCall(a, b, callback) {
  const result = callback(a, b);
  console.log(`Result is ${result}`);
  console.log(callback);
}

fooCall(4, 5, addValue); // під час виклику функції з callback параметром передаємо масив та назву функції яку треба використати
fooCall(4, 5, sumValue);
fooCall(4, 5, (a, b) => a + b);
fooCall(4, 5, (a, b) => a * b);

// forEach метод перебору масиву

const arr = [2, 6, 4, 8, 9];

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    callback(arr[i], i, arr);
  }
}

customForEach(arr, callback);
function callback(elem, idx, array) {
  if (elem === 3) {
    array.splice(idx, 1);
  }
}

arr.forEach((elem, idx, array) => {
  if (elem === 8) {
    array.splice(idx, 1);
  }
});

console.log(arr);

arr
  .map((item) => item * item)
  .forEach((elem, idx, array) => console.log(array));

// Tasks

// Task 1

// Створи стрілочну функцію logItem(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach()

const logItems = (arr) =>
  arr.forEach((item, idx, arr) => console.log(`${idx + 1} - ${item}`));

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Task 2
// Напиши наступні функції:
// createProduct(obj, callback) - приймає обʼєкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає callback передаючт йому створений обʼєкт
// logProduct(product) - callback приймаючий обʼєкт продукту і логуючий його в консоль
// logTotalPrice(product) - callback, що приймає обʼєкт продукту і логує загальну вірстість товару в консоль

function createProduct(obj, callback) {
  const product = {
    id: Date.now(),
    ...obj,
  };
  callback(product);
}

function logProduct(product) {
  console.log("Product:", product);
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
  arr.forEach((elem) => item.push(action(elem)));
  return item;
}

console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
console.log(each([64, 49, 36, 25, 16], (value) => Math.ceil(value)));
console.log(each([64, 49, 36, 25, 16], (value) => Math.floor(value)));

// Task 4
// Напиши функцію getProductDetails, яка приймає ідентифікатор товару productId та дві callbacks function successCallback та erroeCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback. У випадку помилки, викликається errorCallback і передається повідомлення про помилку.

const products = [
  {
    id: 1,
    name: "Phone",
    price: 10000,
    description: "Phone whith best display and god processor",
  },
  {
    id: 2,
    name: "Laptop",
    price: 25000,
    description: "Smart and strong laptop for work and games",
  },
  {
    id: 3,
    name: "Pad",
    price: 8000,
    description: "Compatibility pad for watch contant",
  },
];

function getProductDetails(id, success, error) {
  for (const product of products) {
    if (product.id === id) {
      success(product);
      return;
    }
  }
  error(id);
}

getProductDetails(2, handleSuccess, handleError);
getProductDetails(10, handleSuccess, handleError);

function handleSuccess(message) {
  console.log("Success!", message);
}

function handleError(productId) {
  console.log(`Error! product with id:${productId} not found`);
}



const users = [
  { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
  { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
  { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
  { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
  { id: 5, name: 'Davis', age: 22, skills: ['C++', 'C#'] },
];

// method map метод перебираючий масив, повертає новий масив такоїж довжини. Для його роботи потрібна тільки callback function

const names = users.map(({ name }, idx, arr) => name); // працює з деструктуризацією. Idx та arr не обовʼязкові
console.log(names);

function customMap(arr) {
  const result = []
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].name)
  }
  return result;
};

console.log(customMap(users));


// method flatMap метод який дозволяє увійти на одну вкладеність та отримати данні, повертає так само масив данних

const skills = users.flatMap(({ skills }) => skills) // є також method flat(deep)
console.log(skills);

// фільтрація повторення за довомогою indexOf на результаті виконання flatMap

const uniqueSkills = skills.filter((skill, idx, arr) => {
  return arr.indexOf(skill) === idx
});
console.log(uniqueSkills);


// method filter (часто використовуємий метод), сортування за умовою, повертає обʼєкт який задовільняє умову

const ageUser = users.filter(({ age }, idx, arr) => age > 30).map(({ name }) => name); // лише перший параметр обовʼязковий 
console.log(ageUser);


// method find метод який шукає перший елемент який задовільняє умову

const searchSkill = users.find(({ skills }) => skills.includes('JavaScript'));
console.log(searchSkill);


// method findIndex подібний метод до indexOf але працює не з примітивами а з складним  типом данних, перериває пошук після першого елементу який задовільняє умову або повертає -1

const index = users.findIndex(({ id }) => id === 3); // можна знайти індекс елементу який треба видалити 
console.log(index);

// some працює подібно до методу includes, але вміє працювати з складним типом данних повертає true або false

const isKnow = users.some(({ skills }, idx, arr) => skills.includes('Python'));
console.log(isKnow);


// every перевіряє щоб усі елементи ітеруємого обʼєкта задовільнив умову, повертае true or false

const oldAge = users.every(({ age }) => age > 20 && age < 50);
console.log(oldAge);


// method sort метод який мутує початковий масив 

const sortUsers = [...users].sort((a, b) => a.age - b.age) // a - поточний елемент ітерації, b - натсупний елемент ітерації // за допомогою spred можна не мутуючи оригінал використати метод на копії
console.log(users);
console.log(sortUsers);

const sortName = [...users].sort((a, b) => a.name.localeCompare(b.name)) // сортування за допомогою localCompare рядків за алфавітним порядком
console.log(sortName);


// method reduce універсальний метод 

const totalAge = users.reduce((acc, { age }, idx, arr) => {  // перші два параметри обовʼязкові
  acc += age
  return acc
}, 0); 
console.log(totalAge);

const allName = users.reduce((acc, { name }) => {
  acc.push(name);
  return acc
}, [])
console.log(allName);


// Tasks

//Task 1
// Напишіть функцію, яка використовує метод mар, щоб створити новий масив обʼєктів, в якому буде - інформація про середній бал кожного студента.

const students = [
  {name:  'John', grades: [80, 85, 90] },
  {name:  'Alice', grades: [90, 95, 92] },
  {name: 'Bob', grades:  [70, 80, 75] },
  { name: 'Emily', grades: [95, 92, 88] },
  { name: 'David', grades: [85, 88, 90] }
];

function getAverage(arr) {
  return arr.map(({ name, grades }) => {
    const total = grades.reduce((acc, item) => acc + item, 0)
    const obj = {
      name,
      averge: Math.round(total / grades.length),
    };
    return obj
  })
}
console.log(getAverage(students));

// Task 2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

const students2= [
  { name: 'John', age: 20, gpa: 3.8 },
  { name: 'Alice', age: 21, gpa: 3.2 },
  { name: 'Bob', age: 19, gpa: 3.5 },
  { name: 'Emily', age: 22, gpa: 3.9 },
  { name: 'David', age: 20, gpa: 3.7 }
];

function getAdult(arr) {
  return arr.filter(({ age }) => age > 20);
}
console.log(getAdult(students2));

// Task 3
// Напишіть функцію, яка - використовує метод find, щоб знайти книжку за її назвою (title)

const books = [
  { title: 'JavaScript:  The Good Parts', author: 'Douglas Crockford', year: 2008 },
  { title: 'Clean Code:  A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
  { title: 'The Pragmatic Programmer:  Your Journey to Mastery', author: 'Andrew Hunt, David Thomas' , year: 1999 },
  { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author:  'Erich Gamma, RichardHelm, Ralph Johnson, John Vlissides', year: 1994 },
  { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }];

function getBook(arr, title) {
  return arr.find(({title : bookTitle}) => bookTitle === title) || 'Not found'
}
console.log(
  getBook(
    books,
    "Design Patterns: Elements of Reusable Object-Oriented Software"
  )
);

// Task 4
//