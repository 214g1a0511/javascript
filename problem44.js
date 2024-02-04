let arr=[1,2,3,4]
let res=function(el){
    return el%2==1
}
let ans=function(acc,el){
    return acc+el
}
let output=arr.filter(res).reduce(ans)
console.log(output)