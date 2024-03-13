let mat = [[ 10, 20, 30, 40 ],
[15, 25, 35, 45] ,
[ 27, 29, 37, 48 ],
[ 32, 33, 39, 50 ]];
let x=29

function serach(mat,x,n){
    let i=0
    let j=n-1
    let sm=mat[0][0]
    let lrg=mat[n-1][n-1]
    if(n==0){
        return -1
    }
    if(x<sm && x>lrg){
        return -1
    }
    while(i<n && j>=0){
        if(mat[i][j]==x){
            return ([i,j])
        }else if(mat[i][j]>x){
            j--
        }else if(mat[i][j]<x){
            i++       
         }
    }
    return -1
}
let a=serach(mat,x,4)
    console.log(a)
    