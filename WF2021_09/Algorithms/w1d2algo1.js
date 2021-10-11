/*

Javascript variables nd Datatypes
To create a javascript variable, first use the keyword var
Following the var keyword, name variable
-Names cannot have dashes in them or hyphens
- Namescannot begin with a number
- Names
- First word begins with a lower case character, and every word there after begins with a capital character




Datatypes 
Primitive Datatypes
- Strings(strings of characters signified by quotation marks at the bookends)
- You can use single or double quotes, but both bookends much match
- You can have spaces in strings - it's just another chracter 

- Numbers (in javaschropt, both integers and floating point numbers are both numbers)
- Operators
+ plus
- minus
* multiply
** square
/division
++ increments by one
--decrements by one

Booleans (can only hold on of two values - true or false)


*/

// Lesson one

Var mymname 'Narcisco Lobo'
var isSleeping = 

var a = 25;
var b = 35.7;
a = a - 13; //->12
console.log(a / 2); //->6

a = "hello"; //a-> "hellow"
console.log(a + " hello"); -> "hello"

// Lesson 2
for (var i = 0; i < 10; i++) { //keywords  for and var
    console.log(i);
    i = i + 3;
}
// 
console.log("outside of the loop " + i);

/*

JavaScript Loops
Four things you need fo ra  JavaSripts for loop
1. Sentry (for example, i)
2. Where that sentry starts
3. where that sentry ends - with a boolean expression
4. how amy sentry changes

Creation of a for loop
Start with the for keyword, follow by paranthesis, the satify the four requirements and dont foget your semicolons.
After the closing parenthesis, we have curly braces at the beginning and end a the four loops of the code block

Boolean operators 
<  less than
> greater than
<= less than or equal too
>= greater than or equal too
== is equal to 
=== is strictly equal to
*/

var thing1 = 10
var thing2 = '10'

console.log(thing1 === thing2);

// Lesson 3


function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0]; -> 

    for (var i = 0; i < arrayOfNumbers.length; i++) { //1
        sum += arrayOfNumbers[i]; //2 + 3= 5 -> 5+ 5= 10
   // sum = sum = arrayofnumbers [i]
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]); // arrays are zero-indexed

//The total reflects an addional interation over i adding i to the total sum
//leaving us with a total sum of 10
