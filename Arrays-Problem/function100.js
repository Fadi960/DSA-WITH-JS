// write a function foo(x) that returns 100 if 101 is passed and 101 if 100 is passed without using if-else

function foo(x) {
    const map = {
        100: 101,
        101: 100
    };
    return map[x];
}


console.log(foo(100)); 
console.log(foo(101)); 
