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

    if (input === undefined || input === true || input === false || input === null || input === ""){
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
      }
    }
