


// let a = document.createElement('div');
// a.innerHTML = '<p>hello salu</p><p>hello salu</p><h1>hello salu</h1>'
// a.setAttribute('class','pp');
// a.setAttribute('id','faltu');
// document.body.appendChild(a);






// let b = document.createElement('input');

// let c = document.createElement('div');


// document.body.appendChild(b);
// document.body.appendChild(c);


// // innerHTML v/s textContent 



// c.textContent = '<p>hello salu</p> <p>hello salu</p><p>hello salu</p>';

// // play with attribute 


// a.setAttribute('id','ppp');

// b.setAttribute('type','Number');
// b.setAttribute('value','21311');

// // creating element using js done
// let e = document.createElement('ul');

// document.body.appendChild(e);

// e.setAttribute('id','anp');


// let animals = ['dog','cat','fox','tiger','lion'];


//  for(const name of animals){
//     var newEle = document.createElement('li');
//     newEle.textContent=name;

//     my.appendChild(newEle);
//  }



//  const cars = ['BMW','NANO','HONDA','TATA','FORD'];

//  for( let car of cars){
//     let newCar = document.createElement('li');

//     newCar.textContent = car ;
    
//     faltu.appendChild(newCar);
    
//  }




// 
//  Docment fragment : invisible element of html 


// let a = document.createElement('ul');

// document.body.appendChild(a);
// a.setAttribute('id','myList');


// let item1 = document.createDocumentFragment();

// let i1 = document.createElement('li');
// let i2 = document.createElement('li');
// let i3 = document.createElement('li');

// i1.textContent = 'BMW';
// i2.textContent = 'NANO';
// i3.textContent = 'HONDA';

// item1.appendChild(i1);
// item1.appendChild(i2);
// item1.appendChild(i3);


// myList.appendChild(item1);


// this keywords////////////////////////////////////////////////////////////////////////////////////////////
// 
// Constructor in js

// function getObjKeys(obj){
//     return Object.keys(obj).join(',');
//  // return the answer, dont use console.log here
//  }
 //
// String name,roll
//https://app.slack.com/client/T039MJ5BJ1E/C03QQJM3CG5
/*What Happens When A Constructor Gets Called?
When a constructor gets invoked in JavaScript, the following sequence of operations take place:

A new empty object gets created.
The this keyword begins to refer to the new object and it becomes the current instance object.
The new object is then returned as the return value of the constructor.


//Program1

//Constructor
function User() {
    this.name = 'Bob';
}

var user1 = new User();
var user2 = new User();

console.log(user1);


// Program 2
function User() {
    this.name = 'Bob';
    this.roll=21;
}

let user1 = new User();

// user1={name:"Bob",roll:"21"}
user1.name="hello";


let user2 = new User();
let user3 = new User();
console.log(user1,user2,user3);



// correct way of using same Obj

var obj=new Constructor();
function CssSelector(param1,param2,param3){
    this.background:"black",
    this.color:"white"
}

var subject1=new Subject();
var subject2=new Subject();
var subject3=new Subject();

// wrong way of using same object
div1={
    background:"black",
    color:"white"
};

div2={
    background:"black",
    color:"white"
};

div3={
     background:"black",
    color:"white"
};

// Built in constructors

var a = new Object(); 

var b = new String();

var c = new String('Bob')

var d = new Number();
var e = new Number(25);

var f = new Boolean();
var g = new Boolean(true);
/*
//Adding property to constructor using prototype



function CssSelector(){
    this.background:"black",
    this.color:"white",
    this.age:25
}
CssSelector.prototype.age = 25;
console.log(user1.age); // 25
console.log(user2.age); // 25
*/
// this keyword

// Global this
/*
function abc(){
    console.log("hi");
}
var i=0; // global scope variable

console.log(this); // print a global this

this.name="prakhar";
console.log(this);




const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() { // entering into this function
        //var firstName="gtgtg";
      return this.firstName + " " + this.lastName; //
    }
  };

console.log(person.fullName());  // calling a constructor

const personNew = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function(firstName,lastName) {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(personNew.fullName("prakhar","tiwari"));


this.name="prakhar";
console.log(this);

const personSecond = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function(firstName,lastName) {
      return this.firstName + " " + lastName;
    }
  };

  //console.log(personSecond.fullName("prakhar","tiwari"));

  console.log(personSecond.fullName("prakhar","tiwari"),this);

  */
// Objects Assign object.assign and object.is

///// Object.assign()

