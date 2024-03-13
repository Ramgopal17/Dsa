let person={fname:"ram",
           lname:"kashayap",
             fullname:function(){
                console.log(this.fname  +" " +this.lname)
             }}

 let fullname=person.fullname
//  After assigning person.fullname() to a variable  this keyword lost connection to person object and after console it returns undefined to avoid this we should use .bind function
// console.log(fullname) 
 let bounded=fullname.bind(person)
 bounded()

 button=button.addEventListner(click,
    person.fullname.bind(person)

 )