function patternOfN(N) {
    // Write code here
   let count=1;
   
   for(i=1;i<=N;i++){
       let sum="";
       for(z=1;z<=N;z++){
           sum=sum+count+" ";
           count++;
       }
  console.log(sum);
   }

    
}