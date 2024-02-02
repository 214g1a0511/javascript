let arr=[2,3,4]
let x=function(acc,el){
    return acc*el
}
let res=arr.reduce(x,1)
console.log(res)