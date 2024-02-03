let arr=[1,2,3,4]
let res=arr.filter(function(el){
    return el%2==1
}).reduce(function(acc,el){
    return acc+el
})
console.log(res)