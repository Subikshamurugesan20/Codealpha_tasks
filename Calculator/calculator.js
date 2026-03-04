let display = document.getElementById("display");

function press(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}

}

/* Keyboard Support */

document.addEventListener("keydown", function(e){

let key = e.key;

if(!isNaN(key) || "+-*/.".includes(key)){
press(key);
}

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
deleteLast();
}

if(key === "Escape"){
clearDisplay();
}

});