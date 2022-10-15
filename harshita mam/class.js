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
//  let arr = [1, 23, 43.3,5]
// console.log(arr);

// arr.push(98);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(98);    //add at the start
// console.log(arr);

// arr.shift();    // remove from the start
// console.log(arr);

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

//input
// const user = [
//     {id:1, name:"John", age:20, salary:25000}, 
//     {id:2, name:"Doe", age:24, salary:10000}, 
//     {id:3, name:"Harsh", age:27, salary:20000}
// ]
// ques
// whereever age is less than 25, increment salary by 10000

// output
// const newUser = [
//     {id:1, name:"John", age:20, salary:35000}, 
//     {id:2, name:"Doe", age:24, salary:20000}
// ]

// const newUser =user.filter(value=>value.age<25)
//  const newvalue = newUser.map(value=>value.age).user.salary+10000;

//constraint one line only

//  spred operator is help to destructure the structure element of array and object so that you acess its elements individaully


//*///////////     //                   DAY -6                  ///////////////////////////////////////////////////////////////////////////////
// //functions
// // any block of code which is being used multiple times then rather than writing it 
// // again and again better to create a function and then execute the function for that.


// // let radius = 2;
// // let area = 3.14 * 2* 2;

// // let r2 = 3;

// // console.log(area);

// // definition / declaration of function


// // function test () {
// //     console.log("Inside function")
// // }

// // // calling / invoking / executing a function
// // test()


// // function declaration v/s function expression 

// // something where function is created using function keyword
// // function add () {
// //     console.log("Add");
// // }

// // add()

// // function is assigned to a variable , to execute this function you will have to use varible
// // named function
// // const sub = function () {
// //     console.log("SUB");
// // }

// // sub()


// // const mul = () => {console.log("MUL");}

// // mul()


// // function declaration - plain function
// // function expression - function is assigned to a variable
// // named function - function is assigned to a variable
// // arrow function - you dont have any function keyword , rather than that you have an arrow 
// // inbuilt functions like map reduce filter
// // anonymous function - a function not having any no name => method
// // method - an anonymous function assigned as a value to a key of an object.
// // first class functions - (b) can be passed as an argument to another function and 
// // can be returned from another function
// // high order function - function which can accept a function as an argument and can return 
// // another function 
// // callback function - function which can only be passed as an argument to another function

// // let user = {
// //     id : 1,
// //     name : "JOHN",
// //     age : 24,
// //     details : function(name){
// //         console.log(user.name, name, this.age);
// //     }
// // }

// // console.log(user.name);
// // user.details("DOE")




// function higherOrderFun (firstClass , firstCLas, name){
//     console.log("A", name);
//     firstClass()
//     firstCLas()
// }


// function b(){
//     console.log("B");
// }

// function c(){
//     console.log("C");
// }

// a(b,c, "Harsh")



// function higherOrderFunction(){
//     return function firstClassFunction(){
//         console.log("HEY");
//     }
// }


// // function add (x, y){
// //     console.log(x,y);
// // }

// // let v = 1;
// // let w = 3
// // add(v, w)


// // xy = parameters , variables used at the time of function definition
// // vw = arguments, variables used at the time of execution


// let a = 30;
// function outer (){
//     let a = 10;
//     function inner (){
//         // let a = 20;
//         function innerChild(){
//             console.log(a);
//         }
//     }
//     inner()
// }

// outer()


// closure : if a variable that you are trying to access in a function, it will look into its 
// own scope , else then it will check in its neighbouring env or lexical env.
// combination  of function and lexical env . 
// lexical env : nearest scope 


// let a = 10;

// function add (){
//     let b = 10;
//     const value = a + b + 10;
//     console.log(value);
// }

// add();
// console.log(b);



////////////////////////////////   DAY 7   //////////////////////////



// if you are accessing any variable before its initialization then it will throw an error : Reference error
// Reference error 
// type error
// syntax error

// Hoisting : to avoid ref error we move the declaration of variable and functions on the top 

// var a = "Name";
// console.log(a.reverse()); // it gives type error 



//  ### Rest parameter, rest operator => its gives structured array
//rules: 
// it will always be used as a function parameter.
// it will always be the last parameter

/*
function structure(a,b,...c){   // rest parameter / rest operator
    console.log(a,b,c);
}
structure(1,2,3,4,4,5,6,7, "salman");

*/
/*
function rest(a,b,...c){
    return [a,b,c];           
}
let ans = rest(1,2,3,4,65,6,"salman")
console.log(ans);
*/


