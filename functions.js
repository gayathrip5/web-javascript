console.log("this is javascriptfile");
let name0 = "harry";
let name1 = "shiny";
let name2 = "fairy";
let name3 = "kay";

console.log(name0 + " is a good guide");
console.log(name1 + " is a good guide");
console.log(name2 + " is a good guide");
console.log(name3 + " is a good guide");
//for repeating some actions we use functions to save time
//functions
let greetText = "good morning,have a joyfulday";
function greet(name, greetText = "wishes from js") {// passed as a defualt value
    console.log(name + " is a good human");
    console.log(greetText + " " + name);
}

//functioncall
greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3); //default greetText will be added 

//returning values 
function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal);
