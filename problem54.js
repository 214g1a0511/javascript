let str="bhanu"
let max=0;
let ans="";
for(let i=0;i<str.length;i++){
    let bag=""
    for(let j=i;j<str.length;j++){
        bag+=str[j];
        if(vowel(bag) && max<bag.length){
            max=bag.length;
            ans=bag
        }
            
    }
}
console.log(max,ans)
function vowel(str1){
    let flag=false
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a'||str1[i]=='e'||str1[i]=='i'||str1[i]=='o'||str1[i]=='u'){
            flag=true
        }
    }
    return !flag
}