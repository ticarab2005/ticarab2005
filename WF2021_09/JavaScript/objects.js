// OBJECTS - WHAT ARE THEY EVEN???
// Reference data type they can hold mroe than one value

//Objects i JS are like objest in real life 
//Tjey can have caharacteristics and things they can do

//Carr
// Characteristics - make, model, color. number of doors, etc.
// Things it can do - beep, drive, accelerate

// Characteristics are called properties in JavaScript
//Things that it can do are called methods in JavaScript
//Methods are just functions that belong to objects

//Objects literal notation to create an object
// Key - value pairs
var mycar = {
    "make": "Jeep",
    "model": "Wrangler",
    "color": "blue",
    "numberofDoors": 2,
    "beep": function/*namethatfunction*/(){
        console.log("Beep, beep!")
}
    "showStats": function() {
    console.log("Model: "+ this.make)
    }
// Getting and setting values in an object

// Bracket notation
//concole.log(mycar[model])

// Bracket notation setting value
//mycar["color"] = "red"

// Dot notation
console.log(mycar[model])
mycar.color = "red"


console.log(mycar)

mycar.beep()
mycar.showStats()