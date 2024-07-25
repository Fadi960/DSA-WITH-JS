// find the most repeated frequent number in an array

var a = [1,4,2,3,7,9,12,34,4,1,99,9,6,8,9,5,0,9]

const s= {};
a.map((x)=>{
    s[x] = s[x] +1 || 1;
});
console.log(s);

let k = Object.keys(s);
let v = Object.values(s);
console.log(k);
console.log(v);
let max = Math.max(...v);
let i = v.findIndex((x)=>{return x==max}) 
console.log(max);
console.log(i);
console.log(k[i]);