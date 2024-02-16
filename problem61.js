function countSuchPairs(N,K,A){
    //write code here
    let count=0;
    for(i=0;i<A.length;i++){
        for(j=i+1;j<A.length;j++){
            if((A[i]+A[j])==K){
                count++;
            }
        }
    }
    console.log(count)
   
}