// 1. Variables and Data Types
// var, let, const are variable declarations, with 'const' and 'let' being block-scoped.
// Primitive types: string, number, boolean, null, undefined, symbol (ES6), bigint
const name = 'John';  // string
let age = 30;         // number
const isStudent = false;  // boolean
let value = null;     // null
let uninitialized;    // undefined

console.log(name, age, isStudent, value, uninitialized);

// Type Coercion: Implicit and explicit conversions
let numString = "123";
console.log(Number(numString));  // Explicit coercion
console.log(123 + "");  // Implicit coercion (string concatenation)

// 2. Control Flow
document.getElementById('controlFlowBtn').addEventListener('click', () => {
    let score = 85;
    if (score > 90) {
        console.log('A grade');
    } else if (score > 75) {
        console.log('B grade');
    } else {
        console.log('C grade');
    }

    // Loops: for, while, do-while
    for (let i = 0; i < 5; i++) {
        console.log(`For loop: ${i}`);
    }
});

// 3. Functions
document.getElementById('functionsBtn').addEventListener('click', () => {
    // Function Declaration
    function greet() {
        console.log("Hello!");
    }

    // Function Expression
    const greetExp = function () {
        console.log("Hello from function expression!");
    };

    // Arrow Function
    const greetArrow = () => console.log("Hello from arrow function!");

    greet();
    greetExp();
    greetArrow();
});

// 4. Objects
let person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello from person object');
    }
};
console.log(person.name);
person.greet();

// 5. Arrays
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
const newArr = arr.map(num => num * 2);
console.log(newArr);

// 6. Closures
document.getElementById('closuresBtn').addEventListener('click', () => {
    function outer() {
        let count = 0;
        return function inner() {
            count++;
            console.log(count);
        };
    }
    let counter = outer();
    counter();
    counter();
});

// 7. Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Success!');
    } else {
        reject('Error!');
    }
});
promise.then(result => console.log(result)).catch(error => console.log(error));

// Async/Await
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}
fetchData();

// 8. Event Handling
document.getElementById('eventButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// 9. DOM Manipulation
document.getElementById('domBtn').addEventListener('click', () => {
    document.getElementById('domText').textContent = 'Text changed!';
});

// 10. LocalStorage and SessionStorage
document.getElementById('storageBtn').addEventListener('click', () => {
    localStorage.setItem('name', 'John');
    let storedName = localStorage.getItem('name');
    console.log('Stored name:', storedName);
});
