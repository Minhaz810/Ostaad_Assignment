const check=(s)=> {
    let stack=[]
    const pairs={'(':')',
                '{':'}',
                '[':']'}
    for(bracket of s){
        if(bracket=='(' || bracket=='{' || bracket=='['){
            stack.push(bracket)
        }else{
            if(stack.length!=0 && bracket==pairs[stack[stack.length-1]]){
                stack.pop()
                //we need to pop the corresponding opening bracket if we find a closing bracket,but if there is nothing in the stack,we can't pop anything,that means we didn't find any opening bracket for the closing bracket. 
            }else{
                return false
            }
        }
    }
    return stack.length===0
};
//The complexity here is O(n)