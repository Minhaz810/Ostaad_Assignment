//Brute Force Approach: Complexity O(n^2)

const maxProfit=(arr)=>{
    const len=arr.length
    let maximumProfit=0
    let currentProfit;
    for(i=0;i<len-2;i++){
        for(j=i+i;j<len-1;j++){
            currentProfit=arr[j]-arr[i]
            if(currentProfit>maximumProfit){
                maximumProfit=currentProfit
            }

        }
    }
    return maximumProfit

}

//Optimal Approach: Complexity O(n)

const maxProfit2=(arr)=>{
    const len =arr.length
    let left=0
    let right=1
    let maximumProfit2=0
    // we are comparing two values here,so the 2nd last value will be compared to the last value,that is why the loop is running len-1 times
    for(i=0;i<len-1;i++){
        if (arr[left]>arr[right]){
            left=right
            right+=1
        }else{
            currentProfit2=arr[right]-arr[left]
            if(currentProfit2>maximumProfit2){
                maximumProfit2=currentProfit2
            }
            right+=1
        }

    } 
    return maximumProfit2

}
/**lets say we have an array [7,1,5,3,6,4,14]
here the left is 7 and the right is 1, so even if there is 14 which
larger than 7, it will be best to buy the stock for
1 and sell the stock for that large value. that is why we move the left
pointer after getting some value lesser than it in the right.**/