//This function is used to merge or clone the objects
// Program 1. (Merge Objects)

//Object.assign(obj1,obj2)
/*
var obj1={a:1,b:3};
var obj2={c:3};
var obj3=Object.assign(obj1,obj2);
console.log(obj3); // adding all keys and one object is made

//Program 2 (Merge Objects)

var obj1={a:1,b:3};
var obj2={a:2};
console.log(Object.assign(obj1,obj2)); // updating value if key is same

//Program 3 (clone objects)


var obj1={a:1,b:3};
var obj2={};
//console.log(Object.assign(obj1,obj2));
//obj1.a=3;

obj2.name="jijij";
//console.log(obj2);
console.log(Object.assign(obj1,obj2));
console.log(obj2);
 // Not clone it is merge
*/
// Object.is() Comparing Two objects also can be called as conditional function which can compare any type of values

///Program1

/*
var obj1={a:1};
var foo={a:1};
console.log(Object.is(obj1,foo)); // return would always be boolean
*/
//Program 2
/*
var a=25;
var b=28;
var c="hello";
var d="hello";
console.log(Object.is(a,b));
console.log(Object.is(c,d));
console.log(Object.is(a,d));


//This is also not the same as being equal according to the === operator. 
//The only difference between Object.is() and === is in their treatment of signed zeroes and NaNs. 
//For example, the === operator (and the == operator) treats the number values -0 and +0 as equal. 
//Also, the === operator treats Number.NaN and NaN as not equal.
//Program3

var obj1=-0;
var foo=+0;
console.log(Object.is(obj1,foo)); // false

console.log(obj1===foo); // true

// Factory Functions 

//Only difference bw factory function and normal function is that facotry function returns the obj with assigned values 
// Program 1

function createEmployeeObjects(name) { // factory functions
    return {
       name: name,
       work: function () {
          console.log('New Employee Created with name: ' + name);
       }
    };
 }
 //Creating an Employee with factory function
 const emp1 = createEmployeeObjects('Steve Jobs');
 console.log(emp1.work());
 
 // Create a robot with name Chitti 2.O Upgraded
 const emp2 = createEmployeeObjects('Bill Gates');
 console.log(emp2.work());
 

 4 Pillars of OOPS
 1. Object
 /*
 2. Classes
*//*
 class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){ // userDefined
        return this.name
    }
  }
  // Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());
console.log(bike2.getDetails());

*/
 //3. Encapsulation  The process of wrapping properties and functions within a single unit is known as encapsulation

/*
 class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(this.name,this.add);
    }
}
 
let person1 = new person('Mukul',21);
person1.getDetails();
person1.add_Address('Delhi');
person1.getDetails();

Program 2
 function person(fname,lname){
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }
 
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person1 = new person('Mukul','Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());
 

4. Inheritance  It is a concept in which some properties and methods of an Object are being used by another Object.

//Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name,id){
        //super keyword for calling the above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());

*/

/* Js Date

const d = new Date();
d.getTime();
d.getFullYear();
*/


//Topic Hoisting
// Program 1     // using test before declaring
  // undefined
/*
console.log(test); 
var test;
 // undefined and reference error


// Program 2 // program to display value
a = 5;
console.log(a);
var a; // 5


var a; // 5
a = 5;
console.log(a);


// Program 3 // program to display value
console.log(a);
var a = 5; // in js initialisations are not hoisted

var a;
console.log(a);
a=5;
// Compiler sees like 

// Program 4 When variables are inside the function but var let const is not used 
// program to display value
 var a=4;

function greet() {
    var b;
   
    console.log(b); // hello
    b = 'hello';
    
}

greet(); // hello
//console.log(b);


// Program 5 // Usage of let : let variable is not hosted
// program to display value
a = 5;
console.log(a);
let a; // error


// Program 6 // Function Hosting 
// program to print the text


function greet() {
    console.log('Hi, there.');
}
greet();*/
// Program 7 // Function declared as variable
/// program to print the text
/*
greet1();
let greet1=4; // greet1 is a variable of number type

var greet1 = function() {    // greet1 is a variable of function type 
    console.log('Hi, there.');
}

*/
// Topic Rest parameters 
/*fn(1, 2, 3, "A", "B", "C"); 

function fn(a,b,...args){

}
*/
// Program 1 passing arguments storing in one array 
//...variable is known as rest parameter
/*
function sum(a,b) { // values that are used inside defining a function are termed as arguments
    let total = 0;
    //1,2,3]
    for (const a of args) {
        total += a;
        console.log(total);
    }
    return total;
}

console.log(sum(1, 2, 3)); // values that are used inside calling a function are termed as parameters

function sum(a,b) { // values that are used inside defining a function are termed as arguments
    console.log(a,b);
}

console.log(sum(1, 2, 3));

*/
// Topic Array Join

