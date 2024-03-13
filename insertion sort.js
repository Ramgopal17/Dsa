// steps
// 1.  consider 2nd elemnt ,arr[1] start yahi se hoga  outer loop will go right and inner loop will go left
// 2. arr[j]<cur  -swapping perform hogi
let arr = [8, 2, 4, 1, 3]
const sorted = (arr) => {
    // first for loop used for no of rounds
    for (let i = 1; i < arr.length; i++) {  
        let curr = arr[i]
    
    let j = i - 1
  while  (j >= 0) {
            if( arr[j ]> curr){
                arr[j + 1] = arr[j]
                // temp  [8,8,4,1,3]
            } else{
                break;
                    } 
                    j--
              }
              arr[j + 1] = curr
        }
      return arr
      }
      const res=sorted(arr)
      console.log(res);
            