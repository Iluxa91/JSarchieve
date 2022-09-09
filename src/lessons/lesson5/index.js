//1. Global context -> this

//2. Functions, arrow functions ----

//3. .bind() .call() .apply()

//4. Functions Constructors this -> new instance of constructor



// 1. Global context this -> global object

// console.log(this === window)

// this.age = 27


// 2. NOT ARROW FUNCTIONS

// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }

// const user2 = {
//     name: 'Sergey',
//     showName: user.showName
// }

// const showName = user.showName

// user.showName()
// user2.showName()
// showName() //this -> undefined -----------> window


// function start() {
//     this.run()
// }


// const car = {
//     start: start,
//     run() {
//         console.log('Started')
//     }
// }


// car.start()


// function foo() {
//     console.log(this) //window
// }

// function bar() {
//     foo()
// }

// bar()



//================ ARROW FUNCTIONS ================


// const showName = () => {
//     console.log(this.name)
// }

// showName()


// const user = {
//     name: 'Alex',
//     showName() {

//         const foo = () => {
//             console.log(this.name)
//         }

//         foo()
//     }
// }

// user.showName()


// ================ BIND CALL APPLY ================


// const alex = {
//     name: 'Alex',
//     showName(a, b) {
//         console.log(a, b)
//         console.log(this.name)
//     }
// }

// const sergey = {
//     name: 'Sergey'
// }

// alex.showName.call(sergey, 1, 2)

// alex.showName.apply(sergey, [1, 2])

// alex.showName.bind(sergey, 1)(2)


// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this.name)
//     }
// }

// function greeting(cb) {
//     cb()
// }

// greeting(user.showName.bind(user))


// ===================== Functions Constructor =================

// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// const alex = new User('Alex', 23)

// console.log(alex)


// const group = {
//     name: '56',
//     students: ["igorgazarov", "PavelNeofitov"],

//     showGroupStudents() {
//         this.students.forEach((user) => {
//             console.log(`${this.name}: ${user}`)
//         })
//     }
// }




// group.showGroupStudents()
