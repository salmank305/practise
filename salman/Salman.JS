
// to many diff thing we cane write the same same code 
 /////////////////////////////////////////////////////filter method//////////////////////////////////////
/*
const arr =[5,2,3,54]

//1
function oddnum(x){
    return x%2;
}
const output=arr.filter(oddnum);
console.log(output);




//2
const output=arr.filter(
    function oddnum(x){
        return x%2;
    });
console.log(output);



//3
const output=arr.filter((x)=>{
    return x%2;
});
console.log(output);


//4
const output=arr.filter((x)=> x%2);
console.log(output);
*/

////////////////////////////////////////////////       reduced method        //////////////////////////////////


// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
        
//     }
//     console.log(sum);
   
// }
// findSum([1,2,3,4,5])

/*
const arr=[1,2,3,4,5];
const output = arr.reduce(function(accumulater,current){
    accumulater = accumulater+current;
    return accumulater;
},0);                 //initially sum=0 it is also called accumalater 
 console.log(output);
//reduce =itrate each an evevry element of arr.
// current = represent the value in inside the reduced function arry like arr[i].
// accumulater = it initial value like sum =0;
*/
  
/*
// Q .find max value in array

const arr =[4,6,8,3];
const output=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max
},0)                   //initially max=0
console.log(output);
*/

/*
// Q. find out the list of full name 
const users =[
    {fname:"salman", lname:"khatik", roll:541},
    {fname:"akash", lname:"gupta", roll:599},
    {fname:"abhi", lname:"raj", roll:500},
    {fname:"govind", lname:"hemram", roll:5410}
];

const output= users.map((x)=>x.fname + " "+ x.lname)
console.log(output);
*/


/*
// Q.find how many people has same  age
//output =[5:2, 10:1, 7:1]

const users =[
    {fname:"salman", lname:"khatik", age:5},
    {fname:"akash", lname:"gupta", age:5},
    {fname:"abhi", lname:"raj", age:10},
    {fname:"govind", lname:"hemram", age:7}
];

const output=users.reduce(function(acc,curr){
 
    if(acc[curr.age]){
        acc[curr.age]++;

    }else{
        acc[curr.age]=1;
    }
    return acc;
} , {});

console.log(output);
*/

/*
//  Q find out  1st name of person who's age is less than 10
// output=["akash","govind"]
const users =[
    {fname:"salman", lname:"khatik", age:453},
    {fname:"akash", lname:"gupta", age:5},
    {fname:"abhi", lname:"raj", age:11},
    {fname:"govind", lname:"hemram", age:7}
];

const output =users.filter(x =>x.age<10).map((x)=>x.fname)
console.log(output);
*/


/*
//  Q find out  1st name of person by using reduced method  who's age is less than 10
// output=["akash","govind"]
const users =[
    {fname:"salman", lname:"khatik", age:453},
    {fname:"akash", lname:"gupta", age:5},
    {fname:"abhi", lname:"raj", age:11},
    {fname:"govind", lname:"hemram", age:7}
];

const output = users.reduce((acc,curr)=>{
    if(curr.age<10){
        acc.push(curr.fname)   ;   
    }
    return acc;

},[]);

console.log(output);

*/
  
// let arr = [ {name: 'John', id: 123, marks : 98 ,result:"n"},
//           {name: 'Baba', id: 101, marks : 23, result:"n" },
//           {name: 'yaga', id: 200, marks : 45 ,result:"n" },
//           {name: 'Wick', id: 115, marks : 75 ,result:"n"} ]



//           let output = arr.map((x)=>x.marks+15);

//           console.log(output);
//           let k = output.

/*
let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Raj",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let idsArray = employees.map(e => e.name)
console.log(idsArray) //[11,2131,3012]
*/

/*
let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let salaryAbove40K = employees.filter(employee => employee.salary > 40000)
console.log(salaryAbove40K) //Array will contain objects whose salary is greater than 40000
*/


/*
let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]
let employeeWithHighest = employees.reduce((a,employee)=> (a.salary || 0 ) > employee.salary ? a  : employee, {} )
console.log(employeeWithHighest)
*/


//  spred operator is help to destructure the structure element of non primitive data type like  array and object so that you acess its elements individaully
// when u want to access individual values of non primitive data type =spread oprator
// let arr =[1,2,3,{a:5},{id:4}]
// console.log(arr.indexOf({a:5}));
 
// let car = ["a","b","c","d"];
// // car.slice(1,3)
// console.log(car.splice(1,0),car);

// set TimeRanges=>
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
// }
// x()

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

// NAN property
// console.log(isNaN("12"));


// console.log(isNaN('Hello')); 



// imidiate invoke

// (function(){
//     console.log("salman");
// })();


//  template literals,
// let a="salman"
// let b=10;
// console.log(`${a} ${b}`);


// arrow

