var square = x => x * x

console.log(square(8))

var user = {
    name: "Sinthu",
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi, I am ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi, I am ${this.name}`)
    }
}

user.sayHi(1, 2, 3)
