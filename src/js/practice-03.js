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

for (const key in secondHuman) { // Змінна завжди key перебераємо завжди ключі обʼєкта 
    console.log(key, firstHuman[key]);
}