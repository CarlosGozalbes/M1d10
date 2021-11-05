/* JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/

let x= "John"
let y="Doe"
console.log("Jhon <> " + "Doe")


let personalInformation = {
    name: "Carlos",
    surname:"Gozalbes",
    email:"Carlosgme92@gmail.com"
}

delete personalInformation.email

let arrayStrings = [];
for(let i = 0; i < 10; i++){
    arrayStrings.push("a");
}
console.log(arrayStrings)

let randomNumberArray = []
for (let i=0; i<100; i++) {
    let temp = Math.floor(Math.random() * 100) + 1;
    randomNumberArray.push(temp)
}

let arrayMaxMin = function(a){
    let maxim = Math.max(a)
    let minus = Math.min(a)
    console.log("The values are, " + minus + " y " + maxim)
}

let arrayOfarrays = [];
for(let i = 0; i < 10; i++){
     let current = [];
     for(let j = 0; j < 10; j++)
          current.push(Math.floor(Math.random() * 10));
     arrayOfarrays.push(current);
}
console.log(arrayOfarrays)

let longestArray = function(a1,a2) {

    if (a1.length>a2.length) {
    return console.log(a1)
    } else {
        console.log(a2)
    } 
}

let biggerArrSum = function(b1,b2) {

    let total1 = 0;
    for (let i of b1) {
        total1 += b1[i];
    }
    let total2 = 0;
    for (let i of b2) {
        total2 += b2[i];
    }

    if (total1>total2) {
        return console.log(b1)
    } else {
            console.log(b2)
    } 
}
