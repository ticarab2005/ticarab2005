// Arrays - what are they even?

// Primitive Datatypes
//Numbers, Strings, Booleans, null, undefined

//Reference Datatypes - can hold more that one value
//Arrays and Object

//Creation of an Array
// Array literal notation
var favoritecolors = ["blue", "red", "orange"]

// Getting a value with bracket notation
console.log(favoritecolors[1])

// Setting a value with bracket notation
favoritecolors[2] = 'green'

console.log(favoritecolors)

// Mix and match several datatypes in javascript arras
//var seeso = ["Narciso Lobo", 50, true, [1,2,4]]

//seeso[3][1]

//console.log(seeso[3][1])
//favoritecolors[7]= 'purple'
//console.log(favoritecolors)

// Mix and match several datatypes in javascript arras
//var seeso = ["Narciso Lobo", 50, true, [1,2,4]]

//seeso[3][1]

//console.log(seeso[3][1])
//favoritecolors[7]= 'purple'
//console.log(favoritecolors)
// Build in JavaScript array methods and properties
//Push pop lenth

//push is a method that tacks on a value at the end of the array
favoritecolors.push("pink")
console.log("before pop: ", favoritecolors)

// Pop is method that removes a value from the end of the array and returns it
// favoritecolors.pop()
console.log("after pop: ", favoritecolors)
console.log(lastval)

console.log(favoritecolors.length)

for (var i = 0; i < favoritecolors.length; i++) {
    console.log(favoritecolors[i])
}

//var myArray = [5, 2, 8, 1, 9] //-> [9, 1, 8, 2, 5]
//How to swap variables
//var fruit1 = "apples";
//var fruit2 = "oranges";

//fruit2 = fruit1;

//console.log(fruit2 + " and " + fruit1); // -> apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2; //friut1 = orages
fruit2 = temp; // fruit2 = apples

console.log(fruit2 + " and " + fruit1); // ->apples and oranges

// While loops
// Sentry, where it starts, where it ends, and how it changes

var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// start: 0, end :12
// start: 2, end :10
// start: 4, end :8

for (var i = 0; i < favoritecolors.length; i++) {
    console.log(favoritecolors[i])
}

var i = 0
while (i < favoritecolors.length) {
    console.log(favoritecolors[i])
    i++
}

// While loops are for when you don't know how long a loop must run, for loops are used when you do.


//while(temp < arr.length) {
//   temp = arr[arr.lenth-1] = arr[0]
//   console.log()

//Write a function reverse( arr ) to reverse an array, if we were given.

while(temp < arr.length) {
    //   temp = arr[arr.lenth-1] = arr[0]
    //   console.log()

//function isPal(arr) {
//    for (var left = 0; left < arr.length / 2; left++) {
//    var right = arr.length - 1 - left;
//    if ('' != arr[right]) {
//            return "Not a pal-indrome!";
//        }
//    }
//    return "Pal-indrome!";
//}
//var result1 = isPal(1, 1, 2, 2, 1);

//console.log(result1);

//var result2 = isPal(3, 2, 1, 1, 2, 3);
//console.log(result2);

//while(temp < arr.length) {
//   temp = arr[arr.lenth-1] = arr[0]
//   console.log()
//}

while (count < arr.length/2) {
    console.log(arr)
    temp = arr [count];
    arr[count] = arr[arr.length-something];
    arr[arr.length-something] = temp
    
    count++;
    something++;

    ["a", "b", "c", "d", "e"];
    ["e", "d", "c", "b", "a"];
