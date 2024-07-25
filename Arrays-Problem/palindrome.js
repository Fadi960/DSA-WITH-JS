// check whether an array is palindrome

var num = 11211;
var originalNum = num;
var reverse = 0;

while ( num != 0 ){
    reverse=(reverse*10)+(num%10);
    num = parseInt(num/10);
    //console.log(num);  it will multiply modulus divide the given number to 0
    //console.log(reverse);// it will reverse the number one by one
}
 
if(originalNum==reverse){
   // console.log(num);  0
   // console.log(originalNum);   11211
    console.log(reverse + "is a palindrome");
}else{
    console.log(reverse + "not a palindrome");
}


// check whether a string is palindrome

function palindrome(data){
    let start = 0;
    let end = data.length-1;
    let result = true;
    while(end > start){
    if (data[start] != data[end]){
        result=false;
    }
    start++;
    end--;
    }
    return result;
}
let str = "level";
console.log(palindrome(str));