// FUNCTIONS - WHAT ARE THEY EVEN
// A function is a series designed to accomplish a task

// Like a recipe

// To craeat a function, use the keywork function
// Following the keyword, name the function
// As a guideline, name functions using camelcase
// Cannot begin with a number 
// Cannot have spaces 
// Cannot have hyphens or dashes 

// Followng the name of the function, we have parentheses
// Inside the parentheses, we have the paramaters of funcion or the recipe necessary ingredients
// Following the closing parenthesis we have our code block with curl brackets at the boodend

// FUNCTION DECLARATION

var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x); //-> 5
setX(15); //-> arguments
console.log(x); // ->

//When you creat the variable using the keyword var, that variable has scope! The scope depends on where that variable was created

// Global Scope or Function

// The return of return
var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there");
}



// The value of a funtion is whatever that function RETURNS


console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards

// 
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if ('' != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal(1, 1, 2, 2, 1);
console.log(result1);

var result2 = isPal(3, 2, 1, 1, 2, 3);
console.log(result2);

//Challenge - Rewrite the algo for strings instead of arrays