// Program 1 
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(",");
let textnew = fruits.toString();
console.log("join output ",text);
console.log("tostring output ",textnew);
// Program 2

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);

// Topic Splice 

// Program 1

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 2); // splice(index,number of elements)
console.log(fruits);

//Program 2
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0,"Lemon", "Kiwi");
console.log(fruits);

// Topic Slice 

// Program

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0,4); // slice(start,end);
console.log(citrus);


// Topic unshift array 

// unshift() adds new items to the beginning of an array

// Program 1

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

const num = [0,1,2,3,4];
num.unshift(101,102);
console.log(num);


// Topic shift array

// shift() removes first element from an array 

// Program
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);


// Topic Reversal of array 

const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.reverse());

// Topic concat Arrays

// Program

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children = arr1.concat(arr2, arr3);
console.log(children);
*/

// Sort the array 
//Program 1 

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.sort());
// const num =[40, 100, 1, 5, 25, 10];
 // console.log(num.sort());


// Program 2  ascending order
//var ar=[-1,2,-3,1,3,-4];

/*
//onsole.log(ar.sort());
const points = [-1,2,-3,1,3,-4];
//points.sort(function(a, b){return a-b}) 
console.log(points.sort(function(a, b){return a-b})); // ** correct implementation


// Program 3 descending order

const points1 = [-1,2,-3,1,3,-2];

console.log(points1.sort(function(a, b){ return b-a}));  // ** correct Implementation 


// Program 4 Lowest number

const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort(function(a, b){return a-b});

let lowest = points[0];
*/
 // Program 5 Maximum number 
//  const points = [40, 100, 1, 5, 25, 10];

 // Sort the numbers in ascending order
//  points.sort(function(a, b){return a-b});
 
//  let lowest = points[points.length-3];


// var a =0;
// function numberOfPrimes(N)
// { 
//       for(let i=2;i<N;i++){
      
//                if(N%2!=0){
//                     a++;
//                      return a;
//                }
//       }
// }

/* ********************************************add two number *************************************************
var a;
var b;
function add(a,b){
 var add =a+b;
    console.log(add)
    return add; 
}
 add(5,4)

*/

/* call stack

var a =10;
console.log(a);
function test1(){
    var x=1;
    console.log('hvsv');
}
var a=10;
function test2(){
    var x=1;
console.log('hv');
}
var c=10;
test2();
test1();
*/


/* ***************************************************Lexical scoping********************************
var a="salman"
console.log(a);
var b = "kahtik"
var c='pqr'
function test(){
    var x= 'xyz'
    console.log(x);
    console.log(a,b,c);
}
test();
 console.log(x);

 function test2(){
    var x1='asa';
    console.log(x);   //x is not define
    console.log(x1)
    console.log(a,b,c);
 }
 test2();
 //for function test2()  x is not define so that us ke bad wala code bhi error dega 
*/

/* ****************************************************** updating values **********************************
var a=10;
function sk(){
    a=20;
    console.log(a);//20
}
console.log(a);//10
sk();           
console.log(a); //20 due afer calling function value of a=20 get updated  so it gives 20
*/



/*************************************************function :- parameter *****************************************
function printNameAndRole(name, role){
    console.log(name+' is name and  roll number is '+role);
}
printNameAndRole('salman',3)

function printsirNameAndRole(name, role){
    name='khatik'                                          // name declare befor console so output get kahtik even u passed diff name  
    console.log(name+' is name and  roll number is '+role);
   
}
printsirNameAndRole('salman',3)
*/



/******************************************first class function*************************************************
//first class function are first class citizen
// in language function are first class function when u do following
//   1. when u assin a function as varriable 
//   2. you can pass function as parameter to anather function
//   3. you can return function from function 
 var A= function(){
    
    console.log('salman');
 }
 function abc(fn){
    fn()
     console.log(fn);
 }

  abc(A);     // function A call by  abc so that fn get become function and output get salman
  */
//   Array.prototype.contains = function(val){
//     return this.some(string =>
//      JSON.stringify(string) === JSON.stringify(val));
// }
// Array.prototype.includesOneof = function(array){
//     for(let i=0;i<array.length;i++){
//         if(this.contains(array[i])){
//             return true;
//         }
//     }
//     return false;
// }

/*//////////////////////////////////LET VAR CONST ///////////////////////////////////////////
function myfunction(){
let x =10;
const q=50;
var b=20;
//  const z=599;
    {
        var y=20;
        let x=10;
        const z=30;
        console.log(x);
        console.log(y);
        console.log(q);
        console.log(b);
       
    }
    console.log(z);     //z is not define globally is liye error de raha 
    console.log(x);     //ye globally define hote hue bhi z ke waj se excute nai ho raha q ke pahle z ko console kiya h
    console.log(y);       //is liye niche sare code me error h
  
    console.log(q);
}
myfunction();
*/
/*
function myfun(){
    let a=10,b=30,c=50;
    console.log(a,b,c);
    console.log(a);
    console.log(b);
    console.log(c);
}
myfun();
*/



/*////////////////////////////HOISTING*////////////////////////////////////
/*
//case with var
// console.log(a);// undefine 
// var a =10;
// console.log(a);//10


//  case with let

// let x;
// console.log(x);// undefine 
//   x =10;
// console.log(x)//10


// console.log(k);// error can not access k before initialization
// let k =10;
// console.log(k);
// temporal dead zone
//u cant access let or  const variable till now you define or initialize it 

//case of const =>

// console.log(s);// error can not access k before initialization
//  const s=10;
// console.log(s)

*/


/*   function hoisting *//////////////////////////////////
// myfun(10)   // function hoisting
// function myfun(num){
//     console.log(num*10); 
//    }
//    myfun(5)

// function yu(num){
// console.log(num*12);
// }yu(5)


/*
console.log (a)    //undefine
console.log(newfun);//undifine
//  newfun(10);        // yaha par hum aise nai kr sakte q ke yaha par newfun is not function bcz its varriable

var a=10;
var newfun =function(num){
    console.log(num*10);
}
newfun(10);

console.log(a);
console.log(newfun);//whole function
*/


/*
fl();                //whole fuction gives undefine
var f ="salman"
var l = "khatik"
function fl(){
    console.log(f,l);
}
*/

// fl(4);

// function fl(num){
//     console.log(num*4);
// }


//  myfun(10)   // function hoisting
// function myfun(num){

//     console.log(num*10); 
//    }
//    myfun(7)




/*////////////////////////////////call back function*/////////////////////////////////////
 
/*
function outer(test1,test2){
    let a =10;
    let b =20;
    console.log(a+b);
    // here test1 and test2 function are call back function
    test1();
    console.log(' ');
    test2();

}

outer(myName,friend);

function myName(){
    console.log('salman');
    console.log('khatik');
}


function friend(){
    console.log('abhi');
    console.log('akash');
}

*/


/////////////////premitive Type //////////////////////////////////////////////////////////////////
/*
// number 
let a =10;

//string 
let name="salman"
let lname ='khatik'

//boolean 
let x=true;
let y=false;

//undefine
let un =undefined;

//null
let empty =null;

//Bigint
let big = 1000000000000000;

//symbol
let sy =Symbol('discription for symbol');
*/



//////////////////////////non premitive data////////////////////////////////////////

/*
// Arrays 
let arr=[1,2,3,45,85]

//object
let obj={
    name : 'abc',
    roll  : 4,
    male  : true,
}

*/


////////////////////////////conditionals statement/////////////////

/*
let  num =20;
if (num ===20){
    console.log(num); //20
}
console.log(num===10);//flase 
*/


/*
let num1='10';
let num2=20;
if(num1===num2){
    console.log('true');
}else{
    console.log('false');
}
*/



/*

//in this code each line is check and if is match is match the condition somewere then print output and go to next line

let person='instrucor';

if(person==='instructor'){
    console.log('person is instructor');
}
if(person==='instructor'){
    console.log('person is cordinator');
}
if(person==='instructor'){
    console.log('person is mentor');
}
*/


/*

// if condtion match print output and dont go to next line 

let person='instructor';

if(person==='instructor'){
    console.log('person is instructor');
}
else if(person==='instructor'){
    console.log('person is cordinator');
}
else if(person==='instructor'){
    console.log('person is mentor');
}else{
    console.log('condition not match');
}

*/
  


///////////////////////////*switch case *///////////////////////////
   
/*
let person = 'salman'
switch (person){
    case 'instructor':
        console.log('person is instrutor');
        break;
    case 'salman':
        console.log('person is salman');
        break; 
    case 'mentor':
        console.log('person is mentor');
        break;
    default:
        console.log('person is not match');
}
//  agar break nai used kiya to koi ek condition match hone ke bad sare console print honge 
*/




/* /////////////////////////////////           LECTURE 7       ( git, git-hub )                           *////////////////////////////////////////


// installed git
// git config --global user.name "salman305" 
// git config --global user.email "-------@gmail.com"


// create ur project
// go inside ur project 
// git init ====>(initial git in ur project ,its one time thing for perticular project)
// make changes 
// git add filename (or git add .)====> add all ur changes to staging
//  git commit --m "write ur msg here what u change in that"
// to see all your commit msg use git log
// to check out perticular thing u can check by command gitcheckout pest a number of which command u want to check.
// git checkout 56bbb4adaa51caf3b0ec368acfb635e61b74b291
// checkout se wapus aane ke liye(e) git checkout master




/* ////////////////////////////////////////     LECTURE 8 CLOSURE ///////////////////////////////////////////////////*/


// closure => function along with its lexical or parrent  scope forms closure

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.
/*
function calculater(){
    var  a=10;
    function mul(){
        console.log(a);
    }
    function add(){
        console.log(a);
    }
 mul();
 add()
}
calculater();
*/

/*
 function mulit(){
    var a=10;
     var  b=20;  // takes garbej collected bcz im not using the variable b 
    function printA(){
        console.log(a);
    }
   function printB(){
         console.log(b);
   }
   return printA
   
  
 }
 let result=mulit();
 console.log(result);
 result()

*/


 /*
 function mulit(){
    var a=10;
     var  b=20; 
     var a= a+b; 
    function printA(){
         a=a+b;
        console.log(a);     //50
    }

  printA();
 }
mulit();
*/


///////////////////////////////////          LECTURE 9             //////////

// assinment question=> closure in class-order count -js closure
/*let generateOrder = function (starting){
    var c =0;
     function count(){
        c = c+1;               //c=i+1
      console.log("Total order="+c)
      }
    
 return count
}
// end the code here as ns required

let result = generateOrder()
console.log(result)
result();
result()
result()*/

///////////////////////////arrays///////////////////////
// method to create Array
/*
let arr =[1,2,3,4]   //arr limitto add element  is 2^32-1
 console.log(arr);
let ans = arr.push(10); //push returns updated length
console.log(ans);    // it print length of array
console.log(arr);   //modify the main arr
console.log(arr[arr.length-1]);  // it gives last num which is push into arr.

arr.pop();
console.log(arr);
// pop method  removed the element from arr and it also returns the removed elements
let removed =arr.pop(); //pop returns last elemet which is pop
console.log(removed); // last element which is removerd is 4
console.log(arr);

// let arr1 = new Array(3)  //length =1
// arr1[0]=10;
// arr1[1]=20;
// arr1[2]=25
// console.log(arr1);
*/



///////////////////properties of arrays///////////////
/* 1.length 
  2. accesing the values in array using index
  3. prototype - here properties and method can be added for arrays 
  4. constructer creates an arrays 
*/



//////////////////////////////////////// lecture 10 /////////////////////
// let arr = [5,6,5,6,7]
// delete arr[2];   //empyt the place not deleted 
// console.log(arr); 
 
/*
//slice
let arr =[1,2,3,4,65,6,87]
let sliced =arr.slice(1,5)
let sliced1 =arr.slice(2) //slice from index 2
console.log(sliced); 
console.log(sliced1);  
console.log(arr); //it does not change orignal arr
*/



//splice
/*
let arr =[1,2,3,4,6,5,7,8]
arr.splice(2,2);
//1st param=> from index which is to be deleted 
//2nd param=>  how many element to be deletd
console.log(arr); //change orignal arr


let ans =arr.splice(2,2,56,100)   //after 3rd param add element at 2nd index
console.log(arr); 
console.log(ans); //its gives deleted elemnt
*/

/*
//Q. complit the sequence like [1,2,3,4,5,6,7,8,9,10,11]
let arr2=[5,8,12,11]
arr2.splice(0,0,1,2,3,4)
arr2.splice(5,0,6,7)
arr2.splice(8,1,9,10)
console.log(arr2)

*/
 
//////////////////////////////map function /////////////
// map returns newarr

/*
let arr = [3,5,4,94,584,9]
let newArr = arr.map(function(valuesInArr){
    return valuesInArr*5
})
console.log(newArr);
*/



/*
bt usuig normal function
let arr = [1,2,4,5]
let newarr = arr.map(function (el){
    return el*5  // el = all value in arr
})
console.log(newarr);
*/

