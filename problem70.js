//Enter code here
function myFun(N,T,arr){
    let score=0;
    let skip=1;
    for(let el of arr){
        if(el<=T){
            score++;
        }
        else if(el>T && skip){
            skip--;
        }
        else{
            break;
        }
    }
    console.log(score)
}
function runProgram(input){
   // Write Code Here  
     input=input.split('\n');
     
        let [N,T]=input[0].trim().split(' ').map(Number);
        
        let arr=input[1].trim().split(' ').map(Number);
       
        myFun(N,T,arr)
    
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }