function traverse2dArray(N, M, matrix){
   let bag=""
    for(i=M-1;i>=0;i--){
        for(j=0;j<=N-1;j++){
            bag+=matrix[j][i]+" ";
        }
    }
    console.log(bag)
}