/*
//by using arrow function 
let arr1 =[1,2,4,694,5]
let nw = arr1.map((value)=>value+5)
console.log(nw);
console.log(arr1); // it is not change orignal array
*/

/////////////////////////////////////////lec 11////////////////////////

// git hub



/////////////////////////////////////////////lec -12////////////////////////////////

// blank video


///////////////////////////////////////  lec --13   ///////////////////////////////
/*

/////////////////////////////////   MAP FUNCTION //////////////////
// Q.return values multiply bt its indexs
// output=[0, 2, 8, 15, 12]
let arr1 = [1,2,4,5,3]
let newArr1 = arr1.map(function(valuesInArr,indexOfArr){
    return valuesInArr*indexOfArr
})
console.log(newArr1);
*/

/*
let arr1 = [1,2,4,5,3]
let newArr1 = arr1.map(function(valuesInArr,indexOfArr,wholearr){
    return arr; //last argument in function print whole arr
})
console.log(newArr1);
*/


/*
let arr= [1,2,5,6]
function multi(value){
    return value*10
}
let ans =arr.map(multi)
console.log(ans)
*/

/////////////////////////  forEach  ////////////////////////
//   foreach doesn't  returns new arrays
/*
let arr1=[1,2,3,5,6]
arr1.forEach(function(values,index,wholearr){
  arr1[index]=values*10
    
})
console.log(arr1);
*/

/*
let arr1=[1,2,3,5,6]
let newArr =[];
arr1.forEach(function(v,i,a){
    newArr.push(arr1[i]*v)   //1*1 2*2 3*3 5*5 6 *6

})
console.log(newArr); // [ 1, 4, 9, 25, 36 ]
// console.log(arr1);

*/

////////////////////////// filter method ///////////////////////////
/*
//////////filter 
let arr= [2011,2051,2022,2003,1999,1857];

let a=arr.filter(function(el){
    return el>2010;
})
console.log(a);

// by arrow function 
 let b= arr.filter((el)=>{
    return el>2000
})
 console.log(b);
*/

/*
// by arrow function 


let arr= [2011,2051,2022,2003,1999,1857];
let c =arr.map((el)=>el<2000) //if i uesd map it gives true or false 
console.log(c);
*/

/////////////////////////find method ////////////////////////////
/*
let qualify = [15,17,23,67,34]

let element =qualify.find(function(age){
    return age>18
})
console.log(element); // 23 // it gives very first value which is greater than 18 i.e 23
*/
/////////////////// findIndex method ///////////////////////////////////
/*
let qualify = [15,1,23,67,34]

let element =qualify.findIndex(function(age){
    return age>18
})
console.log(element);//2
*/
 ///////////////////////////////////reduced method //////////////////
/*
 const arr =[4,6,8,3,15];
const output=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max
},0)                   //initially max=0
console.log(output);
*/



/////////////////////////// spread opreator ///////////////

/*
let arr1 =[1,2,3,4,9]
console.log(...arr1); // it spred values 1 2 3 4 9
let arr2=[10,11,12,13]
arr1=[...arr1,...arr2]
console.log(arr1);

*/

/*
//  question print even number from 2 to 16 in an array
// output = [2,4,6,8,10,12,14,16]

let arr = [4,6,8,10,12]   //given
//  ans=>
let even = [2,...arr,14,16]
console.log(even);
*/


/*
let car ={
    name :"tata",
    wheel:4,
    engine:"4stroke",
    alive:false
}

let person ={
    n :"sk",
    wh:2,
    en:false,
    al:true
}
//console.log(...car); //we cant spred the object it gives type error

let carPerson={...car, ...person,teachig:8}
console.log(carPerson,);
*/

////////////////////////////// lec => 14 js constructor ////////////////

// whys to create objects=>
// 1. using object literals 
// 2. using function constructor
// 3. object.create()
// 4. classes

/*
// function constructor==>
 function person (name,age, address){
      this.name =name;
      this.age =age;
      this.address=address;
      this.isPerson=true;
      this.details='details are'+" "+age;
      this.city=function(){
        console.log("city is "+" "+address);
      }
 }
 let abc =new person('salman',20,'nasik');
 console.log(abc);
 console.log(abc.address);
 console.log(abc.details);
 console.log(abc.isPerson);
 abc.city();
 console.log(abc.city);

let pqr =new person('khatik',125,"mumbai")
console.log(pqr);
console.log(pqr.address);
console.log(abc.details);
pqr.city();
console.log(pqr.city);

//role of new keyword=>

// 1. create an empty object=> {}
// 2. refers the this to create object=> {everthing that in person function}
// 3. return this => return to variable like abc

let notusedNewkeyword =person('rani',20,'pune')
console.log(notusedNewkeyword); //undefined

*/


