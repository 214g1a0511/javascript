function minMAx(N,arr){
//Write code here
let obj={};
let min=Infinity;
let max=-Infinity;
for(let i=0;i<arr.length;i++){
    let ele=arr[i];
    obj[ele]=(obj[ele] || 0)+1;
    
}
//console.log(obj)
for(let key in obj){
       if(obj[key]<min){
        min=obj[key];
       }
        if(obj[key]>max){
        max=obj[key];
   }
}