// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    // if (input === "Alex") {
    // return "Hello, Alex!";
    // } else if (input === "Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!"
    // }
    // if (input === "Jane" || "Alex" || "Pat")


    // if (input === undefined) {
    //     return "Hello, World!";
    // } else  if (input === true) {
    //     return "Hello, World!";
    // } else if (input === false) {
    //     return "Hello, World!";
    // } else {

    if (input === undefined || typeof input === "boolean" || input === null || input === ""){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
      }
    }
//
// function isFive(input) {
//     if (input === undefined) {
//         return false
//     } else if (input === 5 || input.toLowerCase() === "five"|| imput === "5" || input !== undefined) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isEven(input){
return true;
}

