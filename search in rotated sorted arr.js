function search( arr,target)
let s=0
let e=arr.length-1
   mid=Math.floor(s+(e-s)/2)

        // key not present
        if(s >e) return -1

        // key found
        if(arr[mid] == key)  return mid

        // if left half is sorted.
        if(arr[s] <= arr[mid])

                // if key is present in left half.
                if (arr[s] <= key && arr[mid] >= key) 
                        return search(arr,key,low,mid-1)

                // if key is not present in left half..search right half.
                else                 
                        return search(arr,key,mid+1,high)
                end-if

        // if right half is sorted. 
        else    
                // if key is present in right half.
                if(arr[mid] <= key && arr[high] >= key) 
                        return search(arr,key,mid+1,high)

                // if key is not present in right half..search in left half.
                else
                        return search(arr,key,low,mid-1)
                end-if
        end-if  