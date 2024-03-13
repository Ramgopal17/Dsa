let arr1=[1,2,3,4,5,6]
let arr2=[2,3,4,5,6,7]
let arr3=[6,7,8,9,10]
function common(arr1,arr2,arr3){
    let map1={}
    let map2={}
    for(i of arr1){
        map1[i]=(map1[i]||0)+1
    }

    for(i of arr2){
        map2[i]=(map2[i]||0)+1
    }
    let res=[]
     for(i=0;i<arr3.length;i++){
        if(map1[arr3[i]] && map2[arr3[i]]){
            res.push(arr3[i])
        }
     }
     return res
}

let a=common(arr1,arr2,arr3)
console.log(a)

