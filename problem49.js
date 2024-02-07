let x=3;

for(let i=0;i<x;i++){
    let bag=""
    for(let j=0;j<x;j++){
        if(j%2==1){
            bag+=j+" "     
        }
        else{
            bag+=i+" "
        }
    }
    console.log(bag)
}