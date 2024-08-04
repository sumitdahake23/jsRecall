// Premitive and non primitive data types 

// Primitive  7types : String, Number, Boolean, Null, Undefined, Special Symbol, BigInt

// Js is a Dynamicaly type language 

// const score=100;

// const scorevalue=100.3;

// const isloggedIn =true;

// const outsidema= null;

// let useEmail;

// const id= Symbol('123');

// const anotherId=Symbol('123');

// console.log(id===anotherId);

// const bigInteger=32542343534634567567567566575757567n

// console.log(typeof(bigInteger))


// //  reference (Non Primitive): objects, Array, Function


// const heroes=["Shaktiman", "Nagraj", "doga"];

// let myObj={
//     name:"sumit",
//     age:22
// }

// console.log(typeof(myObj))

// const myFunction=function(){
//     console.log("Hello World");
// } 


// console.log(typeof(myFunction))



// ==================================

//  Stack(Premitive data store) And Heap ( non primitive data store)

let myname="sumitdahake";



let anothername= myname;

anothername="mitdahake"


console.log(anothername)

let user={
    email:"user@gmail.com",
    upi:"user@upi"
}

let userTwo=user;

userTwo.email="sumit@gmail.com";

console.log(user)