// value and reference types
/*
// Value type:-
let a=10;
let b=10;
console.log(a===b);
b=20;
console.log(a===b);
let c=a;
console.log(c);
console.log(a);
 a=100;
 console.log(a);
 console.log(c);

let x='salman'
let y=x;
console.log(x);
console.log(y);
x='khatik'
console.log(x);
y=x; //to update y value
console.log(y);
*/


/*
//reference type:=
let arr1=[1,2,3,4]
let arr2=[1,2,3,4]
console.log(arr1===arr2);//flase

//bcz:- 
//EC
//arr1=memory address ref #aa100
//arr2=memory address ref #4654 
// it compre add which not equals

let arr3=arr1;
console.log(arr3===arr1);//true

//bcz:- 
//EC
//arr3=memory address ref same memory adderess
//arr1=memory address ref same memory adderess 
arr3=[1,2,3,4]
 console.log(arr3===arr1);//false
 */


 /////////////////////////////// LEC -15 =>  js abstraction /////////////////
  
 
 /*                   //reference type:=
 let arrOne=[3,4,5]
  let arrTwo=[3,4,5]
  let arrThree=arrOne

  //memory address
 // #10001-->[3,4,5]
 // #10002-->[3,4,5]

  //mem creation 
  //arrOne =#10001
  //arrTwo =#10002
  //arrThree=#10001
  console.log(arrOne ===arrTwo);  //false
  console.log(arrOne ===arrThree); //true
  console.log(arrOne);
  arrOne=[1,2,3]         // create new memory 
  console.log(arrOne ===arrThree); //false

  console.log(arrOne);
  console.log(arrTwo);
  console.log(arrThree);

  arrThree.push(100);
  console.log(arrOne);  //100 push in both arrONE AND arrThree bcz 
  console.log(arrThree); //  both point to same memory addresss
*/


////////////////////////  Abstraction  ////////////////////////////
/*
function person (name, yearOfBirth){
    this.nameofperson=name;
    this.yearOfBirthofperson=yearOfBirth
//Abstraction-->
    let CalculatAge = function(){
        return 2022 - yearOfBirth
    }
    this.age =CalculatAge()

    let clculateSum=function(){
        return 10+50+yearOfBirth
    }
    this.sum=clculateSum()
//<--Abstraction
}

let salman =new person('salman',1995);
console.log(salman.nameofperson);
console.log(salman.CalculateAge);
console.log(salman.yearOfBirthofperson);
console.log(salman.age);

let Hamza =new person('khatik',2000);
console.log(Hamza.nameofperson);
console.log(Hamza.CalculateAge);
console.log(Hamza.yearOfBirthofperson);
console.log(Hamza.age);
console.log(Hamza.sum);
*/

/*
function person2 (name){
    this.fname =name
//Abstraction-->
    let CalculatAge = function(){
        return 2022 - 2000
    }
    this.age =CalculatAge()
 //<--Abstraction
}
let arib = new person2("shaikh");
console.log(arib.age);
console.log(arib.fname);
*/

////////////////////////// MathObject //////////////////
/*
console.log(Math.PI);

console.log(Math.SQRT2);

console.log(Math.round(1.4));// round 1.4=1 & 1.6=2

console.log(Math.floor(4.6));// below value 4

console.log(Math.ceil(4.1)); //above value 5

console.log(Math.random());//randamly generate number between 0 to 1
console.log(Math.random());//randamly generate number between 0 to 1
console.log(Math.random());//randamly generate number between 0 to 1
console.log(Math.random()*50);//randamly generate number between 0 to 50
// used of math.random used for generate OTP
console.log(Math.ceil(Math.random()*1000000));
console.log(Math.floor(Math.random()*100000));

console.log(Math.trunc(8.7));//it removes fraction wala part

console.log(Math.min(4,5,6,8,1,100,10));//1
let arr1 = [15,25,4,100,65]
console.log(Math.min(...arr1));//4

console.log(Math.max(4,5,6,8,1,100,10));//100
let arr = [15,25,4,5000,65]
console.log(Math.max(...arr));//5000

console.log(Math.pow(15,2));//225
*/

