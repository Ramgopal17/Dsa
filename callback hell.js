//   getData( function(a){
//      getMoreData(a,function(b){
//          getMoreData(b,function(c){
//             getMoreData(c,function(d){

//             })
//          })
//     })
//  })

// avoid callback using promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successful!");
    }, 300);
  });