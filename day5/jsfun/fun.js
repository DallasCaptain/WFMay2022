//declare variables
    var name = 'bob' //string
    var number = 6 //number
    var isRaining = false //boolean

    var myarr = [1,2,3] //Array
    var mycar = {color:'red'} //JSON

//JS variables are LOOSELY TYPED

//operators
//addition 
7+5 // 12

//subration
10-5 //5

//increment
number++ // number = number + 1

//decrement
number-- // number = number -1

// += 
number += 5 // number = number + 5

//multiplication

7*7 //49

//division
7/7 // 1

//modulus --- remainder
10%3 // 1


//conditionals

if(isRaining){}
x= 10
y= 9
x==y //equality this has type conversion
x===y //exactly the same -- memory
console.log('==')
console.log("1" == 1)

console.log('===')
console.log("1" === 1)

// greater than
10 > 8

// lessthan
8 < 10


//multiple conditions

// && AND will be true if both sides are true otherwise false
1< 10 && 5==number
// || OR will be true if either side is true otherwise false
1 < 10 || number === 5

//loops
for(var i = 0; i<10;i++){
    console.log(i) // 0 -> 9
}
//while loop
var i = 0
while(i< 10){
    console.log(i) //0->9
    i++
}

//ARRAYS

[] //array notation

var arr = [1,2,3] //instantiation
arr[0] = 8 //assignment
console.log(arr[1]) //2 retrieval

arr.length // 3

arr.push(value) //adds value to the end of the array
var last_value = arr.pop() //removes the last value in the array and returns it

//function
//function names must start with a letter
function countTo10(param1,param2, param3){ //we can take as many parameters as we want
    //code
}

//to provide values for the params
//we call the function and pass them in order

countTo10(4,1) //unspecified values will be 'undefined'


