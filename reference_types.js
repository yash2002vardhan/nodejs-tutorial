let person = {
    name: 'yashvardhan',
    age: 20,
};

console.log(person);

// dot notation
person.name = 'john';
console.log(person.name);

person.name = 'peter';
// bracket notation
person['age'] = 21;

console.log(person);


// without using let, const, var
a = 10;
console.log(a);


// arrays
selectedProducts = ['apple', 'banana', 'cherry'];
selectedProducts[3] = 'orange';
console.log(selectedProducts);
console.log(typeof selectedProducts);
console.log(selectedProducts.length);
