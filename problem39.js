let arr=[1,2,3]
let x=function(el){
    let x=(el%2==1)
    return x
}
let res=arr.filter(x)
console.log(res)