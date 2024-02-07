let str="masai"

for(let i=0;i<str.length;i++){
    let bag=""
    for(let j=i;j<str.length;j++){
        bag+=str[j];
        if(bag[0]==bag[bag.length-1])
        console.log(bag)
    }
}