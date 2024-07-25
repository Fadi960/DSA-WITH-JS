// largest element in an array

const array = [10, 20, 5, 40, 30];

let largest = array[0]; 

for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log("Largest element:", largest);