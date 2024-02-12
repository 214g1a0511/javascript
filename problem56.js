let arr=[1,2,3,4,5]
let count=0;
for(let i=0;i<arr.length;i++){
    let bag=[];
    for(let j=i;j<arr.length;j++){
        bag.push(arr[j]);
        if(bag[0]%2==0 && bag[bag.length-1]%2==0){
            count++;
            console.log(bag);
        }
    
    }
}
console.log(count)