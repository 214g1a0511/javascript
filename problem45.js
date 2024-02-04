let arr=[1,2,3,4,5,6]
let res=arr.filter(function(el){
    return (el%3==0)
}).reduce(function(acc,el){
    return acc**3+el**3
})
console.log(res)