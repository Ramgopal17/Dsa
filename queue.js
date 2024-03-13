let queue=[]
let currentSize=queue.length
let maxSize=5;

function enqueue(newVal){
    if(currentSize>maxSize){
        alert("queue is full")
    }else{
        queue[currentSize]=newVal
        currentSize++
    }

}

function display(){
    console.log(queue)
}
function dequeue(){
    if(currentSize>0){
        for(i=0;i<queue.length;i++){
            queue[i]=queue[i+1]
        }
        currentSize--
        queue.length=currentSize
    }else{
        alert("queue is already empty")
    }
}


enqueue(40)
display()


// front and rear ,isEmpty

function front(){
    if(currentSize>0){
        console.log(queue[0])
    }else{
        alert("queue is already empty")
    }
}

function rear(){
    if(currentSize>0){
        console.log(queue[currentSize-1])
    }else{
        alert("queue is already empty")
    }
}

function isEmpty(){
    if(currentSize<=0){
        
    }
}