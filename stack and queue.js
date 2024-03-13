class Queue{
    constructor(){
        this.item=[]
        this.max=7
    }
enqueue(ele){
    return this.item.push(ele)
}
dequeue(){
    if(this.item.length>0){
        return this.item.shift()
    }
}
peek(){
    return this.item[0]
}
isEmpty(){
    return this.item.length==0
}
isFull(){
    return this.item.length==this.max
}
size(){
    return this.item.length
}
clear(){
    this.item=[]
}
}
let queue=new Queue()
queue.enqueue(1)
console.log(queue.item);