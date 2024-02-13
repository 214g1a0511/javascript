let arr=[1,2,3,4]
let count=0;
for(let i=0;i<arr.length;i++){
    bag=[]
    for(let j=i;j<arr.length;j++){
        bag.push(arr[j]);
        if(sumarray(bag)%2==0){
            count++
            console.log(bag)
        }
    }
}
console.log(count)
function sumarray(arr){
    let sum=0;
    for(let el of arr){
        sum+=el
    }
    return sum;
}