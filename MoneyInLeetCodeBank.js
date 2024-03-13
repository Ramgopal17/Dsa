let n=10

var totalMoney = function(n) {
    w=Math.floor(n/7)

    rem=n % 7
   
    if(w<1){
      return rem*(rem+1)/2
    }
    if(w>=1){
     return (w*(w+1)/2)*7+rem*(rem+1)/2
    }
  };

console.log(totalMoney(n))