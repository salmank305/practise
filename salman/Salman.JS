
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

