let arr=[1,2,3,4,5],k=3;
let count=0;
for(let i=0;i<arr.length;i++){
    let bag=[];
    for(let j=i;j<arr.length;j++){
        bag.push(arr[j]);
        if(inc(k,bag)){
            count++
        }
        
    
    }
}
console.log(count)
function inc(k,arr){
    let flag=false;
    for(let el of arr){
        if(el==k){
            flag=true;
        }
    }
    return flag;
}