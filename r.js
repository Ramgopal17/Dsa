// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// let nums3=[]
// for(i=0;i<nums1.length;i++){
//     if(nums1[i]==0){
//         continue;

//     }
//     nums3[i]=nums1[i]
// }
// for(i=0;i<nums1.length;i++){
//     nums3[nums3.length+i]=nums2[i]
// }
// console.log(nums3)



// var n=2
// var x=0;
// var y=1;
// var z=0;


// while(z<=n){
// log(z)
// x=y;
// y=z;
// z=x+y;
// }


// let k=2
// let data=[1,2,3,4,5]
// for(i=data.length-1;i>=(data.length-k);i--){
// // temp=data[i]
// ;

// }
// data.length=data.length-k
// console.log(data);

// let b=[11,4,11,7,3,7,10,13,4,8,12,11,10,14,12,4]
// let a=[11,4,11,7,13,4,12,11,10,14]
// let map={}
// for(i=0;i<b.length;i++){
//     if(map.hasOwnProperty(b[i])){
//         map[b[i]]+=1
//     }else{
//         map[b[i]]=1
//     }
// }

// for(j of a){
//     if(!map[j]){
//         return false
//     }
//     map[j]-=1
// }

// let d=[]
// for(key in map){
//     if(map[key]!=0){
//          d.push(key);
//     }}
//     console.log(...d)







// if(Object.keys(map).map(k => map[k])!=0){
//     console.log(Object.keys(map));
// };

// var text = 'helloThereMister';
// var result = text.replace( /([A-Z])/g, " $1" );
// console.log(result)
// var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
// let a=finalResult.split(" ")
// console.log(a);
// let count=0
// for(i of a){
//     count ++;
// }

// console.log(count)


// s1 = "and"
// s2 = "art"
// let m = s1.split("")
// let n = s2.split("")
// let map = {}
// for (i of m) {
//     map[i] = (map[i] || 0) + 1
// }
// for (j of n) {
// if(map.hasOwnProperty(j)==true){
//     console.log("yes");

// }else {
//     console.log("no");
// }
// // console.log(map);
// }


// let arr=[1,2,3,4,5]
// let start=0
// let end=arr.length-1
// let position =undefined
// mid=Math.floor((start+end)/2)
// let find=4
// while(start<=end){
//     if(arr[mid]===find){
//     position=mid
//         break;
//     }else if(arr[mid]<find){
//         start=mid+1
//     }else{
//         end=mid-1
//     }
// }
// console.log(position);

// let data=[1,2,5,8,9,14]
// let i=0
// let j=data.length-1
// let result=[]

// let distance=Number.MAX_VALUE
// while(i<j){
//     if(Math.abs(data[i]+data[j]-12)<distance){
//      let result=[data[i],data[j]]

//         distance=Math.abs(data[i]+data[j]-12)

//     }
// if(data[i]+data[j-12>0]){
//     j--
// }else if(data[i]+data[j]-12<0){
//     i++
// }
// }

// console.log(result)




// let arr=[1,2,3,4,5,6,7]
// let k=3
// for(i=0;i<k;i++){

//     arr.pop()
//     arr.unshift()
// }
// console.log(arr)


// let arr = [7, 1, 5, 3, 6, 4]

// function sell(arr) {
//     let sum = 0
//     let max = -Infinity
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             sum = arr[j] - arr[i]
//             if (sum < 0) {
//                 continue
//             }
//             if (sum > 0) {
//                 if (sum > max) {
//                     max = sum
//                 }

//             }
//         }

//     }
//     return max
// }
//     a = sell(arr)
//     console.log(a);

// let prices = [7, 1, 5, 3, 6, 4]

// var maxProfit = function(prices) {
//     let maxPro = 0
//     let min_price=Infinity
    
//     for(i=0;i<prices.length;i++){
//         min_price=Math.min(min_price,prices[i])
//         maxPro=Math.max(maxPro,prices[i]-min_price)
//     }
//     return maxPro
    

    
    
    
// };

// let c=maxProfit(prices)
// console.log(c)


// 

// let nums=[2,2,1]
//  let map={}
// for(i of nums){
//     if(map.hasOwnProperty(i)){
//         map[i]=map[i]+1
//     }else{
//         map[i]=1
//     }
// }
// for(key in map){
//     if(map[key]==1){
//         console.log(key)
//     }
// }

// let arr=[1,2,3,4,5]
// function sum(arr){
//     let n=arr.length
//     if(n==0){
//         return 0
//     }
//     let b= arr[0]+sum(arr.slice(1))
//     return b
// }
// let b=sum(arr)
// console.log(b);
