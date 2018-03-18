console.log("Hello");
const pi = 3.1444; //constant
var number1 = 20;   //int
var number2 = 20.50;    //decimal
var txt = "Hello SE";   //string
var arry = Array("SE","IT","CS");   //array
var obj = {"fname":"BEW","lname":"NAR.SA"};     //object

console.log('pi : ' + pi);
console.log('number1 : ' + number1);
console.log('number2 : ' + number2);
console.log('txt : ' + txt);
console.log('arry : ' + arry);
console.log(obj);

arry.forEach(element,i => {
    console.log(element);
});


arry.forEach(function(element,index) {
    console.log("arr["+index+"] :"+element);
    
});

