// function declaration 

// foo()
// function foo() {
    
// }
// foo()

//function expression

// const foo = function () {
    
// }

// foo()

//arrow function

// const foo = () => { }
// foo()

//function expression

//arrow function

const obj = {
    name: 'Test name',
    hello() {
        console.log(this);
        console.log(this.name); // якщо функція типу function declaration умовно приймаємо що this буде викликатись по правилу посилання на того хто зліва
    }
};

obj.hello();

const objA = {
    name: 'User name',
    hello: obj.hello
}

objA.hello();

const person = {
    name: 'Alice',
    skills: {
        html: true,
        css: false,
        js: true,
        showSkills() {
            const keys = Object.keys(this)
            const skills = keys.filter((key) => this[key] && typeof this[key] !== 'function')
            console.log(skills);
        }
    }
}

person.skills.showSkills()


const user = {
    name: 'Artem',
    years: 30,
    city: 'Lviv',
    hello() {
        const arrow = () => {
            console.log(this);
        }
        return arrow
    }
}
const response = user.hello()
response()  // стрілочна функція повертає своє лексичне оточення 



// call apply bind три методи функції

function method(car, speed) {
    console.log('car', car);
    console.log('speed', speed);
    console.log(this);
}

method.call(person, 'BMW', 90)
method.call(user, 'Audi', 90)
method.call(user, ...['Audi', 90])


method.apply(user, ['Audi', 90])


// bind створює копію функції та привʼязує значення this назавжди

const copy = method.bind(user)
copy('Volvo', 120)

// Tasks 

// Task 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки прискорення і системі круїз констролю.

const car = {
    brand: 'Audi',
    speed: 0,
    accelerate() {
        this.speed += 10;
        console.log(`Car ${this.brand} accelerated. Now car speed ${this.speed}`);
    }
}

const car2 = {
    brand: 'BMW',
    speed: 40,
    // accelerate: car.accelerate
}

const car3 = {
    brand: 'Volvo',
    speed: 70,
}

const volvo = car.accelerate.bind(car3)
volvo()
volvo()

const bmw = car.accelerate.bind(car2)

for (let i = 0; i < 3; i += 1) {
    bmw()
}

// Task 2 
// Потрібно створити систему продажу в інтернет магазині. 
// Є обʼєкт продукту в якому потрібно створити метод discount(буде приймати знижку клієнта у %) який буде повертати вартість товару з врахуванням знижки
// Є обʼєкт який містить імʼя та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та локгувати повідомлення про покупку


const product = {
    name: 'Phone',
    price: 500,
    discount(percent) {
        return this.price * (100 - percent) / 100
    }
}

const client = {
    name: 'Alice',
    discountPercent: 11,
    purchase() {
        const price = product.discount(this.discountPercent);
        console.log(`${this.name} придбала товар зі зінижкою у ${this.discountPercent}%, сума до сплати ${price}грн`);
    }
}

const client2 = {
  name: "Max",
  discountPercent: 25,
    purchase: client.purchase 
};

client.purchase()
client.purchase.call(client2)


// Task 3
// Потрібно створити функціонла для контролю швидкості прокатник авто. Створіть функцію яка буде приймати 1 параметр(max speed)
// та виводити повідомлення чи ми рухаємось з безпечною швидкістью чи перевищюємо, функція має опрацьовувати обʼєкт автомобіля як this

const tesla = {
    brand: 'Tesla',
    speed: 70,
};

const audi = {
    brand: 'Audi',
    speed: 120,
};

function speedSensor(maxSpeed) {
    return this.speed <= maxSpeed
      ? `Car ${this.brand} move a save speed`
      : "Warning speed!!";
}

console.log(speedSensor.call(tesla, 90));
console.log(speedSensor.call(audi, 90));


// Task 4 calculator
// створіть обʼєкт calculator з трьома методами
// read(a, b) - приймає два значення та зберігає іх як властивості метода
// add() - повертає суму збережених значень
// mult() - перемножує збереженні значення та повертає результат

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    add() {
        return (this.a ?? 0) + (this.b ?? 0)
    },
    mult() {
        return (this.a ?? 1) * (this.b ?? 1);
    }
}

calculator.read(3, 4)
console.log(calculator.add());
console.log(calculator.mult());
console.log(calculator);
