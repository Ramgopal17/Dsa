
//  stack

let data=[]
// currentSize=0
let currentSize=data.length 
let max=5

function push(newEle){
    if(currentSize>=max){
        alert("you can not add "+"newEle")
    }
    data[currentSize]=newEle
    currentSize+=1


}
push(20)
push(30)
push(40)
push(50)
// push(60)
// push(70)

console.log(data)

function pop(){
    if(currentSize>0){
        currentSize-=1
        data.length=currentSize
    }else{
        console.log(" stack is already empty")
    }
}
pop()

// console.log(data)  


//  @@@@@@@@@@@@@@@@@@@@@@@@@@  stack with class @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// class stack{
//     items=[];
//     maxSize;
//     currentSize;

//     constructor(size){
//         this.maxSize=size
//         this.currentSize=this.items.length
//     }
//     push(newVal){
//         if(this.currentSize>=this.maxSize){
//             alert("stack is full")
//         }else{
//             this.items[this.currentSize]=newVal
//             this.currentSize++
//         }
//     }
// pop(){
//     if(this.currentSize>0){
//         this.currentSize--
//         this.items.length=this.currentSize
//     }else{
//         alert("stack is already empty")
//     }
// }
// display(){
//     console.log(this.items)
// }
// }

// st1=new stack()   
// st1.push(20)
// st1.display()


