// .................Chapter 21.................
// Q#01
// var allLower = userInput.toLowerCase();
// Q#2
// x = x.tolowercase();
// Q#3
// y = y.touppercase();
// Q#4
// var string = "aVariableInString";
// var secondString = string.toLowerCase();
// document.write(secondString);
// Q#5
// var arr=["Cat","Dog","Cow","Goat","Rabbit"];
// var newArr=arr[0].tolowercase();
// document.write(newArr);
// Q#6
// var string="string by variable";
// alert(string.toUpperCase());
// Q#7
// var cityName = "kaRacHi";
// cityName= cityName.charAt(0).toUpperCase()+cityName.slice(1).toLowerCase();
// alert(cityName);


// ..........................Chapter 22-25(Strings).................

// Q#1
// var sameWords = "captain";
// var sliceWord = sameWords.slice(1,3);
// document.write(sliceWord);
// Q#2
// var string="variable";
// var stringVariable = string.length;
// document.write(stringVariable)
// Q#3
// var animalVariable="elephant";
// var seg=animalVariable.slice(2,6);
// console.log(seg);
// Q#4
// var string ="Characters";
// var findout=string.length;
// console.log(findout);
// Q#5
// var variable="JavaScript";
// var newVariable = variable.length;
// var slicedVariable = variable.slice(1,-3);
// console.log(slicedVariable);
// Q#6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
//  the value of indx = 3;
// Q#7;
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx)
// The value of indx = 16;
// Q#8
// var text="go";
// var firstIndx=text.lastIndexOf("go");
// console.log(firstIndx);
// Q#9
// if(typeofstring[indexnumber]!=="undefined"){
    // "segment exists"
// }else{
    // "segment doesnot exists"
// }
// Q#10
// var string = "abcde";
// var Characters=string.charAt(2);
// console.log(Characters);

// Q#11
// var text ="javascript";
// var cha = text.charAt(9);
// console.log(cha);
// Q#12

// var x=str.charAt(str.length-1);
// console.log(x)

// Q#13
// var cha = input.charAt(4);
// Q#14
// if(yourstring.charat(2)==="your character"){
//     "the 3rd caharcter is a particular character"
// }else{
//     "the 3rd charcter is not specified character"
// }

// Q#15
// var string="my string";
// var arr=[];
// for(var i=0;i<string.length;i++){
//     arr[i]=string.charAt(i)
// // };
// var revisedReply=reply.replace("no","yes")
// // Q#16

// var string="1"
// var replacestring="one";
// var replacestring=string("1","one");

// Q#17

// var y = x.replace("a", "z");
// var y = x.replace(/a/g,"z");

// ..........................Chapter # 27..................................
// Q#1
// var roundedNumber=Math.round(yourNumber);
// Q#2
// Question no 02
// var roundNum = Math.ceil(origNum);

// Question no 03
// var roundNum = Math.floor(origNum);

// // Question no 04
// var originalNumber = 7.8; // Replace with your number
// var roundedNumber = Math.round(originalNumber);

// // Question no 05
// var roundedValue = Math.round(0.5);


// ************************chapter no 27**************************
// Question no 01
// var randomInRange = Math.floor(Math.random() * 50) + 1;

// // Question no 02
// var randomNumber = Math.random();

// // Question no 03
// var diceRoll = Math.floor(Math.random() * 6) + 1;

// // Question no 04
// var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

// ***********************************chapter no 28-29*****************************

// // Question no 01
// To convert a string to an integer in JavaScript, you can use the parseInt() function or the Number() constructor.

// // Question no 02
// function stringToInt(str) {
//     return parseInt(str, 10);
//   }
  
//   var result = stringToInt("123"); // result will be 123
  
// // Question no 03
// To convert a string containing a decimal number to a 
// floating-point number in JavaScript, you can use the parseFloat() function or the Number() constructor.

// // Question no 04
// function isNumeric(str) {
//     return !isNaN(parseFloat(str)) && isFinite(str);
//   }
  
//   var str1 = "123";
//   var str2 = "3.14";
//   var str3 = "abc";
  
//   console.log(isNumeric(str1)); // true
//   console.log(isNumeric(str2)); // true
//   console.log(isNumeric(str3)); // false
  
// // Question no 05
// To convert a number to a string in JavaScript,
//  you can use the toString() method or concatenate it with an empty string.
// // Question no 06
// function numberToString(num) {
//     return num.toString();
//   }
  
//   var result = numberToString(42); // result will be "42"
  
// // Question no 07
// var decimalString = "3.14";
// var integerNumber = parseInt(decimalString, 10); // integerNumber will be 3

// However, if you want to round to the nearest integer instead 
// of truncating, you can use Math.round() in combination with parseFloat():


// var decimalString = "3.14";
// var roundedInteger = Math.round(parseFloat(decimalString)); // roundedInteger will be 3


// *********************chapter no 30****************************
// Question no 1
// var num = 3.14159265359;
// var newNum = num.toFixed(4).toString();

// // Question no 2
// var yourNumber = 5.6789;
// yourNumber = parseFloat(yourNumber.toFixed(2));

// // Question no 3
// if (num.toFixed(2).toString().length > 4) {
//     // Code to execute if the string representation has more than 4 characters
//   } else {
//     // Code to execute if the string representation has 4 or fewer characters
//   }
  
// // Question no 4
// var originalNumber = 123.456789;
// var roundedNumberString = originalNumber.toFixed(2).toString();
// alert(roundedNumberString);


// **************************************the end******************************************

























