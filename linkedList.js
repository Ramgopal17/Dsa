class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.length=1

    }
    append(data){
        const newNode={
            value:data,
            next:null
        }
this.tail.next=newNode
this.tail=newNode
this.length+=1
    }
    preppend(data){
        // creating new node
        const newNode={
            value:data,
            next:null
        }
        // linking stage
        newNode.next=this.head
        this.head=newNode
        this.length+=1
    }
traversing(req){
   let currentNode=this.head
  let  count=0
    while(count!=req){
      
        currentNode=currentNode.next
        count++
    }
    return currentNode

}


insert(index,data){
    const newNode={
        value:data,
        next:null
    }
    const leaderNode=this.traversing(index-1)
    const nextNode=leaderNode.next

   leaderNode.next=newNode
    newNode.next=nextNode
    this.length++
}

// 2--->10--->16--->20
// \ 4/

delete(index){
    const leaderNode=this.traversing(index-1)
     const unwantedNode=leaderNode.next
    const nextNode= unwantedNode.next
    leaderNode.next=nextNode
    this.length--
0\
}

// [2,10,16,20]
reverse(){
    let first=this.head
    this.tail=this.head
    let second=first.next
    while(second){
       let temp=second.next
        second.next=first

        first=second
        second=temp
    }
    this.head.next=null
    this.head=first

}


printList(){
    let n=this.head
    let arr=[]
    while(n!=null){
        arr.push(n.value+" ")
  
        n=n.next
    }
    console.log(arr);
}
insertAfer(prev,data){
    if(prev==null){
        console.log('prev can not be null')
    }
    const newNode={
        value:data,
        next:null
    }
    // prev.next=newNode
    // newNode.next=prev.next.next   
    newNode.next=prev.next
    prev.next=newNode
}
deleteFirst(){
this.head=this.head.next
this.length--
}
deleteLast(){
 let   curr=this.head
    while(curr.next.next!=null){
        curr=curr.next
    }
    curr.next=null
    this.tail=curr
}
getlength(){
    let length=0
    let temp=this.head
    while(temp!=null){
        temp=temp.next
        length++

    }
return length
}

midEle(){
    if(this.head!=null){
    let len=this.getlength ()
    let mid=len/2
    let temp=this.head
    while(parseInt(mid)!=0){
        temp=temp.next
        mid--

    }
    console.log(temp.value)
}}
}
let myList= new LinkedList(10)
// myList.append(16)
myList.append(20)
myList.preppend(32)
myList.preppend(22)
myList.insert(1,4)
myList.delete(1)
myList.reverse()
// myList.insertAfer(head.next,34)
// myList.deleteFirst()
// myList.deleteLast()
// myList.getlength()
myList.printList()
myList.midEle()
// console.log(myList)