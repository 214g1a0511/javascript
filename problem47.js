let arr=[
    {firstname:"bruce",lastname:"wayne",place:"bng"},
    {firstname:"bruce1",lastname:"wayne1",place:"bng"},
    {firstname:"bruce2",lastname:"wayne2",place:"hyd"},
]
let res=arr.map(function(el){
   let x=el.firstname+" "+el.lastname
    return x
})
console.log(res)