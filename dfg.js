function solvePattern(n) {
    let sequence = [1];
  
    for (let i = 1; i < n; i++) {
      let next = sequence[sequence.length - 1] + 2;
      sequence.push(next+"");
  
      for (let j = 0; j < i; j++) {
        let next = sequence[sequence.length - 1] + 2;
        sequence.push(next+"");
      }
    }
  
    return sequence;
  }

  let a=solvePattern(6)
  console.log(a)
  