function ls(str){
  l=str.length
  j=0
  let i=0
  let max=0
  let mp=new Map()
    while(j<l){ 
        if(mp.has(str[j])){
        mp.set(str[j],mp.get(str[j],0)+1);
    
        
    console.log(mp)
        if((mp.size)<k)
        {
            j++;
        }
        else if(mp.size==k)
        {
            max=Math.max(max,j-i+1);
            j++;
        }
        else
        {
            while(mp.size>k)
            {
                mp.set(str[j],mp.get(str[i])-1);
                if(mp.get(str[i])==0)
                {
                    mp.delete(str[i]);
                }
                i++;
            }
            j++;
        }
    }

return max

}
}
let str="eceba"
k=3
let a= ls(str)
console.log(a);