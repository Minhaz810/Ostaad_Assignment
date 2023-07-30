function Sum(n){
    let result=0;
    for(i=1;i<=n;i++){
        result+=i
    }
    return result
}
//Time complexity is O(N) Here




//Using Math
function Sum2(n){
    return ((n*(n+1))/2)
}
//Time complexity is O(1) Here