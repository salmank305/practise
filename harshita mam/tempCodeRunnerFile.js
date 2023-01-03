let a = 20;

function outer(){
    function inner (){
        console.log(a);
    }
    inner()
}

outer()