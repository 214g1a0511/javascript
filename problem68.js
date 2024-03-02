function char1DArray(N, str){
    let s="@%&#^";
    let obj={};
    for(let i=0;i<s.length;i++){
        obj[s[i]]=i;
    }
    let bag=""
    for(let j=0;j<N;j++){
    for(let key in obj){
        if(str[j]==key)
        bag+=obj[key]
    }
    }
    console.log(bag)
}