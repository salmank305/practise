  /*            https://github.com/sharma-harshita/test              */

// What is JS ? 

// scripting language, dynamic language, functional programming, synchronous language
// single threaded language, JIT compilation, Client side , server side as well. Only Full stack
// weakly typed language


// Variables : 3 ways : let var const
// data type : 2 - primitive , non primitive

// Primitive 
// Number 
// String 
// Symbol 
// boolean
// undefined 
// null

// Non primitive 
// arrays 
// objects


// var e;


// var a = 10;
// var a = "John"

// var = glocal scopic , redeclaration , reinitialize
// let and const = block scope , No redeclaration

// let d;


// let b = 10;
// b = "Doe"

// // let  = reinitialize

// const f;


// const c = 123;
// const = NO renintialize


// brendan eich
// JS engine, 
// Execution Context : GEC , FEC
// phases : 2 - memory allocation, code execution

// MA 
// memory will be allocated to variables : undefined 
// function also gets memory allocted : actual value


// CE
// variables = actual value
// functions = FEC, will pushed to call stack, the moment execution is over then, removed from call stack and excution will come back to GEC

// hoisting 
// 



// JS engine = it helps you to execute JS code 
// Chrome = V8
// Explorer = chakra 
// Mozilla = Spider monkey






// for (var i=0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// task queue , event loop 

// console.log(b);

// const a = function() {
    
// }

// console.log(a);


// const a = function  (){

// }

// a()


// Hoisting says that move all the decalaration and initialization of variables and definition of function at the top of the file so that we can reduce or avoid getting Refrence error because of memory allocation.

// const a = 10;
// console.log(a); //Reference error


// variables declared using let and const are not accessible until and unless they are not initialized.


// console.log(3 > 2 > 1);

// variable = declaration , initialization
// function = defining , invoking


// function add() {

// }


// TDZ = let const 


// closures , lexical environment
// let a = 20;

// function outer(){
//     function inner (){
//         console.log(a);
//     }
//     inner()
// }

// outer()




// function one(a){ 
//     console.log("Value",a)
// }

// one (2)


// function one(a){ 
//     return function(b, c){
//         return a*b*c;
//     }
// }
    
// let value = one (2)(3, 10)

// console.log(value);
// one (2)(3)
// function currying ()()()()



// Objects = literals , object constructor
// key value pair
// var obj = {id: 1, name : "John"}

// console.log(obj.name);
// console.log(obj["name"]);

// const value = Object.values(obj)

// console.log(value)
// console.log(Object.keys(obj))


// const obj1 = new Object({id: 1, name:"Doe"})
// obj1["age"]  = 24;
// obj1.salary = 3000000;

// var user = {
//     id: 1,
//     age: 24, 
//     showDetails : function (id){
//         console.log(id, this.age);
//     }
// }

// user.showDetails(12)


// let a=10;
// let b = a++;
// a++;
// console.log(a,b);

// Grading Plan
// const marks = 78;
// 100 - 80 : "A";
// 80 - 60 : "B";
// 60 - 40 : "C";
// 40 - 10 : "Fail"


// const marks=78;
// switch(true){
//     case (100> marks && marks>80):
       
//         console.log("A");
//         break
//     case  (80> marks && marks>60):
        
//         console.log("B");
//         break
//     case  (60> marks && marks>40):
       
//          console.log("C");  
//          break    
//     case  (40> marks && marks>0):
//          console.log("D"); 
//          break
//     default: 
//          console.log("e");            
// }


//////////////// day 2///////////////////////////////////////////////////////////////////////////


// Operators and Decision Making , conditional statements

// -> Arithmetic
// -> logical 
// -> comparison 
// -> assignment 
// -> ternary
// -> Bitwise
// -> Relational 
// => Increment and decrement operator
// typeof operator = data type of value

// Arithmetic => + - * / % 
// mathematical operations for the numbers 

// let a = 10;
// let b = 20;

// console.log(b/a);


// Logical operators => &&   ||   !
// const value = !(true || false);
// console.log(value);



// ternary operator & Logical and operator : Conditional Rendering in React  

// comparison operators => == === <=  >=  != !== 

// console.log(2==="2");

// console.log(typeof(2));

// console.log( "2" !== "4" );



// assignment = assign value to variable

//ternary operator ? : 

// const output = 10>3 ?"Greater" : "Smaller";
// console.log(output);


// Relational  >  <  >= <=



// Increment operator Post increment  a++ , Pre increment  ++a
// decrement operator Post decrement a--,Pre decrement  --a

// ++ -- 

// let a = 10; 
// let b = a++;    //b = 10 , a = 11
// a++;        //a = 12
// console.log(a, b);

// a++;
// console.log(a++);
// console.log(++a);



// let a = 20;
// let b = 32;
// let c = b++;   // a = 20, b = 33, c = 32
// a = b++;    // a = 33 , b = 34, c = 32
// b = c++;    // a = 33 , b = 32 , c = 33
// a = --c;    // a = 32 , b = 32 , c = 32
// c = b--;    // a = 32 , b = 31 , c = 32

// console.log(a, b, c);





// Bitwise   &  |  ^  ~

// Logic Gates 

// &
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1

// let a = 3;      //0000 0011
// let b = 5;      //0000 0101         0000 0001
// console.log(a & b);

// // |
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1

// let a = 3;      //0000 0011
// let b = 5;      //0000 0101         0000 0111
// console.log(a | b);

// ^ 
// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 0

