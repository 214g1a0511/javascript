let obj=[
    {firstname:"bruce",lastname:"wayne"},
    {firstname:"bruce1",lastname:"wayne1"},
    {firstname:"bruce2",lastname:"wayne2"},
]
let res=obj.filter(function(el,i){
    console.log(el.firstname,i)
})
