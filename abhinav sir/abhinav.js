


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
calculater()