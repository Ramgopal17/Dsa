let arr=[-1,0,1,2,-1,-4]
var threeSum = function(arr) {
    arr.sort((a,b)=>(a-b))
    let res=[]
    for(i=0;i<arr.length-2;i++){
        let s=i+1
        let e=arr.length-1
        while(s<=e){
            if(arr[s]+arr[e]>0){
                e--
            }else if(arr[s]+arr[e]<0){
                s++
            }else if(arr[s]+arr[e]==0){
                res.push([0,arr[s],arr[e]])
                s++
                e--
            }
        }
    }
    return res
};

let a=threeSum(arr)
console.log(a)