// let arr= [1, [2, 3], 2, [55, 2, [0, 3],3], [2, 3, [4, 5], 6, 1], 4, 5];
// let a=arr.flat()
// let c=a.flat()

// console.log(c);

var singleNumber = function(nums) {
    let map={}
    let res=[]
    for(i of nums){
        map[i]=(map[i]||0)+1
    }
    
    console.log(map)
    for(key in map){

            if(map[key]==1)
                 res.push(key)
            
        }
        return res
    }

    nums = [1,2,1,3,2,5]

    let a=singleNumber(nums)
    console.log(a);