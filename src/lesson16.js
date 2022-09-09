

//Symbol
//Descriptos
//Iterator
//Object to primitives

//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.create
//Object.defineProperty
//Object.defineProperties
//Object.preventExtensions(Object.isExtensible)
//Object.seal (Object.isSealed)
//Object.freeze (Object.isFrozen)


// const user = {
//     name: 'Alex',
//     age: 23
// }

// const user2 = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         configurable: true,
//         writable: true,
//         enumerable: true
//     },
//     age: {
//         value: 23,
//         configurable: true,
//         writable: true,
//         enumerable: true
//     },
// })

// const user3 = {}

// Object.defineProperty(user3, "name", {
//     value: 'Alex',
//     configurable: true,
//     writable: true,
//     enumerable: true
// })

// Object.defineProperty(user3, "age", {
//     value: 23,
//     configurable: true,
//     writable: true,
//     enumerable: true
// })

// const user4 = {}

// Object.defineProperties(user4, {
//     name: {
//         value: 'Alex',
//         configurable: true,
//         writable: true,
//         enumerable: true
//     },
//     age: {
//         value: 23,
//         configurable: true,
//         writable: true,
//         enumerable: true
//     },
// })

//(use strict);
// ================== WRITABLE ================

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false,
//         enumerable: true,
//         configurable: true,
//     }
// })


// user.name = "Hanna"
// console.log(user)


// ================== ENUMERABLE ================

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: false,
//         configurable: true,
//     }
// })


// for (let k in user) {
//     console.log(k)
// }

// console.log(Object.keys(user))


// ================== CONFIGURABLE ================

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false,
//         enumerable: true,
//         configurable: false,
//     }
// })

// delete user.name

// console.log(user)

// Object.defineProperty(user, "name", {
//     value: 'Alex',
//     writable: true,
//     enumerable: true,
//     configurable: false,
// })

// console.log(user)

// 'use strict';

// const user = {
//     name: "Alex"
// }

// Object.preventExtensions(user) //we can not add new keys

// if (Object.isExtensible(user)) {
//     user.age = 23
// }

// console.log(user)


// 'use strict';

// const user = {
//     name: "Alex"
// }

// Object.seal(user) //we can not add new keys and delete keys

// if (!Object.isSealed(user)) {
//     user.age = 23
//     delete user.name
// }

// user.name = "Hanna"


// console.log(user)

// console.log(Object.getOwnPropertyDescriptors(user))


// 'use strict';

// const user = {
//     name: "Alex"
// }
// console.log(Object.getOwnPropertyDescriptors(user))

// Object.freeze(user) //we can not add new keys and delete keys and modify

// if (!Object.isFrozen(user)) {
//     user.age = 23
//     delete user.name
//     user.name = "Hanna"
// }

// console.log(user)

// console.log(Object.getOwnPropertyDescriptors(user))




// const arr = [1, 2, 3]


// arr[Symbol.iterator] = function () {

//     return {
//         i: 0,
//         length: this.length,
//         array: this,
//         next() {
//             if (this.i < this.length) {
//                 return {
//                     done: false,
//                     value: this.array[this.i++]
//                 }
//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }

//         }
//     }
// }

// const iter = arr[Symbol.iterator]()

// while (true) {
//     const current = iter.next()
//     if (current.done) break
//     console.log(current.value)
// }

// for (let n of arr) {
//     console.log(n)
// }

// for (let c of "Hello") {
//     console.log(c)
// }

// const range = {
//     from: 0,
//     to: 3
// }

// range[Symbol.iterator] = function () {
//     return {
//         from: this.from,
//         to: this.to,

//         next() {
//             if (this.from <= this.to) {
//                 return {
//                     done: false,
//                     value: this.from++
//                 }
//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//         }
//     }
// }

// const arrayPseudo = {
//     0: 1,
//     1: 2,
//     length: 2
// }


// console.log(Array.from(arrayPseudo))
// console.log(Array.from(range))


// for (let n of m) { //range[Symbol.iterator]() iter.next()
//     console.log(n) //0 1 2 3 4 5
// }

// for (let n of range) { //range[Symbol.iterator]() iter.next()
//     console.log(n) //0 1 2 3 4 5
// }


// class Range {
//     #from;
//     #to;

//     constructor(range) {
//         this.#from = range.from
//         this.#to = range.to
//     }

//     [Symbol.iterator] = function () {
//         return {
//             from: this.#from,
//             to: this.#to,

//             next() {
//                 if (this.from <= this.to) {
//                     return {
//                         done: false,
//                         value: this.from++
//                     }
//                 } else {
//                     return {
//                         done: true,
//                         value: undefined
//                     }
//                 }
//             }
//         }
//     }
// }

// const range = new Range({ from: 0, to: 10 })
// const range2 = new Range({ from: 0, to: 2 })

// for (let n of range) {
//     console.log(n)
// }


// for (let n of range2) {
//     console.log(n)
// }


//Хинт - "string" "number" <-> "default"

// const user = {}

// alert(user) //string

// user + ""   //?number ?string
// user + user //?number ?string
// user > user //?number ?string

// user * user //number
// user - user //number
// user / user //number

//1 - try to call -> Symbol.toPrimitive()
//2 - if hint === string -> toString() -> valueOf()
//3 - if hint === number | default -> valueOf() -> toString()



const user = {
    name: 'Alex',
    age: 23,

    toString() {
        console.log('to string')
        return user
    },

    valueOf() {
        console.log('valueof')
        return 5
    }
}

console.log(user + 5)


// const user = {
//     name: 'Alex',
//     age: 23
// }


user[Symbol.toPrimitive] = function (hint) {
    if (hint === "string") {
        return {}
    } else if (hint === "default") {

    } else {

    }

    return this.age
}