// ### spread operator => its is used to destructure the structure element of non premitive data like arrays and object so that you acess its elements individaully
/*
const arr = [1,2,3,4,45,5,6,6,4,5,46];
let arr2 = ["salman", "khatik", ...arr,10,1,5];
console.log(arr2);
*/


// default parameters in functions
//es5 version of JS
/*
function aRect(p, q){
    let leng = p || 15;
    let wid = q || 15;
    return leng*wid;
}
const ans = aRect()
console.log(ans);

//es6 version of JS
function areaRect(a = 10, b = 12){
    let length = a;
    let width = b;
    return length*width;
}
const value = areaRect()     //areaRect(15,15) we can pass argumnet like this also
console.log(value);
*/


// ######### IIFE - immediately invoked function expression.############
// secrity purpose of variables or data , variables declared inside the function will not be accessible outside.
// we want that the moment files gets executed , the function should be invoked.
// anonymous function
// at the time of definition only you will execute the function as well.
/*
(function(){
    let z=10;
    console.log(z);
})();


(function (x,y){
    let a = 10;
    console.log("Value of a: ", a, x, y);
})(10, 12);
*/
 
/*
temp()            // ReferenceError: temp is not defined
console.log(a);
*/

  // ##############  try and catch
/*
try{
    console.log();
    let a = 10;
    console.log(a);
    console.log(b);   // if line 911 is commentout then try block is print and catch block is not work
    console.log("try block");
}catch(error){
    console.log("Catch block");   // this block work bcz b is not defined 
}

// try-catch block basically helps you to handle the generic errors that can 
// come up in the JS code like Referece error or type error or the errors 
// coming at run time 

// the moment any error will come in try block , it will move the execution to catch block 
*/



///////////////////////////////////////// day 8/////////////////////////////////////////////////////////////////////




// callback function : function which gets passed as an argument to another function 

/*
function add (callbackFun){    //parameters
    callbackFun()
}

function b (){
    console.log("B");
}

add(b)       // arguments
*/



//objects 

/*
function calculateTotalAmount(...c){
    console.log(c);
    const total = c.reduce((acc, cur)=> acc = acc + cur, 0);
    return total
}



let salariesPaidToAllDept = {
    "HR" : 300000,
    "IT" : 303000020312,
    "Sales" : 234567898765,
}

const value = calculateTotalAmount(salariesPaidToAllDept.HR , salariesPaidToAllDept.IT, salariesPaidToAllDept.Sales)

console.log(value);
*/




//objects 
// it is a non primitive data type, which stores data in key-value pair
// 3 ways 
//object literals
// let obj = {
//     id : 13456789,
//     name : "John",
//     pincode : 305901,
//     city : "Ajmer"
// }

// //object constructor function
// let obj2 = new Object({name : "raj"});
// obj2.id = 23;
// obj2.district = "Ajmer";
// obj2["state"] = "rajasthan";


// console.log(obj2, obj);


// //own constructor function
// function Employee (name , age){
//     {
//         this.name = name,
//         this.age = age
//     }
// }


// let emp1 = new Employee("John", 24)
// emp1.salary = 30000;
// let emp2 = new Employee("Doe", 30)
// let emp3 = new Employee("Smith", 27)
// console.log(emp1, emp2, emp3);



// let obj = {
//     id : 1,
//     name : "John",
//     pincode : 305901,
//     city : "Ajmer"
// }


// let obj2 = {
//     name : "John",
//     salary : 305901,
// }

// obj2.age= 25


// let emp1 = {
//     rollno : 101,
//     color : "black"
// }

// // Object.keys
// // Object.values

// console.log("Object = ", Object.keys(emp1), Object.keys(obj2));
// console.log("Object = ", Object.values(emp1), Object.values(obj2));
// console.log(emp1.color);
// let arr = [1,2,3,4]
// console.log(arr);


// Array 
// Object 
// Function
// String 


// All the inbuilt function that we use are defined 
// inside their parent constructor function 


// let arr = [23,5,6,67]

// console.log(arr);

// Prototype is an object to access the parent constructor function. which will help you to access all the inbuilt functions defined inside the parent constrcutor function.



///////////////////////////////////////////// day 9 ///////////////////////////////////////////////////////

/*

let obj = {
    id : 1,
    name : "John",
    age : 24,
    salary : 20000
}

for(let keys in Object.keys(obj)){
    console.log(obj[keys], keys);
}

for(let value of obj){
    console.log(value);
}
*/


