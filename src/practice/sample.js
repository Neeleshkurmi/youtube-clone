// function hello(fn){
//     console.log("Hello");
//     fn();
// }

function fn(){
    console.log("Function called");
}

// 

const hello = (fn) => {console.log("Hello");fn()} 

hello(fn);