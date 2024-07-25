// print value at even indices and value at odd indices

// odd
/*for(var a=1; a<100; a++){
    if(a % 2 != 0){
        console.log(a);
    }
}*/

// even
/*for(var a=1; a<100; a++){
    if(a % 2 == 0){
        console.log(a);
    }
}*/

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const evenIndices = [];
const oddIndices = [];

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        evenIndices.push(array[i]);
    } else {
        oddIndices.push(array[i]);
    }
}

console.log("Values at even indices:", evenIndices);
console.log("Values at odd indices:", oddIndices);