//call apply bind in JS.
//gets used to invoke a function
//when you are using call apply and bind at that time you dont have to define the object at the time of definition as a parameter.
// then in that case to refer to that object you can use this keyword.
// first argument will always be the object only which the functions needs .



/* noraml method
let user1 = {
    id : 1,
    name : "Doe",
    age : 24,
    dept : "HR"
}

let user2 = {
    id : 2,
    name : "Smith",
    age : 25,
    dept : "Sales"
}

function userDetails (data, a , b){
    console.log( data.name + " is " + data.age +" years old and he is working in " + data.dept + " dept.", a, b);
}
userDetails(user1, 24, 12)
*/


/*
 ///////////////////////////////////////// CALL METHOD////////////////////////
let user1 = {
    id : 1,
    name : "Doe",
    age : 24,
    dept : "HR"
}

let user2 = {
    id : 2,
    name : "Smith",
    age : 25,
    dept : "Sales"
}
function userDetails (a , b){
    console.log( this.name + " is " + this.age +" years old and he is working in " + this.dept + " dept.", a, b);
}

 userDetails.call(user1, 24, 12);

// arguments other than main object will be passed will be passed individually
*/

/*
  ////////////////////////// APPLY METHOD ////////////////////////
let user1 = {
    id : 1,
    name : "Doe",
    age : 24,
    dept : "HR"
}

let user2 = {
    id : 2,
    name : "Smith",
    age : 25,
    dept : "Sales"
}

function userDetails (a , b){
    console.log( this.name + " is " + this.age +" years old and he is working in " + this.dept + " dept.", a, b);
}
 userDetails.apply(user1,[24, 12]);

// arguments other than main object will passed inside an array.

*/


/*
/////////////////////////////////////////// bind method /////////////////////////////////////////////////
let user1 = {
    id : 1,
    name : "Doe",
    age : 24,
    dept : "HR"
}

let user2 = {
    id : 2,
    name : "Smith",
    age : 25,
    dept : "Sales"
}
function userDetails (a , b){
    console.log( this.name + " is " + this.age +" years old and he is working in " + this.dept + " dept.", a, b);
}

const newUserDetails = userDetails.bind(user2);

newUserDetails(24, 12);
//returns a new function with the reference of that object
// smith is 25 years old and he is working in Sales dept.



*/




// JS inheritance : class based, prototype inheritance

//Prototype inheritance 
// let user1 = {
//     id : 1,
//     name : "Doe",
//     age : 24,
//     dept : "HR"
// }

// let user2 = {
//     id : 2,
//     name : "Smith",
//     age : 25,
//     dept : "Sales"
// }

// user2.company = "nS";

// //__proto__ helps you to assign the value to the parent constructor function. 

// user2.__proto__.zzzzz = 123;  //i am not setting up value inside the respective object, i am setting the value inside the parent constructor function.

// user1.__proto__.displayUserDetails = function () {
//     console.log(this.name, this.age, this.dept);
// }

// user1.salary = 200000

// let arr1 = [1,2,3,4,4]
// let arr2 = [1,2,3,5,4]

// console.log(user2, arr1);
// user2.displayUserDetails()



// arr1.__proto__.display = function(){
//     return 1;
// }

// console.log(arr1, arr2);
// arr array Array 




/////////////////////////////////////////////////////lec -10 ///////////////////////////////////////////////
// DOM 

// document object model 

// how the dom gets created ?
// all the code will get converted to a node 
// tree structure => this node structure gets
// mounted on screen 

// window v/s document
// document object is a part of window object
// document object contains only html css tags access. 
// whereas window object contains access to all the functions present in browser window.


// access elements in dom 
// tag name , id , class name

// const headingElement = document.getElementsByTagName("h1");
// console.log(headingElement);

// const classElements = document.getElementsByClassName("abc");
// console.log(classElements[1].innerHTML);
// console.log(classElements[1].innerText);

// const element = document.getElementById("heading4");
// console.log(element.innerText);

//innerText innerHTML   


// DOM 

// document object model 

// how the dom gets created ?
// all the code will get converted to a node 
// tree structure => this node structure gets
// mounted on screen 

// window v/s document
// document object is a part of window object
// document object contains only html css tags access. 
// whereas window object contains access to all the functions present in browser window.


// access elements in dom 
// tag name , id , class name

// const headingElement = document.getElementsByTagName("h1");
// console.log(headingElement);

// const classElements = document.getElementsByClassName("abc");
// console.log(classElements[1].innerHTML);
// console.log(classElements[1].innerText);

// const element = document.getElementById("heading4");
// console.log(element.innerText);

