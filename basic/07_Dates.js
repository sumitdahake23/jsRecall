// to know more about date you have to reaa documentation about date which is on MDN documentary


// Documentation is very much important by any way

let myDate = new Date()

console.log(myDate.toString())

// There are multiple methods you have to get into it itsss an assignment for the same

console.log(typeof myDate)


let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

// you have read about documentation of the same to know about the details method of the same

console.log(myCreatedDate.toLocaleDateString())

// getTime Method etc
// Know about timestamp

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(Math.round(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getTime())
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
    // timeZone:'India'

}))