///////////////////////////////////// lec =>16 js string js date//////////////////////////////
/* 
let statement ='this is salman'
 let newStatment =statement.replace("this",'he')
 console.log(newStatment);
  */

 /*
 let username="sAlmAN"
 let newUsername=username.toUpperCase();
 console.log(newUsername);
 */
 
 /*
 let statement ='tHiS is salman'
 let newUsername=statement.toUpperCase();
 let person =newUsername.replace("THIS",'he')
 console.log(person);
 */


 /*
  // trimmed
 let str = "        hi??????????"
 console.log(str);
 let trimmed=str.trim();
 console.log(trimmed);/// rerove sapace
*/

/*
// explore search
*/


//Date 
// let todaysDate= new Date();
// console.log(todaysDate);

// let paasedDate = new Date(2020,6,30,11,30,45,20) // year,month(0 to 11),date,hr,min,sec,milisec
// console.log(paasedDate);
// let paasedDate1 = new Date(2020,6,30)
// console.log(paasedDate1);



// //it count milisec from 1 jan 1970
// let milisec =new Date(50000000);
// console.log(milisec);

// function add(){
//     let a=20;
//     a=10+;
//     console.log(a);
// }



//////////////////////////////////// lec =>17 js prototype///////////////////

// prototype:=>.
/*
let arr=[];
arr.push(1);
console.log(arr);
// console.log(Array.prototype);

Array.prototype.mypush="salman"
console.log(arr.mypush);
*/
/*
let obj ={
    name : "salman",
    id : 2
}

let obj2={
   school :"ns"
}
*/

/*
function Person(name,role){
    this.name=name,
    this.role=role;
    this.printDetails=function(){
        console.log(("details are " +this.name +" "+this.role));
    }
    // this.CalculateSalary=function(){
    //         if (this.role=='admin'){
    //             return 1000
    //         }
    //         if (this.role=='user'){
    //             return 2000
    //         }
    //     }
}
Person.prototype.CalculateSalary=function(){
    if (this.role=='admin'){
        return 1000
    }
    if (this.role=='user'){
        return 2000
    }
}

// Object.prototype.CalculateSalary=function(){
//     if (this.role=='admin'){
//         return 10
//     }
//     if (this.role=='user'){
//         return 20
//     }
// }


let salman =new Person('salman','admin');
console.log(salman);
console.log(salman.name);
salman.printDetails()
console.log(salman.CalculateSalary());

let khatik =new Person('khatik','user');
console.log(khatik);
console.log(khatik.name);
khatik.printDetails()
console.log(khatik.CalculateSalary());
*/

/*
// Employee se CalculateSalary ko acces krna h
function Person(name){
    this.name=name,
  
    this.printDetails=function(){
        console.log(("details are " +this.name ));
    }
    // this.CalculateSalary=function(){
    //         if (this.role=='admin'){
    //             return 1000
    //         }
    //         if (this.role=='user'){
    //             return 2000
    //         }
    //     }
}
Person.prototype.CalculateSalary=function(){
    if (this.role=='admin'){
        return 1000
    }
    if (this.role=='user'){
        return 2000
    }
}
 
Person.prototype.someProperty="somthing"
// Object.prototype.CalculateSalary=function(){
//     if (this.role=='admin'){
//         return 10
//     }
//     if (this.role=='user'){
//         return 20
//     }
// }


let salman =new Person('salman');
console.log(salman.someProperty);
console.log(salman.CalculateSalary());

let khatik =new Person('khatik');
console.log(khatik);
console.log(khatik.CalculateSalary());

function Employee(role){
this.role=role
}

// Employee.prototype.someProperty="from employee prototype"//by using this we overwrite the employee proprty
Employee.prototype=Object.create(Person.prototype)// by usuing this we acees the person property
let akash = new Employee('student')
console.log(akash.role);
console.log(akash.someProperty);

*/
/////////////////////////////////////////// lec =>18  //////////////////////////////////////


// let str = "I am a robot";
// let str_new = str.split(' ');
// let c=str_new.length-1;

// let p=setInterval(() => {
    
//     if(c<0){
//       clearInterval(p);  
//       return;
//     }
//     console.log(str_new[c--])
// ??},1000);

function vowels(){
    setTimeout(()=>{
        console.log("robot");
        setTimeout(()=>{
            console.log("a");
            setTimeout(()=>{
                console.log("am");
                setTimeout(()=>{
                    console.log("i");
                    setTimeout(()=>{
                        console.log("d");
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}
vowels()