//innerText innerHTML   


// function changeHeading () {
//     const heading = document.getElementsByTagName("h1");
//     console.log(heading);
//     heading[0].innerText = "hey everyone";
// }

///////////////////////////////////////////lec 11/////////////////////////////
// DOM 

// document object model 

// how the dom gets created ?
// all the code will get converted to a node 
// tree structure => this node structure gets
// mounted on screen 

// window v/s document
// document object is a part of window object
// document object contains only html css tags access. 
// whereas window object contains access to all the functions present in browser window.


// access elements in dom 
// tag name , id , class name

// const headingElement = document.getElementsByTagName("h1");
// console.log(headingElement);

// const classElements = document.getElementsByClassName("abc");
// console.log(classElements[1].innerHTML);
// console.log(classElements[1].innerText);

// const element = document.getElementById("heading4");
// console.log(element.innerText);

//innerText innerHTML   


// function changeHeading () {
//     const heading = document.getElementsByTagName("h1");
//     console.log(heading);
//     heading[0].innerText = "hey everyone";
// }

// function changeHeading () {
//     const userInput = document.getElementById("heading").value;
//     const heading = document.getElementsByTagName("h1");
//     heading[0].innerText = userInput;
// }


// function changeHeading () {
//     const userInput = document.getElementById("heading").value;
//     console.log(userInput);
//     const heading = document.getElementsByTagName("h1");
//     heading[0].innerText = userInput;
// }


// function addHeading(){
//     //access the value given by user
//     const userGivenValue = document.getElementById("head").value;

//     //create new element
//     const newElement = document.createElement("h1");    //<h1>hey</h1>
//     newElement.setAttribute("class", "newHead");
//     newElement.setAttribute("id", "newHead");
//     newElement.innerText = userGivenValue;

//     //access the element where you want to add new element
//     const container = document.getElementById("container");
    
//     container.appendChild(newElement)
//     // document.getElementsByTagName("body")[0].appendChild(newElement);
// }




// TYPE COERCION = coversion of data type by itslef or by machine => double equals to 
// Type inversion = which developers do it by themselves 


// propagation, bubbling , capturing 


//////////////////////////////////////////////////////lec 12/////////////////////
// let a1 = [1,2];
// let a2 = [1,2];
// let a3 = a1;
// let a4 = 30;
// let a5 = 40;
// in this case both will be pointing different memory
// console.log(a1==a2, a1===a2, a3==a1, a4===a5);

// deep copy , shallow copy in JS       HOMEWORK 

//lets not discuss this topic

// shallow copy -> when you want to create an object using another object using assignment operator, both variables will point to same memory location, change in one variable will impact both variables.

// deep copy -> to make sure both objects are pointing to diff locations you will be using stringify.

//shallow copy
// let obj1 = {id:1, name:"John"};
// let obj2 = obj1;
//let obj2 = {...obj1};   //spread operator
//let obj2 = JSON.parse(JSON.stringify(obj1));    //parse
// console.log(obj1,JSON.stringify(obj1), JSON.parse(JSON.stringify(obj1)));
// console.log(obj1, obj2);
// obj2.name="Doe";
// console.log(obj1, obj2);


// MONGO Database 
// [{},{},{}] = JSON objects 
// map reduce filter 
// JSON.parse  == converts string object syntax to an object.
// JSON.stringify == converts object notation to string


// setTimeout = 
// setInterval 

// async programming in JS - Web APIs
// JS is synchronous programming language , 

// console.log("Before setTimeout");

//takes in two parameters, callback function, another is time

//this is the def of setTimeout - it will execute the callback function once the given time will be over
// setTimeout(()=>{
//     console.log("Settimeout output");
// }, 5000)

//this is the def of setInterval - it will execute the callback function after every interval of the given time
// setInterval(()=>{
//     console.log("Settimeout output");
// }, 5000)

// console.log("after setTimeout");

// Is this clear ???


// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 5000);
// setTimeout(() => {
//     console.log("C");
// }, 2000);
// setTimeout(() => {
//     console.log("Z");
// }, 0);

// setInterval(() => {
//     console.log("Interval");
// }, 5000);
// console.log("D");

//a c b

// Event loop 
// -> 


// 


// callback function 

// function printVowel(char ,time, anotherChar){
//     // setTimeout(function(){
//     setTimeout(()=>{
//         console.log("Char", char)
//         anotherChar();
//     }, time)
// }

//callback hell  - nested callback functions passed to a function 
//creates a pyramid structure 

