/* Question 1 Write a ts program to find maximum between two numbers.
var num1:number = 20
var num2:number = 20
if(num1>num2){
    console.log("num1 is greater",1)
}
else if(num1<num2){
    console.log("num2 is greater ",1)
}
else{
    console.log("num1 and num2 are equal",1)
}

// Question 2 Write a ts program to find maximum between three numbers.

var num1:number = 20
var num2:number = 20
var num3:number = 24
if(num1>num2||num1>num3){
    console.log("num1 is greater",2)
}
else if(num1<num2||num3<num2){
    console.log("num2 is greater ",2)
}
else if(num3>num1||num3>num2){
    console.log("num3 is greater",2)
}
else{
    console.log("All the numbers are equal",2)
}

// Question 3 Write a ts program to check whether a number is negative, positive or zero.

var num:number = 0
if(num>0){
    console.log("num is positive",3)
}
 else if(num<0){
    console.log("num is negative",3)
 }
 else{
    console.log("num is zero",3)
 }

 //Question 4 Write a ts program to check whether a number is divisible by 5 and 11 or not.
  var num:number = 56
  if(num%11==0){
    console.log("num is divisible by 11",4)
  }
  else if(num%5==0){
    console.log("num is divisible by 5",4)
  }
  else{
    console.log("num is not divisible by 11 nor 5",4)
  }



 //Question 5 Write a ts program to check whether a number is even or odd.
 var num:number = 21
 if(num%2==0){
    console.log("num is even",5)
 }
 else{
    console.log("num is odd",5)
 }

 //Question 6 Write a ts program to check whether a year is leap year or not.

 var num:number=2020
 if(num%4==0){
    console.log("this is leap year",6)
 }
 
 else{
    console.log("this is not leap year",6)
 }

 //Question 7 Write a ts program to check whether a character is alphabet or not.
 var value:string = "4"
 var alpha:any=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
 var alpha2:any=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
 if(value == "a"||value == "b"||value == "c"||value == "d"||value == "e"||value == "f"||value == "g"||value == "h"||value == "i"||value == "j"||value == "k"||
 value == "l"||value == "m"||value == "n"||value == "o"||value == "p"||value == "q"||value == "r"||value == "s"||value == "t"||
 value == "u"||value == "v"||value == "w"||value == "x"||value == "y"||value == "z")
    console.log("the character is alphabet",7)
 else if(value == "A"||value == "B"||value == "C"||value == "D"||value == "E"||value == "F"||value == "G"||value == "H"||value == "I"||value == "J"||value == "K"||
 value == "L"||value == "M"||value == "N"||value == "O"||value == "P"||value == "Q"||value == "R"||value == "S"||value == "T"||
 value == "U"||value == "V"||value == "W"||value == "X"||value == "Y"||value == "Z"){
    console.log("the character is alphabet",7)
 }
 else{
    console.log("the character is not alphabet",7)
 }
   
 
 //Question 8 Write a ts program to input any alphabet and check whether it is vowel or consonant.
 var input:any =prompt("enter the alphabet value")
 var alphabet:any =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
 var alphabet2:any =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
 if(value == "b"||value == "c"||value == "d"||value == "f"||value == "g"||value == "h"||value == "j"||value == "k"||
 value == "l"||value == "m"||value == "n"||value == "p"||value == "q"||value == "r"||value == "s"||value == "t"||
 value == "v"||value == "w"||value == "x"||value == "y"||value == "z"||value=="B"||value == "C"||value == "D"||value == "F"||value == "G"||value == "H"||value == "J"||value == "K"

|| value == "L"||value == "M"||value == "N"||value == "O"||value == "P"||value == "Q"||value == "R"||value == "S"||value == "T"
||value == "V"||value == "W"||value == "X"||value == "Y"||value == "Z")
    console.log("the character is consonant",8)
 else if(value=="a"||value=="e"||value=="i"||value=="o"||value=="u"||value=="A"||value=="E"||value=="I"||value=="O"||value=="U")
    console.log("the character is wovel",8)
 else{
    console.log("the character is not consonant nor wovel",8)
 }
 
 //Question 9 Write a ts program to input any character and check whether it is alphabet, digit or special character.
 

 var input:any = prompt("enter any alphabet value")
 var letters=/^["a-z","A-Z"]/
 if("input".match(letters)){
  console.log("the value is alphabet",9)
 }
 else if(input===0||input>0||input<0) {
 console.log("the value is digit",9)
 }

 //Question 10 Write a ts program to check whether a character is uppercase or lowercase alphabet.
 var value:string = "4"
 var lower:any=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
 var upper2:any=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
 if(value == "a"||value == "b"||value == "c"||value == "d"||value == "e"||value == "f"||value == "g"||value == "h"||value == "i"||value == "j"||value == "k"||
 value == "l"||value == "m"||value == "n"||value == "o"||value == "p"||value == "q"||value == "r"||value == "s"||value == "t"||
 value == "u"||value == "v"||value == "w"||value == "x"||value == "y"||value == "z")
    console.log("the character is lowercase",10)
 else if(value == "A"||value == "B"||value == "C"||value == "D"||value == "E"||value == "F"||value == "G"||value == "H"||value == "I"||value == "J"||value == "K"||
 value == "L"||value == "M"||value == "N"||value == "O"||value == "P"||value == "Q"||value == "R"||value == "S"||value == "T"||
 value == "U"||value == "V"||value == "W"||value == "X"||value == "Y"||value == "Z"){
    console.log("the character is upercase",10)
 }
 else{
    console.log("the character is not upercase nor lowercase",10)
 }*/
