var head;
class Node{
  constructor(val,next =null){
    this.data=val
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  // insert first node
insertFirst(data){
  this.head=new Node(data,this.head)
}


  // insert last node


  // insert at index


  // get at index 


  // Remove at index




  // clear list



// print list data


}
const ll=new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
console.log(ll);

// var a=new Node(1)
// var b=new Node(2)
// var c=new Node(3)
                                                                                          
// head.next=b
// b.next=c

// c.next=null

// function printList(){
//   let n=head

//   while(n!=null){
//     console.log(n.data+ " ")
//     n=n.next
//   }
// }