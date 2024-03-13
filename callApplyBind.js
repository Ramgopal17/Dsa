function person(){
    name:"akash"
    getName= function (){
       return  this.name
    }
}

const p2={
    name:"vikash"
}
p2.getName=person.getName
let a=p2.getName
// let a=person.getName.call(p2)
console.log(a)