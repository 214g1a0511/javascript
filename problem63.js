function masaiPalSubString(S){
    //write code here
let max=-Infinity;
for(let i=0;i<S.length;i++){
    let sum="";
    for(let j=i;j<S.length;j++){
        sum+=S[j];
        if(pal(sum) && sum.length>max){
            max=sum.length;
        }
    }
}

console.log(max);
}
function pal(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }if(rev==str){
        return true;
    }else
    return false;
}