let person = {
    name: 'yashvardhan',
    age: 20
}

console.log(person)

// dot notation
person.name = 'john'
console.log(person.name)
console.log("we are here: ", person.lastName) // This will return undefined

person.name = 'peter'
// bracket notation
person['age'] = 21

console.log(person)


// without using let, const, var
a = 10
console.log(a)


// arrays
selectedProducts = ['apple', 'banana', 'cherry']
selectedProducts[3] = 'orange'
console.log(selectedProducts)
console.log(typeof selectedProducts)
console.log(selectedProducts.length)


// Some more things related to objects
// we can also have objects and functions inside objects
testObject = {
    firstName: 'yashvardhan',
    anotherObject: {
        lastName: 'goel',
        age: 23
    },
    fun: function greet(lastName) {
        return 'Hello ' + lastName
    }
}

console.log(testObject.fun(testObject.anotherObject.lastName))
