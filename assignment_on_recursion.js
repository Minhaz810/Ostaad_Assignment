const add=(first,second)=>{
    if(second===0){
        return 0
    }
    return first+add(first,second-1)
}
//Here the time complexity is O(n) as the function is being called once,where n is the second value
