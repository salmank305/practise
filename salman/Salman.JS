/*////////////////////////   FUNCTION ////////////////////
// invoking
let myFunction = (arg1, arg2) => {
    console.log(arg1+arg2);
    }
    myFunction(50,10)
  

  // function expression return keward
let x = function(x, y) {
    return x / y;
 }
let a=x(5,5)
console.log(a);
*/


/*
function ab(s,d){
    return s*d
}
let ans=ab(2,2)
console.log(ans);

/////////

function aa(){
    return 7*9
}
let ans2=aa()
console.log(ans2);
*/

/*
function ww(jk,hi){
    console.log(jk*hi);
    console.log(4);
}
ww(5,5) 
*/  


/*
let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log(x);
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
*/

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



// let num1 =10;
// let num2 =10;
// console.log(num1===num2);


// let a1=[1,2,3,4,5];
// let a2=[1,2,3,4,5]
// console.log(a1===a2);



//print vowel after 2sec

/*
function printv(alpha,time){
    setTimeout(()=>{
        console.log(alpha);
        

    },time)
}
printv("a",1000);
printv("e",1000);
printv("i",1000);
printv("o",1000);
printv("u",1000);

*/

/*
// Q.  print vowel after 2sec
setTimeout(function(){
    let arr=["a","e","i","o","u"]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
},2000)
*/

//callback hell

//home work

// a-5sec
// e -4
// i -3
// o-2
// u-1
/*by normal function
setTimeout(function () {
    console.log("a");
    setTimeout(function () {
        console.log("e");
        setTimeout(function () {
            console.log("i");
            setTimeout(function () {
                console.log("o");
                setTimeout(function () {
                    console.log("u");
                }, 1000);
            }, 2000);
        }, 3000);
    }, 4000);
}, 5000);
*/
/* //by arrow function
function vowels(){
    setTimeout(()=>{
        console.log("a");
        setTimeout(()=>{
            console.log("e");
            setTimeout(()=>{
                console.log("i");
                setTimeout(()=>{
                    console.log("o");
                    setTimeout(()=>{
                        console.log("u");
                    },1000)
                },2000)
            },3000)
        },4000)
    },5000)
}
vowels()
*/


// promises
//  function printVowel(char ,timOut){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(char);
//         resolve();
//     },timOut)
//   })
//  }
//  printVowel('a',5000)
//  .then( printVowel('e',4000))



// hoist

// function codeHoist(){
// a = 10;
//     let b = 50;
// }
// codeHoist();
 
// console.log(a); // 10
// console.log(b);

//let example(global)
// console.log(b);
// let b='Mukul Latiyan'; 


// var code (global)
// console.log(a); // undefined
// var a = 'Mukul Latiyan';
// console.log("fsffs")
// let a;
// console.log(a);
// let a=100;

// let a;
// console.log(a);
/*
printVowel("A", 5000, ()=>{
    printVowel("E", 4000, ()=>{
        printVowel("I", 3000, ()=>{
            printVowel("O", 2000, ()=>{
                printVowel("U", 1000, () =>{ 
                    console.log("END")
                })
            })
        })
    })
})
*/

// api feaching//


// async function fetching(){
//     let response = await fetch("https://reqres.in/api/users?page=2");
//     let data = await response.json();
//     console.log(data.data);
// }


// fetching();


// Memoization: Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
// function salutation() {
//     let name = 'salman';
  
//     function greet() {
//         console.log(`Hello ${name}!`);
//     }
//     return greet;
// }
  
// let wish = salutation();
// wish()




// var a=10; //undefine 
// var b=20; //undefine 
// function salman(){
//     console.log(a);

// }
// salman();


// write a class constructor to create objects

// object formst {name:xyz, getname(): function}

// class bike {
//     constructor(brand){
        
//     }
// }
// { let a=1
//     let b=true
//     console.log(a==b)
//     console.log(a===b)
//     }






// function checkCanIVote(time,data) {
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(data>=18){ 
//             // console.log("You can vote");
//         resolve("You can vote");
//         }else{
//             // console.log(data);
//             reject('You can not vote')
//         }
//     },time)
//   })
// }
// checkCanIVote(200, 70). then(data=>{
// console. log(data) // prints 'You can vote'
// }).catch((err)=>{
// console.log(err) // does not do anything
// })
// checkCanIVote(200, 16). then(data=>{
// console. log(data) // does not do anything
// }).catch((err)=>{
// console.log(err) // prints 'You can not vote'
//  })



// function printName(a,b){
//     console.log(this.fn+" "+this.ln,a,b);
// }
// let obj={
//     fn:"salman",
//     ln:"khatik",
    
// }
// printName.call(obj,10,20)

// Function.prototype.mycall=12
// console.log(printName.prototype);







// function foo(){
//     let x=y=0;  
//     x++;  
//     y++;
//     return x;
// }
// console.log(foo(),typeof x,typeof y);



//  console.log(1 && 0 === 1 ||0);



//  function fo(){
//     return 
// {
//     message:"hello..."
// }
// }
// console.log(fo());



// let arr = [1,2,3,4,5]
//  function printArr(arr ,timOut){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//         for( i=0;i<arr.length;i++)
//         console.log(arr[i]);
//         resolve();
//     },timOut)
//   })
//  }
//  printArr(arr,2000).then


//  let arr = [1,2,3,4,5]
//  function printArr(arr ,timOut){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log(arr);
//         resolve();
//     },timOut)
//   })
//  }
//  printArr(arr,5000).then


// Arrow function
// let sumOfTwoNumbers = (a, b) => a + b;
// console.log(10, 20); // Output 30

// const arr = [1,2,3,4,45,5,6,6,4,5,46];
// let arr2 = [...arr,8,6];
// console.log(arr2);
// console.log(arr);


// function structure(a,b,...c){   // rest parameter / rest operator
//     console.log(a,b,c);
// }
// structure(1,2,3,4,4,5,6,7,"salman");


// function rest(a,b,...c){
//     return [a,b,c];           
// }
// let ans = rest(1,2,3,4,65,6,"salman")
// console.log(ans);



// function vowels(){
//     setTimeout(()=>{
//         console.log("a");
//         setTimeout(()=>{
//             console.log("e");
//             setTimeout(()=>{
//                 console.log("i");
//                 setTimeout(()=>{
//                     console.log("o");
//                     setTimeout(()=>{
//                         console.log("u");
//                     },1000)
//                 },2000)
//             },3000)
//         },4000)
//     },5000)
// }
// vowels()



// call back hell
// function printLetter(){
//     setTimeout(()=>{
//         console.log('a');
//         setTimeout(()=>{
//             console.log('b');
//             setTimeout(()=>{
//                 console.log('c');
                
//             })
            
//         })

//     })
// }
// printLetter()


/*
let str=10;
let display = str;

function fun(a){
    str= str+a;
    display = str;  

}
fun(5)
console.log(display);
*/

