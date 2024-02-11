let str="moon"
let count=0
for(let i=0;i<str.length;i++){
    let bag=""
    for(let j=i;j<str.length;j++){
        bag+=str[j];
        if(vowel(bag)>=2){
             count++
            console.log(bag)
        }
            
    }
}
console.log(count)
function vowel(str1){
    let count=0
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a'||str1[i]=='e'||str1[i]=='i'||str1[i]=='o'||str1[i]=='u'){
            count++;
        }
    }
    return count;
}