// merge two sorted arrays into new array

let data = [3,7,12,34,56,90];
let data2 = [20,30,40,50]
let data3 = [];
for(i=0;i<data.length;i++){
   data3[i]=data[i];
   //console.log(data3); value of data is added in data3 one by one from for loop iterating ever index
}
for(i=0;i<data2.length;i++){
   data3[data.length+i]=data2[i];
   //console.log(data3); value of data 2 is added in data 3 one index at a time/iteration moving from every index/node of data2
}
console.log(data3);