//11. Write a ts program to input week number and print week day.
//12. Write a ts program to input month number and print number of days in that month.
/*13. Write a ts program to count total number of notes in given amount.


/*14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var x:any=prompt("enter the first value")
var y:any=prompt("enter the second value")
var z:any=prompt("enter the third value")
if(x+y+z==180){
   console.log("the triangle is valid",14)
}
else{
   console.log("the triangle is not valid",14)
}*/
/*15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var j1:any=prompt("enter the first value")
var k1:any=prompt("enter the second value")
var l1:any=prompt("enter the third value")
if(j1==k1==l1){
   console.log("the triangle is valid",15)
}
else if(j==k||k==l||l==j)
   console.log("the triangle is valid",15)


else if(j1==++k1||l1==++k1||l1==--k1||k1==--j1){
   console.log("the triangle is valid.",15)
}
else{
   console.log("the triangle is not valid",15)}*/
/*16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var b:any=prompt("enter the first value")
var c:any=prompt("enter the second value")
var d:any=prompt("enter the third value")
if(b==c==d){
   console.log("the triangle is equilatreal",16)
}
else if(b==c||c==d||d==b)
   console.log("the triangle is isosceles",16)


else if(c==++b||d==++c||d==--c||c==--b){
   console.log("the triangle is scalene.",16)
}
else{
   console.log("the triangle is not valid",16)
}*/
/*17. Write a ts program to find all roots of a quadratic equation.
var a:any=prompt("enter the value of x²")
var b:any=prompt("enter the value of x")
var c:any=prompt("enter the value of constant")
var z:any=b^2-4*a*c
if(z>0){
   console.log("roots are real")
}
else if(z==0){
   console.log("roots are real and equal")
}
else if(z<0){
   console.log("roots are imaginary")
}*/
/*18. Write a ts program to calculate profit or loss.
var sale:any=prompt("enter the sale prise")
var cost:any=prompt("enter the cost prise")
var profit:number=sale-cost
var loss:number =cost-sale
if(sale>cost){
   console.log(profit,"profit")
   
}
else (cost>sale){
   console.log(loss,"loss")
}*/
/*19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F*/
/*var physics:number = 91
 var chemistry:number = 83
 var biology:number = 26
 var mathematics:number = 93
 var computer:number = 76
 var avgmarks:number = ((physics + chemistry + mathematics + computer + biology)/500)*100
 console.log(avgmarks);

 if(avgmarks >=90 ){
   console.log('Grade A');
 }
 else if(avgmarks >=80 ){
   console.log('Grade B');
 }
 else if(avgmarks >=70 ){
   console.log('Grade C');
 }
 else if(avgmarks >=60 ){
   console.log('Grade C');
 }
 else if(avgmarks >=40 ){
   console.log('Grade D')
 }
 else{
   console.log('Grade F');
 }*/
var marks1 = prompt();
var marks2 = prompt();
var marks3 = prompt();
var marks4 = prompt();
var marks5 = prompt();
var averageMarks = (marks1 + marks2 + marks3 + marks4 + marks5) / 5;
console.log(averageMarks);
if (averageMarks >= 90) {
    console.log("Grade A");
}
else if (averageMarks >= 80) {
    console.log("Grade B");
}
else if (averageMarks >= 70) {
    console.log("Grade C");
}
else if (averageMarks >= 60) {
    console.log("Grade D");
}
else if (averageMarks >= 50) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}
/*20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%*/
/*21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill/
var unit = 144
         var inputBill:any=prompt("enter the unit value")
           if(unit <= 50){
             var bill = unit*0.5
          }
           else if(unit <= 100){
             var bill = 50*0.5 + (unit-50)*0.75
         }
           else if(unit <= 200){
             var bill = 50*0.5 + 100*0.75 + (unit-150)*1.20
           }
           else if(unit <= 250){
             var bill = 50*0.5 + 100*0.75 + 100*1.20 +(unit-250)*1.50
           }
         if(unit > 0){
             var bill = bill+bill*0.20
           }
           console.log(bill);*/ 
