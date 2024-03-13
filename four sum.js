let arr=[10, 2, 3, 4, 5, 9, 7, 8]
target=23

for(i=0;i<arr.length-2;i++){
    curr=target-arr[i]
    for(j=0;j<arr.length;j++){
        for(k=0;k<arr.length;k++){
           if(arr[i]+arr[j]+arr[k]==curr)
        }
    }
}