// printVowel("A", 5000, ()=>{
//     printVowel("E", 4000, ()=>{
//         printVowel("I", 3000, ()=>{
//             printVowel("O", 2000, ()=>{
//                 printVowel("U", 1000, () =>{ 
//                     console.log("END")
//                 })
//             })
//         })
//     })
// })




// printVowel("E", 4000)
// printVowel("I", 3000)

// Print  TimeOut
// a       5 sec
// e       4 sec
// i       3 sec
// o       2 sec
// u       1 sec

/*

console.log("HEY")
// Promises 
// helps you to make async behaviour of JS-(webapis) to sync 

function printVowel (char, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(char);
            resolve()
        }, timeout);
    }) 
}

//promise chaining

printVowel("A", 5000)
    .then(()=>printVowel("E", 4000))
    .then(()=>printVowel("I", 3000))
    .then(()=>printVowel("O", 2000))
    .then(()=>printVowel("U", 1000))


console.log("HELOO")

//async await

*/

    
//Promises : pending, fulfilled , rejected

////////////////////////////////////////////////////lec 13 ////////////////////////////////////////

//function checkCanIVote(time,data) {
    //     // return the output using return keyword
    //     // do not console.log it
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             if(data>=18){ 
    //                 // console.log("You can vote");
    //                 resolve("You can vote");
    //             }else{
    //                 // console.log("You can not vote");
    //                 reject('You can not vote')
    //             }
    //         },time)
    //   })
    // }
    
    // checkCanIVote(2000, 70)
    //     .then((data)=>{
    //         console.log(data) // prints 'You can vote'
    //     })
    //     .catch((err)=>{
    //         console.log(err) // does not do anything
    //     })
    
    
    // checkCanIVote(2000, 16)
    //     .then((data)=>{
    //         console.log(data) // does not do anything
    //     }).catch((err)=>{
    //         console.log(err) // prints 'You can not vote'
    //     })
    
    
    
    
    // fetch 
    // fetch is a function which allows you to access and retrieve data from the API.
    // imp point : you will have to convert the data into json format first, in order to access it
    
    // function showImage(){
    //     fetch("https://www.breakingbadapi.com/api/characters?limit=2")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         const imageTest = document.createElement("img");
    //         imageTest.setAttribute("src", data[0].img);
    //         document.getElementById("container").appendChild(imageTest)
    //     })
    // }
    
    
    
    // axios.get()

    
////////////////////////////////////////////////////////////// lec 14 ///////////////////////////
//generator functions, classes in JS
//the ones which can generate multiple and differents when
//being executed multiple times.
//star
//yeild
//next = returns you an object having value and done keys

//react redux saga middleware
//function* numbers(){
//     yield 10;
//     yield 20;
//     yield 30;
//     return 40;
//}

// const a = numbers();

// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// a normal function can return only one single value
// function add(){
//     return 10;
// }


//js classes
//static methods and properties

class Parent {
    //instantiate the variables, 
    static num = 10;
    // static methods should always return a value
    // when you do not want to share these properties with the instances.
    static xy(num){
        return num;
    }

    constructor(x, y){
        this.x = x;
        this.y = y
    }

    getArea = () => {
        return this.x * this.y;
    }
}


//inheritance = when you want to inherit the properties of 
//parent class you will use extends keyword
//2 types of inheritance - class based = child class will be inheriting the properties from the parent class
//prototypal inheritance = variables will be inheriting the properties from their parent constructor function.

class Child extends Parent{

}


const box1 = new Parent(10,20); //instance object
const value = box1.getArea();
console.log(Parent.num,Child.num,Child.xy(20), Parent.xy(Parent.num));
console.log("Area", value, box1.x, box1.y, box1);


// const child1 = new Child(12, 12);
// console.log(child1.getArea());;


// let arr = [1,2];
// console.log(arr);


//getters and setters.
// it will be defined as a function, and when you are accessing it 
// that time you dont have to invoke it like a function rather than 
// that you can directly access it like a normal property

// initially when object is created getter function will be undefined 
// later when that property will be accessed that time it will get its actual value 

// let obj1 = {
//     id : 1,
//     name : "John",
//     get latest(){
//         console.log("HEY eveyrone, keep quiet !!", this.name);
//     },
//     set latest2(x){
//         return this.name = x;
//     }
// }

// obj1.latest
// console.log(obj1);

// obj1.latest2 = "Doe";
// console.log(obj1);

//setter
// this function must will be taking the param
// to execute setter function , you will have to initialize it , that will become default
// param of setter 



// decorators in js 