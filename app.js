// OutPut

 // CONDITIONAL STATEMENTS

 var a = prompt("please enter first number","number 1");
 var b = prompt("Please enter second number","number 2");
 
 var num1 = parseInt(a);
 var num2 = parseInt(b);
 var typeNum1 =  typeof(num1);
 var typeNum2 = typeof(num2);
 var type = "number";
 var flag = confirm("Are you sure you enter the valid number?");
 
 if(flag == true){
     if(typeNum1 == type && typeNum2 == type && typeNum1!="" && typeNum2 !=""){
     var sum = num1 + num2;
     alert(`The addition of ${num1} and ${num2} is ` +sum);
 
     var multiply = num1 * num2;
     alert(`The multipilication of ${num1} and ${num2} is `+multiply);
 
     var divide = num1 / num2;
     alert(`The division of ${num1} and ${num2} is `+divide);
 
     var subtraction = num1 - num2;
     alert(`The subtraction of ${num1} and ${num2} is `+subtraction);
     }else{
         alert("sorry you enter an invalid characters, Please try again");
     }
 }else{
     alert("Sorry , you cancelled  the calculation. ");
 }
 



// type conversion
//  "" + 1 + 0

var num1 = "" + 1 + 0;
 console.log('"" + 1 + 0 = ' +num1);  //  10

 //"" - 1 + 0
var num2 = "" - 1 + 0;
 console.log('"" - 1 + 0 = '+num2);  //  -1

 //true + false
  var num3 = true + false;
 console.log('true + false = '+num3); // 1

 //6 / "3"
  var num4 = 6 / "3";
 console.log('6 / "3"= '+num4); // 2

 //"2" * "3"
  var num5 = "2" * "3";
 console.log('"2" * "3" = ' +num5); //  6

  //4 + 5 + "px"
  var num6 = 4 + 5 + "px"
 console.log('4 + 5 + "px" = '+num6); //  9px

  //"$" + 4 + 5"
  var num7 = "$" + 4 + 5
 console.log('"$" + 4 + 5 = '+num7); //  $45

  //"4" - 2
  var num8 = "4" - 2
 console.log('"4" - 2 = '+num8); //  2

  // "4px" - 2
  var num9 ="4px" - 2
 console.log('"4px" - 2= '+num9); //  NaN

  //. 7 / 0
  var num10 = 7 / 0
 console.log('7 / 0 = '+num10); //  Infinity

  //. " -9\n" + 5
  var num11 = " -9\n" + 5
 console.log(' "-9\n" + 5 = '+num11); //   -9

  //. " -9\n" - 5
  var num12 = " -9\n" - 5
 console.log(' "-9\n" - 5 = '+num12); //   -14

  //. null + 1
  var num13 = null + 1
 console.log('null + 1 = '+num13); //   1

  //. undefined + 1
  var num14 = undefined + 1
 console.log('undefined + 1 = '+num14); //   NaN

 //null + 2
 var num15 = null + 2;
console.log('null + 2 = '+num15); //   2

 //null + ""
 var num16 = null + "";
console.log('null + "" = '+num16); //   null

 //2 + "" -4
 var num17 = 2 + "" -4;
console.log('2 + "" -4 = '+num17); //   -2

 //1 + "6" -0
 var num18 = 1 + "6" -0;
console.log('1 + "6" -0 = '+num18); //   16

 //1 + "6" -0
 var num19 = -1 + "5" +5;
console.log('-1 + "5" +5 = '+num19); //   -155

 // undefined + " " +1
 var num20 = undefined + " " +1;
console.log(' undefined + " " +1 = '+num20); //    undefined 1

 // undefined + " " +1
 var num21 = null + "9";
console.log(' null + "9" = '+num21); //  null9

 // "" + "6" + null
 var num22 = "" + "6" + null;
console.log(' "" + "6" + null = '+num22); // 6null

 // "5" * "6" 
 var num23 ="5" * "6";
console.log('"5" * "6" = '+num23); // 30

 // "5" * "6" - 9 
 var num24 ="5" * "6" - 9 ;
console.log('"5" * "6" - 9  = '+num24); // 21

 //  "6" / 9 -6 
 var num25 = "6" / 9 -6 ;
console.log(' "6" / 9 -6  = '+num25); // -5.333333333333333

 // "5" * "6" / 9 
 var num26 ="5" * "6" / 9 ;
console.log('"5" * "6" / 9  = '+num26); // 3.3333333333333335

 // "9" / 3 
 var num27 ="9" / 3  ;
console.log('"9" / 3 = '+num27); // 3

 // null / 3 
 var num28 =null / 3  ;
console.log('null / 3 = '+num28); // 0

 //  null + 3 / 3 
 var num29 = null + 3 / 3 ;
console.log(' null + 3 / 3  = '+num29); // 1

 //  undefined + 3 / 3 
 var num30 = undefined + 3 / 3 ;
console.log(' undefined + 3 / 3  = '+num30); // 0

 //  33 + 3 / null 
 var num31 =33 + 3 / null ;
console.log('33 + 3 / null = '+num31); // Infinity

 //  2 * 3 / null 
 var num32 =2 * 3 / null ;
console.log('2 * 3 / null = '+num32); // Infinity

 //  "2 * 3" / 5 
 var num33 ="2 * 3" / 5 ;
console.log('"2 * 3" / 5 = '+num33); // NaN

 //  "2" * "3" / "5" 
 var num34 = "2 * 3" / "5";
console.log(' "2" * "3" / "5"= '+num34); // NaN

 //  "3" * 2 / "6" 
 var num34 = "3" * 2 / "6" ;
console.log(' "3" * 2 / "6" = '+num34); // 1

 //  "3" * null / "6" 
 var num34 ="3" * null / "6" ;
console.log(' "3" * null / "6" = '+num34); // 0

// undefined == null
 console.log(undefined == null); // true

// undefined == undefined
 console.log(undefined == undefined); // true

// undefined == NAN
var nan ="2-4";
 console.log(undefined == nan); // false

// 0 == True
var a = 0;
 console.log( a == true); // false

// 0 == false
var a = 0;
 console.log( a == false); // true

// 1 == true
var a = 1;
 console.log( a == true); // true

// null == true
 console.log( null == true); // false

// null == false
 console.log( null == false); // false

// null == null
 console.log( null == null); // true

// null == 0
var a = 0;
 console.log( null == a); // false

// null == 1
var a = 1;
 console.log( null == a); // false



