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
