function aVeryBigSum(ar) {
    // Write your code here
var sum = 0;
ar.forEach((each)=>{
    sum+=each
})
return sum
}
aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005])