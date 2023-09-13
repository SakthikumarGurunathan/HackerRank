function compareTriplets(a, b) {
    var scoreArr = [0,0]
   for(let i=0;i<3;i++){
       if(a[i] > b[i]){
           scoreArr[0]+=1
       }
       else if(a[i] < b[i]){
               scoreArr[1]+=1
       }
   }
     return scoreArr
   }
