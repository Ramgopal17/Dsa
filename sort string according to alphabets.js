
  let str="ProgRamMiNg"
  elements=str.split("")
  arr = elements.sort((a,b) => a.localeCompare(b));


  console.log(arr.join(""));