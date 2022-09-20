// _____________________factorial___________________

function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}
alert(factorial(5)) // 120"

// ______________________fibonacci____________________

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert( fib(3) ); // 2
alert( fib(7) ); // 13
// fib(77); // не запускаем, подвесит браузер"


// ___________________Сумма n чисел_____________________

function sumTo(n) {
    if (n == 1) return 1
    return n + sumTo(n - 1)
}
alert(sumTo(100))

// _______________________ bind_________________________
function foo() {
      console.log(this.name);
  }

  let a = { name: 'Dima' };
  let b = { name: 'Viktor' };

  const bindedFooA = foo.bind(a);
  const bindedFooB = foo.bind(b);

  bindedFooA(); // 'Dima'
  bindedFooB(); // 'Viktor'


  function foo2(age, city) {
      console.log(`${this.name}, ${age}, ${city}`);
  }

  let a = { name: 'Dima' };
  let b = { name: 'Viktor' };

  const bindedFoo2A = foo2.bind(a, 30);
  const bindedFoo2B = foo2.bind(b, 18);

  bindedFoo2A('Tbilisi'); // Dima, 30, Tbilisi
  bindedFoo2B('Minsk'); // 'Viktor, 18, Minsk

// _________________apply, call _________________________
function foo(age, city) {
    console.log(`this.name, ${age}, ${city}`)
}

let a = { name: 'Dima' }
let b = { name: 'Viktor' }

foo.apply(a, [31, 'Tbilisi'])
foo.call(b, 18, 'Minsk')

// _______________________reduce_________________________
    [1, 4, 6, 66, -12].reduce((acc, number) => {
    acc += number
    return acc
}, 0) // подсчёт суммы всех чисел в массиве

// ____________________замыкание_________________________
function makeCounter() {
    var currentCount = 1
    return function () {
        // (**)
        return currentCount++
    }
}

var counter = makeCounter() // (*)

// каждый вызов увеличивает счётчик и возвращает результат
alert(counter()) // 1
alert(counter()) // 2
alert(counter()) // 3

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter()
alert(counter2()) // 1

// _________Наследование, пример на class\extends_________
class Animal {
    constructor(name) {
        this.name = name
    }
    walk() {
        alert('I walk: ' + this.name)
    }
    eat() {
        alert('I can eat')
    }
}

class Rabbit extends Animal {
    walk() {
        super.walk()
        alert('...and jump!')
    }
}

var rabbit = new Rabbit('Bunny')
rabbit.walk() // 1)'I walk: Bunny' 1)'...and jump!'
rabbit.eat()  // I can eat

// _________Промисификация, setInterval, setTimeout__________
doItAfter(2).then(() => console.log('resolve'))

function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve()
        }, seconds * 1000)
    })
    return promise
}
