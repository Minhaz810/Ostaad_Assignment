class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
    
}

const reverse = (list, left, right) => {
    const temp = new Node(0, list);
    let head = temp;
    let curr = 1;
  
    while (curr++ < left) head = head.next;
  
    let last= head.next;
    while (left++ < right) {
      const next = last.next; 
      last.next = next.next; 
      next.next = last.next; 
      head.next = next;
    }
    return temp.next;
  };
  //Complexity Here is O(n)