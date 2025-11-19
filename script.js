// Part 1: JavaScript Basics

const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageInput = document.getElementById('ageInput');
const ageMessage = document.getElementById('ageMessage');

checkAgeBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        ageMessage.textContent = 'Please enter a valid number.';
    } else if (age >= 18) {
        ageMessage.textContent = 'You are an adult.';
    } else {
        ageMessage.textContent = 'You are a minor.';
    }
});

// Part 2: Functions

// Function to calculate square of a number
function square(num) {
    return num * num;
}

// Function to greet user
function greet(name) {
    return `Hello, ${name}! Welcome to JS fundamentals.`;
}

const calcSquareBtn = document.getElementById('calcSquareBtn');
const numInput = document.getElementById('numInput');
const squareResult = document.getElementById('squareResult');

calcSquareBtn.addEventListener('click', () => {
    const num = parseFloat(numInput.value);
    if (isNaN(num)) {
        squareResult.textContent = 'Enter a valid number.';
    } else {
        squareResult.textContent = `Square: ${square(num)}`;
    }
});

// Part 3: Loops

const generateListBtn = document.getElementById('generateListBtn');
const numberList = document.getElementById('numberList');

generateListBtn.addEventListener('click', () => {
    numberList.innerHTML = ''; // Clear previous list
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Number ${i}`;
        numberList.appendChild(li);
    }
});

// Another loop example: forEach over an array
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => console.log(fruit));

// Part 4: DOM Manipulation

// Toggle visibility
const toggleTextBtn = document.getElementById('toggleTextBtn');
const toggleText = document.getElementById('toggleText');

toggleTextBtn.addEventListener('click', () => {
    toggleText.style.display = toggleText.style.display === 'none' ? 'block' : 'none';
});

// Change text color
const changeColorBtn = document.getElementById('changeColorBtn');
const colorText = document.getElementById('colorText');

changeColorBtn.addEventListener('click', () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorText.style.color = randomColor;
});

// Add dynamic list item
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 1;

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Dynamic Item ${itemCount}`;
    dynamicList.appendChild(li);
    itemCount++;
});
