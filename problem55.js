let str=[1,2,3,4,5]

for(let i=0;i<str.length;i++){
    let bag=[]
    for(let j=i;j<str.length;j++){
        bag.push(str[j]);
        console.log(bag)
    }
}

