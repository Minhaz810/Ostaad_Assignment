const add=(first,second)=>{
    if(second===0){
        return 0
    }
    return first+add(first,second-1)
}
console.log(add(10,10))