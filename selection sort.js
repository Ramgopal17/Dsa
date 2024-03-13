// for ascending order

// let items = [20, 12, 53, 3]
// // jo hamari sabse choti value hogi usko first ement se replace ka denge
// function selectionSort(data){
//     let min;
//     for(let i=0;i<data.length;i++){
//         //  isme hum minId ko by default first id manenge
//         min=i
//         for(let j=i+1;j<data.length;j++){
//             if(data[j]<data[minId]){
//                 min=j
//             }
//         }
//         let temp=data[min] 

//         data[min]=data[i]
//         data[i]=temp;

//     }
//     return data
// }
// let res=selectionSort(items)

// console.log(res)


// for descending order  [method 1]

// function selectionSort(data) {
//     let minId;
//     for (let i = data.length - 1; i >= 0; i--) {
//         //  isme hum minId ko by default first id manenge
//         minId = i
//         for (let j = i - 1; j >= 0; j--) {
//             if (data[j] < data[minId]) {
//                 minId = j
//             }                                                                                                                                           
//         }
//         let temp = data[minId]
//         data[minId] = data[i]
//         data[i] = temp;

//     }
//     return data
// }

// let res = selectionSort(items)

// console.log(res)

// method 2 


// jo hamari sabse choti value hogi usko first ement se replace ka denge
let items = [20, 12, 53, 3]
function selectionSort(data) {
    let minId;
    for (let i = 0; i < data.length; i++) {
        //  isme hum minId ko by default first id manenge
        minId = i
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minId]) {
                minId = j
            }
        }
        let temp = data[minId]

        data[minId] = data[i]
        data[i] = temp;

    }
    return data
}


let res = selectionSort(items)

console.log(res)