// let hello = () => {
// console.log("Hello World!");
// }
// hello();

// "use strict"
//  a=10;
// console.log(a);



// let str = "Newton"
// let  temp = str.split("").reverse().join("");
// console.log(temp);



// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).


// function mulit(){
//     var a=10;
   
//     function printA(){
      
//         console.log(a);     //50
//     }
//     function printB(){
//         let b=20
//         console.log(b);
//     }

//   printA();
//   printB()
//  }
// mulit();


// const a=[1,1,2,3,3,3,4,5]


// let b=[];
// for(let i=0;i<a.length;i++){
//     if (b.includes(a[i]))
//     continue;
//     b.push(a[i]);
   
// }
// console.log(b);

// let  arr = [40, 100, 1, 5, 25, 10];
// arr.sort((a, b)=> a-b);
// console.log(arr);


// default 
// function av(a,b){
  
// let c=a*b

// }

// av(12,12)
// console.log(c);

/*
const employees = [
    {id:1, name:"John", age:23, salary:24000, dept:"HR"},
    {id:2, name:"John", age:30, salary:20000, dept:"IT"},
    {id:3, name:"John", age:25, salary:22000, dept:"Sales"},
    {id:4, name:"John", age:22, salary:25000, dept:"IT"},
    {id:5, name:"John", age:24, salary:27000, dept:"IT"},
    {id:6, name:"John", age:22, salary:28000, dept:"HR"},
]

// Given employees data, raise the salary of employees belong to IT dept 
// and aged less than 25 to 40000. Calculate the total salary amount of those employees
//  let result =employees.filter(value=>value.age<25,value.dept="IT")
//  console.log(result);
*/


////////////////////////////////////////////////////////////////lec 9 ///////////////////////////////////////////

/*
// calculater function 

const cal = {

    num: 0,
    
    add : function(a) {
    
    this.num += a
    
    return this
    
    },
    
    subtract : function(a) {
    
    this.num -= a
    
    return this
    
    }
    
    };
    
    console.log(cal.add(5).subtract(2).add(4));
    
    console.log(cal.num)
*/

/*

//////////im not robort assinment //////////////////////

    let image = [];

for(let i = 0;i<5;i++)

{

let t = document.createElement("IMG");

t.setAttribute("data-ns-test",`img${i+1}`);

t.width = 100;

t.height = 100;

t.onclick = (e)=>captchaClick(e);

t.src = `images/${i+1}.jpg`;

image.push(t);

}

let temp = Math.floor(Math.random()*5);

let t = document.createElement("IMG");

t.setAttribute("data-ns-test",`img${temp+1}`);

t.width = 100;

t.height = 100;

t.onclick = (e)=>captchaClick(e);

t.src = `images/${temp+1}.jpg`;

image.push(t);

image.sort(() => Math.random() - 0.5);

for(let i = 0;i<6;i++)

{

document.getElementById("main").appendChild(image[i]);

}

let captcha = [];

function clearCaptcha()

{

// console.log("Clearing captcha");

for(let i = 0;i<6;i++)

{

image[i].onclick = (e)=>captchaClick(e);

}

captcha = [];

try{

document.getElementById("para").remove();

}

catch(e){

}

try{

document.getElementById("btn").remove();

}

catch(e){

}

try{

document.getElementById("reset").remove();

}

catch(e){

}

}

function captchaClick(e)

{

console.log(e.target.attributes["data-ns-test"].nodeValue)

captcha.push(e.target.attributes["data-ns-test"].nodeValue);

e.target.onclick = ()=>{};

// console.log(captcha);

if(captcha.length === 1)

{

let p = document.createElement("button");

p.id = "reset";

p.innerHTML = "Reset";

p.onclick = () => {

clearCaptcha();

}

document.getElementById("main").appendChild(p);

}

if(captcha.length === 2)

{

let t = document.createElement("button");

t.id = "btn";

t.innerHTML = "Verify";

t.onclick = () => {

captchaVerify();

}

document.getElementById("main").appendChild(t);

}

else if(captcha.length > 2)

{

try{

document.getElementById("btn").remove();

}

catch(e){

}

}

try{

document.getElementById("para").remove();

}

catch(e){

}

}

function captchaVerify()

{

if(captcha.length === 2 && captcha[0] === captcha[1])

{

let t = document.createElement("P");

t.innerHTML="You are a human. Congratulations!";

t.id="para";

document.getElementById("main").appendChild(t);

}

else

{

let t = document.createElement("P");

t.innerHTML="We can't verify you as a human. You selected the non-identical tiles.";

t.id="para";

document.getElementById("main").appendChild(t);

}

document.getElementById("btn").remove();

}
*/



// var a=10;
// function test1(){
// var x=1
// console.log("salman");
// }
// var b=10;
// function test2(){
// var x=1
// console.log("dkma");
// }
// var c=10
// test2();
// test1();



