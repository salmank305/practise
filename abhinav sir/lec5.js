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
fl(); //whole fuction gives undefine
var f ="salman"
var l = "khatik"
function fl(){
    console.log(f,l);
}

*/

// var f ="salman"
// var l = "khatik"
// function fl(){
//     console.log(f,l);
// }fl();


//  myfun(10)   // function hoisting
// function myfun(num){

//     console.log(num*10); 
//    }
//    myfun(7)

/*//////////////////////////Higher order function*////////////////////////////////////
  // higher order function are function whre we can pass function as arguments 
    // or we can return function from a function
/*
   outer is higher order function
    function outer (oneFunction){
        let a = 10;
        let b=20;
        console.log(a+b);
        oneFunction();
    }

    outer(printAdd);
    function printAdd(){
        console.log('Address');
        console.log('city nasik');
        console.log('pin 422101');
        console.log('state MH');
    }
*/


/*
    function outer (oneFunction){
        let a = 10;
        let b=20;
        console.log(a+b);
        oneFunction();
    }

    outer(printAdd);
    var printAdd=function (){
        console.log('Address');
        console.log('city nasik');
        console.log('pin 422101');
        console.log('state MH');
    }
*/


/* return statment */
// function printdetail(){
//     console.log('salman');
//     console.log('khatik');
//     return;                 // when u used return it simply return from the code not excute the code after return statment
//     console.log('name');
// }
// printdetail()


// function printdetail(){
//     console.log('salman');
//     console.log('khatik');
//     return 10;                 
 
// }
// var output = printdetail(); // output is salman khatik
//  console.log(output); // now output is salman khatik 10


/*
 function printName(){
    console.log('name is salman');
    return function(){
        console.log('address nasik');
        
    }
 }
//  var add=printName();        //print name 
//  console.log(add);               // print whole function 
//   add();                // print value

  printName()(); // line 120,121,122 by single line called double invoke
  */