// let a = 3;      //0000 0011
// let b = 5;      //0000 0101         0000 0110
// console.log(a ^ b);

// ~
// 0 = 1
// // 1 = 0
// let a = 100;  //0000 0000 0011  => 1111 1111 1100
// console.log(~a);




/////////////////////////////////////////////////////DAY3////////////////////////////////////

// CONTROL FLOW
// conditional statements, loops 

// if block , if-else , if-else ladder


// Q : If number is odd then print ODD. 

// a=13;
// // if(a%2 != 0){
// //     console.log("Value a " , a, " is odd.");
// // }

// (a%2 != 0) && (console.log("Value a "  , a , " is odd."))


// logical &&


// let a = 13;


// if(a%2 == 0){
//     console.log("EVEN");
// }else{
//     console.log("ODD");
// }

// Ternary operator 

// (a%2 == 0) ? console.log("Even") : console.log("odd");

// console.log("END");

// let gender="MALE"

// if (gender ==="male" || gender == "MALE") {
//     console.log("MALE");
// }else if (gender ==="female" || gender == "FEMALE"){
//     console.log("FEMALE");
// }else {
//     console.log("OTHERS");
// }

//Week Plan
// const num = 5;

// switch(num){
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Number not valid");
// }



// Grading Plan
// 100 - 80 : "A";
// 80 - 60 : "B";
// 60 - 40 : "C";
// 40 - 10 : "Fail"



// const marks = 80;
// switch (true) {
//     case 100 > marks && marks > 80:
//         console.log("A");
//         break;
//     case 80 >= marks && marks > 60:
//         console.log("B");
//         break;
//     case 60 > marks && marks >= 40:
//         console.log("C");
//         break;
//     case 40 > marks && marks > 0:
//         console.log("D");
//         break;
//     default:
//         console.log("Provide valid marks");
//         break;
// }


/*//////////////////////day 4///////////////////////////////////*/

/*
LOOPS 
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");
console.log("1");


FOR LOOP 
for (initialization ; condition ; incr/decr ){

}

basic structure of loops
for(let i = 0; i < 10 ; i++){
    console.log("1");
}


let i = 0;
for(; i < 10 ; i++){
    console.log("1");
}


let i = 0;
for(; i < 10 ; ){
    console.log("1", i);
    i++;
}


3 * 1 = 3
3 * 2 = 6
3 * 10 = 30

let i = 10;
while (i > 1) {
    console.log("value of i", i);
    i--;
    // infinte loop
    // inc/dec statement which can end the loop
}

Ques : How to create infinite loop using while loop 
while (true){

}


do - while 
let i = 10
do {
    console.log(i);
    i++;
} while (i > 5);


for-in , for-of 

array is a datatype in JS which can store values of different data type

let arr = ["John", 12, 0.5, {id:1, name: "doe"}];
// let arr2 = [1,2,2,3,54,56,734];

for (const value of arr) {
    console.log("of" ,value);
}

for(let index = 0; index< arr.length; index++){
    console.log("traditional for",arr[index]);
}

console.log("NEXT LOOP");

for (const value in arr) {
    console.log("in",value, arr[value]);
}



let str ="Newton School"
console.log(str.indexOf("N"));

console.log(str.charAt(7));
console.log(str.replace("Newton", "P"));
console.log(str.includes("Newton"))
console.log(str.endsWith("ton"));

reverse a string 
let str = "Newton School MERN Stack Development";
School Newton

convert it to an array
reverse that array 
convert back to string

const temp = str.split("").reverse().join("");
console.log(temp);
*/


/*/////////////////////////////////////////////             DAY 5                                      /////////////////////////*/

// arrays 
// is a non-primitive data type
// a structure which can hold values of different data types 


// console.log(arr);

// let arr2 = new Array();
// arr2[0] = 1;
// arr2[2]= 12.3
// arr2[10] = 23;
// console.log(arr2, arr2[1]);

// console.log(arr.length);


// push and pop = add/remove elements at the end of array
// shift and unshift = start of the array
// let arr = [1, 23, 43.3, "John", {id:1,name:"Doe"}, true]
// console.log(arr);

// arr.push(98);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(98);    //add at the start
// console.log(arr);

// arr.shift();    // remove from the start
// console.log(arr);
// let arr=[1,23,3,45,6]
// arr.reverse()
// console.log(arr);

//some every    = always return a boolean value

// let num = [1,2,3,4,67,91];

// const output = num.every(a => a < 50);
// const outputSome = num.some(value => value > 50);
// console.log(output, outputSome);

// foreach map reduce filter
// xy = b function , callback function  
// function a (xy){
    // xy()
// }

// function b (){
// }

// a(b)

// callback = gets passed as an argument to another function

// map v/s forEach

// let num = [1,2,3,4,5,6];
// const newNum = num.filter(value => value > 3)

// console.log("original array", num);
// console.log("new array", newNum);

// map = returns a new array with modified value, doesnt modify original array 
// foreach = modifies in the same array only

// function a (x){
//     return x;
// }

// const value = a(23);
// console.log(value, a(23));
/*
//input
const user = [
    {id:1, name:"John", age:20, salary:25000}, 
    {id:2, name:"Doe", age:24, salary:10000}, 
    {id:3, name:"Harsh", age:27, salary:20000}
]
// ques
// whereever age is less than 25, increment salary by 10000

// output
const newUser = [
    {id:1, name:"John", age:20, salary:35000}, 
    {id:2, name:"Doe", age:24, salary:20000}
]
*/
