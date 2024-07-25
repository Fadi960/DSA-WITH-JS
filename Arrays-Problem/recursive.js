// write  recursive function

function rev(num){
    if(num===0){
        return 1
    }else {
        let y = num*rev(num-1)
        console.log(num,y);
        return y;
    }
}

console.log(rev(5));