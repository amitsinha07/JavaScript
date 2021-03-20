// 1. Ways to print in JavaScript

/*console.log("Hello World");
alert("Its me");
document.write("This is my Document.")*/


// 2. JavaScript Console API

/*console.log("Hello World!!");
console.warn("This is a warning");
console.error("This an error");*/


// 3. JavaScript Variables

/*var num1 = 34;
var num2 = 26;
console.log(num1 + num2);*/

// 4. Data types in JavaScript

// Numbers

/*var num1 = 455;
var num2 = 56.7;*/

// Strings
// var str1 = "My name is Amit";

// Object 

/*var Student = {
    Name: "Amit",
    age: 20,
    Gender: "Male"
}

console.log(Student)*/

// Booleans

/*var a = true;
var b = false;
console.log(b);*/

// var und = undefined;
// console.log(und);


/* At a very high level, there are two types of data types in JavaScript
1. Primitive
2. Non Primitive */

// var arr = [1, 2, "rahul", 4, 5];
// console.log(arr);


//////////////////////////////////////////
//////// Operators in JavaScript /////////
//////////////////////////////////////////

// Arithmetic Operators : +, -, *, /, %
// Assignment Operators : =, -=, +=, /=
// Comparision Operators: ==, <=, >=, !=, >, <
// Logical operators: &&, ||, !



/////////////////////////////////////////
///////// Function in JavaScript ////////
/////////////////////////////////////////

/*function avg(a, b){
    c = (a + b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);*/



///////////////////////////////////////////
///////// Conditionals in JavaScript //////
///////////////////////////////////////////

// var age = prompt("Enter you age: ");
// if(age < 18){
//     console.log("You are a kid");
// }else if(age >= 18 && age < 40) {
//     console.log("You are young");
// } else {
//     console.log("You are old");
// }



////////////////////////////////////////////
////////// Loops in JavaScript /////////////
////////////////////////////////////////////

/////////////// For Loop //////////////
// var arr = [1,2,3,4,5,6];
// // console.log(arr);
//  for(var i=0; i < arr.length; i++){
//      if(arr[i] == 2){
//          //break;
//          continue;
//      }
//      console.log(arr[i]);
// }


///////// ForEach Loop ///////////////

// arr.forEach(function(element){
//     console.log(element);
// })


/////////// While Loop ///////////////

// i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

/////////// Do While Loop ////////////

// var i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// } while(i<arr.length)




///////////////////////////////////////////
//////////////// Array Methods ////////////
///////////////////////////////////////////

// let myArr = ["Fan", "Camera", 34, null, true];

// console.log(myArr.length);
// myArr.pop();
// myArr.push("Amit");
// myArr.shift();
// myArr.unshift("Amit");
// arr = myArr.toString();

// console.log(myArr.sort());



///////////////////////////////////////////
/////// String Methods in Javascript //////
///////////////////////////////////////////

// let str = "Abhay is a good boy";
// // console.log(str.length);
// // console.log(str.indexOf("good"));
// // console.log(str.lastIndexOf("a"));

// console.log(str.slice(0,5));
// arr = str.replace("Abhay","Rahul");
// console.log(arr);




////////////////////////////////////////////
////////// Date in JavaScript //////////////
////////////////////////////////////////////

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// var date = "22/02/2021";

// Date_format(date);

// function Date_format(date){

//     var dd = date.slice(0,2);
//     var mm = date.slice(3,5);
//     var yy = date.slice(7,10);
//     var mmddyy = mm + "/" + dd + "/" + yy;
//     return mmddyy;
// }


//////////////////////////////////////////////
//////////// Sets in JavaScript //////////////
//////////////////////////////////////////////

// Set stores unique values

// const mySet = new Set();

// mySet.add('This');
// mySet.add('my name');
// mySet.add('this');
// mySet.add('That');
// mySet.add('true');
// mySet.add('false');
// mySet.add('That2');

// console.log('The set looks like ',mySet);
// console.log(mySet.size); // Get set size
// console.log(mySet.has('this')); // check whether set has 'this' or not


// Iterating a set

// for(let item of mySet){
//     console.log("Item is : ",item);
// }

// mySet.forEach((item)=>{
//     console.log('Item is: ', item);
// })


// function distinctCount(array) {
//     let mySet = new Set();
//     for(let i=0; i<array.length;i++){
//         mySet.add(array[i]);
//     }
//     return mySet.size;
// }

// console.log(distinctCount([1,2,1,2,1]));



/////////////////////////////////////////////
////// Map Data Structure in JavaScript /////
/////////////////////////////////////////////

// const myMap = new Map();
// const key1 = 'myStr', key2 = {}, key3 = function(){};
// myMap.set(key1, 'This is a string');
// myMap.set(key2, 'This a blank obj');
// myMap.set(key3, 'This is an empty function' );
// console.log(myMap.size);

// let value1 = myMap.get(key3);
// console.log(value1);

// for(let[key, value] of myMap){
//     console.log(value);
// }

// myMap.forEach((value, key)=>{
//     console.log('Key is ',key);
//     console.log('Value is ', value);
// })



//Converting map to an array 

// let myArray = Array.from(myMap);
// console.log('Map to array is ',myArray);

// let myKeysArray = Array.from(myMap.keys());
// console.log('Map to keys array is ',myKeysArray);

// let myValuesArray = Array.from(myMap.values());
// console.log('Map to values array is ', myValuesArray);


//////////////////////////////////////////////////////////////
/////////////////// JavaScript Promises //////////////////////
//////////////////////////////////////////////////////////////

/*function func1() {
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            const error = true;
            if(error){
                console.log("Function: Your promise has been resolved");
                resolve();
            } else {
                console.log('Function: Your promise has not been resolved');
                reject('Sorry not fulfilled');
            }
        },2000);
    })
}

func1().then(function(){
    console.log("Amit: Thanks for resolving");
}).catch(function(error){
    console.log("Amit: Very bad bro. Reason: " + error);
})*/

////////////////////////////////////////////////////////
///////////// Fetch API in JavaScript //////////////////
////////////////////////////////////////////////////////

