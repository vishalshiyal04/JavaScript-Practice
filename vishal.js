//CHAPTER-1
console.log("vishal shiyal");
console.log("java script");


//String Value
fullname = "vishal shiyal";
console.log(fullname);
//String Value


// Normal Number value
age=24;
console.log(age);

price=99.99;

x=null;  // this variable is value in store but its null value.
y=undefined;  //this variable is not idea in value.
console.log(y);

radius=14;

isFollow=true;
console.log(isFollow);
// Normal Number value


// fullname=25;
// console.log(fullname)



//variable rulse
//variable names are case sensitive "a" & "A" is different.
fullname="vishal shiyal";                      // its is not create for the Same name.
fullName="vikrant bhai";                    // its is not create for the Same name.

console.log(fullname);
console.log(fullName);

// full name="vishal";                     it is not allowed


// only letters, digit, underscore(_) and $ is allowed.(not even space)
// only letters, underscore(_) or $ should be 1st character.
fullname_="vishal";                          //allowed for the (a-z)(A-Z)letters,$,(digit)123,(underscore)-,_.(not even space)
_fullname="vishal";
$fullname="vishal";
// 123fullname="vishal";                it is not allowed
fullname123="vishal";


//reserved words cannot be variable names.
// console="vishal shiyal";
// console.log(console)                 it is not allowed

Console="vishal shiyal";
console.log(Console)                    // it is allowed

// fullName
// fullName=(camel case)        only it is a use.

// fullname =    not use
// full_name =   not use  (snake case)
// full-name =   not use  (kabab case)
// FullName =    not use  (pascel case)

// isFollow             it is used
// totalPrice



// let key-word
let /*full*/ name="vishal shiyal 1";
console.log(name);
        // or 
// console.log(fullname); line 74
let /*age*/=24;
let totalPrice = 1000;
//    its not use
// let age= 24;
// let age= 58;
// let age =54;
// console.log(age);
//    its use (This is right)
// let age=23
// age=57;
// age=90;
// console.log(age);=90

// let var keyword
var FullName ='vishal shiyal001';                   // but var is a not use for the Java script.
console.log(FullName);                              // var are the use for the 2015 ago.
//its use
var age= 24;
var age= 58;
var age =54;
console.log(age);
// but 2015 under java script under we goat something called ES6(Ecmascript-6)-java script New Standerd( new rule ).....
// let
//const 
//for new declaring variable.(modern javascript)

//let const key-word.
const PI=2005;  //const its genrlly prifer
console.log(PI)
let a;
// a=90
console.log(a)
// cont a;          its Error
// console.log(a)
// {code}  one block
{
    let a=5;
    console.log(a)
}
{
    let a=10;
    console.log(a)
}



//Data type in js.
//primitive data type:-seven
//number
var age =90
var price=100.01
//js type for:-age = 90, typeof age = number
            // price = 100.01, typeof price = number

//string
var fullname="vishal"
//js type for:-name = vishal, typeof fullname = string

//boolean
isFollloe= true;
//js type for:-isFollow = true, typeof isFollow = boolean

//undefined
let s;
console.log(s)

//null
let b=null;
//js type for:-b = null, typeof x = object

//bigint
let v=BigInt(123);
//js type for:-v = 123n, typeof v= bigint

//symbol
let h=Symbol("hello");
//js type for:-h = Symbol(hello), typeof h= 'symbol'


//nonprimmitive data type:-
//object:-
//key:value
const student={
    name: "vishal",
    age: 20,
    cgps:8.2,
    isPass: true,
};
student["age"] = student["age"] + 1;
student["name"]="vishal bharatbhai shiyal";
//js type for:- student, typeof student = object, student["name"]=vishal or student.name=vishal
console.log(student["age"]);
console.log(student.age);
console.log(student["name"]);

//practice QS1:-
//create a const object called "product" to store informatio shown in the picture.
const product ={
    title : "parker jotter standard CT Ball Pen (Black)",               // string type
    rating: 4,                                                      // number type 1-5
    price:  270,                                                             //number type
    offer:  5,                                                   //number type
};
console.log(product);
// js type for:- product, typeof product= object,prouct["title"]=parker jotter standard CT Ball Pen (Black) or product.tite=parker jotter standard CT Ball Pen (Black)

//Create a const object called "profile" to store information shown in the picture.
const profile ={
    username:"@athemain",                    // string type
    isFollow:false,                                  //boolean type
    post:5,                                            //number type
    followers:340,                                      //number type
    following:300,                                      //number type
    biodata: "my name is xyz and i study for the gujarat.",             // string type
};
console.log(typeof profile["username"]);
console.log(typeof profile);



//CHAPER-2
//arithmetic opertors:-
let q=5;
let w=2;
console.log("q=",q, "& w=",w)
console.log("q+w=",q+w)             //(+)
console.log("q-w=",q-w)             //(-)
console.log("q*w=",q*w)             //(*)
console.log("q/w=",q/w)             //(/)
console.log("q%w=",q%w)                 //Modulus   (%)
console.log("q**w=",q**w)               //Exponentiation    (**)

//unary operator
let e=5;
let r=2;
console.log("e=",e,"&r=",r);
//increment
e++; // or e=e+1 e++(post increment), ++e(preincrement)
console.log("e=",e)
//decrement
e--; // or e=e-1 e--(post decrement), --e(predecrement)
console.log("e=",e);
console.log("++e =", ++e);      //++e (preincrement)        (6)
console.log("e++=",e++);          //e++(postincrement)             (5)
console.log("e=",e);                            //            (6)
console.log("--e=",--e);     //   (4)
console.log("e--=",e--);// (5)
console.log("e=",e);         //(4)


//Assignment Operatores:-
// =, +=, -=, *=, %=, **=
//+=
let t=5;
let u=2;
t+=4; //t=t+4   (+)(-)(/)(*)(%)(**)
console.log("t=",t)

//Comparison operators:-
//(==)
s=5;    //number
d=5;   //or d="5";   //string or number         procces//string --> number
console.log("s==d",s==d); // Answer=true  then S and D = same N number then after answer is true then after answer is false.
//(!=)
p=5;
o=2;     //or d="2";   //string or number         procces//string --> number
console.log("p!=o",p!=o);
//(===)
i=9;
u=9; //not use for the string data type like "5". because this comparison is === 
console.log("i===u",i===u);
//(!==)
y=7;
t=7;
console.log("y!==t",y!==t)
//(>)
r=5;
e=3;
console.log("r>e",r>e);
//(>=)
m=6;
n=5;
console.log("m>=n",m>=n);
//(<)
b=5;
v=3;
console.log("b<v",b<v);
//(<=)
c=5;
x=5;
console.log("c<=x",c<=x);

//Logical operators:-
//logical AND &&
z=6;
l=5;
let cand1=z>l; //true
let cand2=z===6; //true
console.log("cand1 && cand2=",cand1 && cand2);  //or console.log("z<l && z===6",z<l && z===6); in this use.
//logical OR (||)
g=6;
f=5;
console.log("g<f || g=6",g<f || g===6);
//logical NOT (!)
a=6;
s=5;
console.log("!(a<s)",!(a===s)); //or !(a===6) in use

//Conditional Statements:-
//if statement
let year = 25; //age
if(year>18){      //age
    console.log(" you can vote");
}
if(year<18){
    console.log("you can not vote");
}
//example dark mode
let mode="light";
let color;
if(mode === "dark"){
    color = "balck";
}
if(mode==="light"){
    color = "white";
}
console.log(color);

//if-else Statement
let made="dark";
let calar;
if(made==="dark"){
    calar="black";
}else{
    calar="white";
}
console.log(calar);
//example age
let same=25; //age
let birth;
if(same>=18){
    form="vote";
}else{
    form="notvote" ;
}
console.log(form);
//example odd even number
let num = 13;
if(num%2===0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}
//syntex -> rules

//else-if statement
you=60;
if(you<18){ //18 down
    console.log("Junior");
}else if (you>60){ //60 upp
    console.log("senior");
}else{
    console.log("middle");
}
//exampe dark color
let meda="dark";
let colar;
if(meda==="dark"){
    colar="black";
}else if(meda==="blue"){
    colar="blue";
}else if(meda=== "pink"){
    colar="pink";
}else{
    colar="any colar";
}
console.log(colar);
if(meda==="dark") console.log(meda);

//operators in JS:-
//Ternary Operators
let me=25; //cahnge 18 age
let result = me>=18 ? "adult" : "not adult";       //simple, compact if-else
console.log(result);


//Statement-Switchcase:-
const expr = 'Oranges';
switch (expr)   
{
    case 'Oranges':
    console.log('Orange are  $0.59 a pound.');
    break;
    case 'Mangoes':
    case 'papayas':
    console.log('Mangoes papayas and papayas are $2.17 a pound.');
    break;
    default:
        console.log('Sorry,we are out of $(expr).');
}

//practice Q.1
//Get user to input a number using promt("Enter a number:").check if the number is a multiple of 5 or not.
// alert("Hello");                                                                                                                                  //one time popup.
// let  he = prompt("Hello");
// console.log(he);
// //
// let numm = prompt("Enter a number");
// if(numm % 5 ===0){
//     console.log(numm ,"is a multiple of 5");
// }else{
//     console.log(numm, "is not multliple of 5");
// }

//practice Q.2
//Write a code which can give grades to students according to their scores:
//90-100,A
//70-89,B
//60-69,C
//50-59,D
//0-49,F
// let score=prompt("Enter your score(0-100):");
let score=78;
let grade;
if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=0 && score<=49){
    grade="F";
}
console.log("according to your scores, your grade was :",grade);



// CHAPTER :-3
//Loop are used to execute a piece of code Again & again.
//for loop
// printf 1 to 5
// initilize  , stopping condition  ,  Updation
for(let i=1;i<=5;i++) {
    console.log("i=",i);
}
console.log(i);
//calculate sum of 1 to 5
let sum = 0;
let vishal = 100;
for(i=1;i<=vishal;i++){
    sum=sum+i; // sum=1+2+3+4+5=15
}
console.log("sum=",sum);

//infinite loop: A Loop that never ends.
// for(i=1;i>=0;i++){
//     console.log("i=",i);
// }

//While Loop
let shiyal=1;
while(shiyal<=10){
    console.log("shiyal");
    shiyal++;
}

//do whilw loop
let scores=1;
do{
    console.log("scores= ",scores);
    scores++;
}while(scores<=5);

//for-of loop
let str="vishal bharatbhai shiyal";

let size=0;
for(let val of str){    //iterayor-> character
    console.log("val=",val);
    size++;
}
console.log("string size=",size);

//for-in-loop
let stu={
    name: "vishal shiyal",
    age: 19,
    cgpa: 7.5,
    isPass: true,
};

for(let key in stu){
    console.log("key=",key,"value=", stu[key]);
}

//practice Q.1
// print all even numbers from 0to 100.
for(let num=0;num<=100; num++){
if(num%2==0){
    console.log("num=",num);
}else{

    }
}

//Create a game where you start  with any random game number.Ask the user to keep guessing the game number until the user enters correct value.
// let gameNum=25;
// let userNum=prompt("Guess the Game Number:");

// while(userNum!=gameNum){//game
//     userNum=prompt("you Entered wrrong number, Guess Again:");

// }
// console.log("Congratulations, you Entered the right number.");


// string in JS
//create string
let string = "VishalShiyal"; //str
let string2 = 'vishalshiyal'; //str2

console.log(string[12]);

//Template Literals
let specialString = `This is a template literal ${1+2+3}`;
console.log(typeof specialString);
console.log(specialString);
//Exampl:-
let obj = {
    item: "pen",
    price:10,
};
// console.log("the Cost Of", obj.item, "is",obj.price, "rupees");
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//escape character
console.log("Vishal\nShiyal");
console.log("Vishal\tShiyal");

let string3 = "Apna\tcollage";
console.log(string.length);

//string method in JS
//These are built-in functions to manipulate a string
//toUpperCase()
let str6 = "vishalbshiyal";
let newstr6 = str6.toUpperCase();
console.log(str6);
console.log(newstr6);
//or 
let str7 = "vishalbharatbhaishiyal";
str = str7.toUpperCase();
console.log(str);
//console output inn type for- str6.toUpperCase()

//toLowercase
let str10 = "My Name Is Vishal B Shiyal";
str11 = str10.toLowerCase();
console.log(str11); 

//trim :- (removes whitespaces)
let str01 = "       Vishal B Shiyal      ";
console.log(str01.trim());

//str.slice :- (return part of string)
let str03 = "01234567"; 
console.log(str03.slice(1,7)); //last value for index in a nonincluve value.    
let str04 = "nxcjjVishalb";
console.log(str04.slice(5,11));

//str1.concat(str2):- (joins str2 with str1)
let str05 = "Vishal";
let str06 = "Shiyal";
let Name = str05.concat(str06); // or str06.concat(sr05)
//or let Name = str05 + str06; //let Name = "Iam From Ahmedabad " * str05 + str06; // let Name = "hellow" * 123;
console.log(Name);
//or
console.log(str05.concat(str06));

//ssstr.replace
let str07 = "hello";

console.log(str07.replace("h","y"));
//let str = "hellololo";
//console.log(str.repalce("lo","p")); //OUTPUT:-helplolo
//or 
// console.log(str.replaceall("lo","p")); //OUTPUT :- helppp

//atr.charAt(idx):- //Cheak A Character
let str08 = "ILoveJS";
// str08[0]="s";
//console.log(str08);     It is not possible and this result in access for then after generate in a new str.
console.log(str08[0]);
console.log(str08.charAt(0)); // I
str09 = str08.replace("I","s");
console.log(str09);


//Let's Practice
/* Qs.1 promt the user to enter their full name. generate a username for them based on the input start username with @FullName,followed by their full name and ending
with the fullname length.
    eg. user name="vishalbharatbhaishiyal". username should be "@vishalbharatbhaishiyal"*/
    
/*let yourName=prompt("Enter Your Fullname Without Spaces");
let username= "@" + yourName + yourName.length;
console.log(username);*/



//chapter:-4  (Array)

// collections of items
// create array
let marks =[97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length); //property

let heroes =["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroes);

//array indices:-
/* arr[0],arr[1],arr[2]....*/


//loooping over an array:;-
// print all element of an array
let heroe =["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroe[0]);
console.log(heroe[1]);

//for loop:-
for (let i=0; i<heroe.length; i++){   //i=1
    console.log(heroe[i]);                //[i-1]
}
//for of loop:-
for(let hero of heroe){
    console.log(hero);
}
//ex:-
let cities =["Ahmedabad" ,"Bhavanagar","Surat","vadodara","rajkot"];

for(let city of cities){
    console.log(city.toUpperCase());
    // console.log(cities);
}
//let's Practice
//QS:- For a given array with maarks of students->[85,97,44,37,76,60] Find the average marks of the entire class.
let stumarks = [85,97,44,37,76,60];

let sums =0;
for(let val of stumarks){
    // sum = sum+val;
    sums+=val;
    // console.log(val);
}
let avg = sums/stumarks.length;
console.log(`avg marks of the class = ${avg}`);

/*QS.for a given array with prices of 5 items ->[250,645,300,900,50] All items have an offer of 10% OFF on them.
Change the array to store final price after applying offer.*/
let items = [250,645,300,900,50];   

let j = 0;
for(let val of items){
    // console.log(`value at index ${j} = ${val}`);
    let offer = val / 10;
    items[j] = items[j] - offer;
    console.log(`value after offer = ${items[j]}`)
    j++;
}

for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i]-=offer;
}
console.log(items);


//Array Method:-
//(1)   Push():  and to end
let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];

foodItems.push("Chips", "Burger", "Panner");
console.log(foodItems);

//pop():  delete from end & return
let car = ["Tata", "KIA", "Micsidec", "Fortuner", "Scorpio", "Thar"];
console.log(car);
let deletedItem = car.pop();
console.log(car);
console.log("deleted", deletedItem);

//toString(); converts array to string
let cars = ["tata" , "Benz" , "G vegaun" , "Mestro", "ALL"];
console.log(cars);
console.log(cars.toString());
//example:-
let yourmarks = [20,290,20,40];

//Concat():- joins multiple arrays & return result
let marvel_heroes = ["THOR","SPIDERMAN","IRONMAN"];
let dc_heroes = ["SUPERMAN","BATMAN"];
let india_heros = ["shaktiman","krish"]

let concat_heroes = marvel_heroes.concat(dc_heroes,india_heros);
console.log(concat_heroes);

//Unshift():-add to start    that work for push method
let marvel = ["Thor","spiderman","ironman"];
marvel.unshift("Antman");

//shift():- delete from start & return    that work for pop method
let marvels = ["Thor","spiderman","ironman"];
let val = marvels.shift();
console.log("delete", val);

/* SLice():- return a piece of the array
    slice(startldx,endldx) */
let more_heroes = ["thor","spiderman","ironman","antman","Dr.strang"];
console.log(more_heroes);
console.log(more_heroes.slice(1,3));

/* Splice():- change original array (add,remove,replace)
    splice(startldx,delCount,newEl1....)*/
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
//Element ADD
arr.splice(2,0,101);
//Delete Element
arr.splice(3,1);
//We Can Replace in ELement
arr.splice(3,1,101);

//Let's Practice

/*Qs:- Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
    a. Remove the first company from the array
    b. Remove Uber & ADD Ola in its place
    c. Add Amazon at the end */
        let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
        // let avd = companies.shift();   //a
        // console.log("delete", avd);
        // console.log(companies);

        // companies.splice(2,1,"Ola");  //b

        // companies.push("Amazon"); //c



//Chapter:-5 (Function)

//function example
// console.log("hello");
// "abc".toUpperCase();
// [1,2,3].push(4);


function myFunction() {
    console.log("WelcCome to Co-der");
    console.log("WE are Learning JS");
}
myFunction();

function myFunction(msg) { //parameter -> input
    console.log(msg);
}
myFunction("Co-der"); //argument


//Funtion -> 2 numbers, sum

function Sum(x,y){
    // Actt //Local Variable-> Scope(Variabe Kaha Tak Jinda Hai)   ,,,local Variable meaning BLock of code in this code

    // console.log(x+y);
    console.log("Before Return");  //x      //1
    S = x+y; //2
    return S;//2
    console.log("After Return"); //1  Before Returns code is not Aczicut
}
let V = Sum(3,4); //2
// console.log(x);  its not difine.
console.log(V); //2


//Arrow Function:-
// Sum Function
function SUM(a,b){
    return a+b;
}

//Modern JS:
const vs = 5;
const arrowSum = (a,b)=> {
    // console.log(a+b);
    return a+b;
};  // Out-Put:-  arrowSum(3,4); = 7 and undefined

//multiplication function
function Mul(a,b){
    return a*b;
}

const arrowmul = (e,r) => {
    // console.log(e*r);
    return e*r;
};
// arrowmul = 5; and then after Const Remove for * and let Define // Out Put is     5

const printHello = () => {
    console.log("Hello");
}; // Out Put Are Hello


////Let's Practice

//QS:- Create a function using the "function" keyword that takes a String as an argument & return the number of vowels in the string.
// Other for vowels:-- a,e,i,o,u
function countvowels (str){
    //"ApnaCollege", count = 5
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

//QS:- Create an arrow function to perform the same task.
let countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

//forEach Loop in Arrays:-

//arr.forEach(callBackFunction)
//CallbackFunction : Here, it is a function to execute for each element in the array
//*A callback is a function passed as an argument to another function.

/* arr.forEach( (val) => {
    console.log(val);
}) */

function abc() {
    console.log("hello")
}
function myFunc(abc){
    return abc;
}

//Example:_
let arr1 = [1,2,3,4,5];
arr1.forEach(function printVal (val) {  // value at each idx 
    console.log(val)
})

arr1.forEach((val) =>{
    console.log(val)
})

let city = ["pune" , "ahmedabad" , "dehli" , "mumbai"]
city.forEach((val, idx ,  arr) =>{
    console.log(val.toUpperCase(),idx, arr)
})


//Let's Practice:-
//QS:-for a given array of numbers, print the square of each value using the forEach loop.
let array = [2,3,4,5,6];

array.forEach((array) =>{ //callback
    console.log(array * array);  // OR array**2
})

//OR

let array2 = [11,22,33,44];

let calcSquare/*this is function*/ = (array2) =>{ //callback
    console.log(array2 * array2);  // OR array**2
};
array2.forEach(calcSquare);


//Some More Array Methods:-
// MAP //
/* Creates a new array with the results of some opration. The value its callback returns are used to form new array*/
/* arr.map( (value,index,array))*/

/* let newArr = arr.map( (val) =>{
    return
}) */

let number3 = [34,45,49];

let newnum3 = number3.map((val) => {
    // console.log(val);
    return val; //or * val
});
console.log(newnum3);

// Filter //
/* Create a new array of elements that give true for a condition/filter.*/
/* Eg: all even element */

/* let newArr = arr.filter ((val) => {
    return val%2 === 0;
}) */

let arrall = [1,2,3,4,5,6,7,8,9,10];

let evenarr = arrall.filter ((val)=> {
    return val % 2 === 0; //2 !=odd , val > 3;
})
console.log(evenarr);

// Reduce  //
/* Performs Some Operations & Reduces the array to a single value. it returns that single vlaue. */

/* JavaScript Demo: Array.reduce()
const array1 = [1,2,3,4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);
//Expected output: 10*/

let arr2 = [1,2,3,4];//Previus and current

const OP = arr2.reduce((result,current) => {
    return result + current;
});
console.log(OP);

let arr3 = [5,6,2,1,3];

const OUTPUT = arr3.reduce((prev,curr)=> {
    return prev > curr ? prev : curr;
});
console.log(OUTPUT)


//Let's Practice:- 
/*QS:- We are given array of marks of student.Filter our of the marks of students that scored 90+.*/
let arr4 = [97,64,32,49,99,96,86];

let topper = arr4.filter ((val)=> {
    return val > 90;
})
console.log(topper);

/*QS:- Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array. */

/*
let k = prompt("Enter a Number:");

let arrm = [];

for(let i=1; i<=k; i++ ) {
    arrm[i-1] = i; //1[0],2[1],3[2],4[3]
}
console.log(arrm);

let SUMM = arrm.reduce((res, curr) =>{
    return res + curr;
});
console.log("SUMM=",SUMM);

let factorial = arrm.reduce((res, curr) =>{
    return res * curr;
});
console.log("factorial =",factorial);
*/



//Chapter:-6
/* DOM -Part 1 */
console.log("hello");
// window.console.log("hello2");
// alert("Co-der");
//window.alert("hello");

/* DOM */
//wha is DOM ? = Document Object Model.
// console.dir(document.body.childNodes[1]);
// document.body.childNodes[3].innerText = "abcd";

// console.log(document.body);

/* selecting with id */
let heading = document.getElementById("heading"); //=null
console.dir(heading);

/* selecting with class  */
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

/* selecting with tag */
let parahs = document.getElementsByTagName("p");
console.dir(parahs);

/* Query Selecter */ // for return in NodeList
let firstEL = document.querySelector("p"); // 1st element     = return first element
console.dir(firstEL);

let allEL = document.querySelectorAll("p"); // all element     = return a NodeList
console.dir(allEL);

// class through
let firstEl = document.querySelector(".myClass"); // 1st element     = return first element
console.dir(firstEl);

let allEl = document.querySelectorAll(".myClass"); // all element     = return a NodeList
console.dir(allEl);

let button = document.querySelector("#myId"); // all element     = return a NodeList
console.dir(button);

/* Properties    ,get=check set=change/update*/

//tagname: -
    /* firstEL.tagname */

//Home Work
console.dir(document.body.firstChild);

//innerText:-
let div = document.querySelector("div");
console.dir(div);
//Console = div.innerText , div.innerText = "abcd";  // change the all text
//Console = div.innerHTML , div.innerHTML = "<div> inner Div </div>";

let  oldheading = document.querySelector("h1");
// console = oldheading .innerText = "New Heading";
// console = oldheading .innerHTML = "<i>New Heading</i>";


//Let's Practice:-
/* QS:- Create a H2 heading element with text - "Hello JavaScript". Append "from APna College students" to this text using JS.*/
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apna college students";// Concatenate =joid for two string

/* QS:- Create 3 div with common class name  - "box". Access them &add some unique text to each of them.*/
let divs =document.querySelectorAll(".box");
// console.log(divs[0]);

let index = 1; 
for(div of divs) {
    // console.log(div); //then after div.innerText
    div.innerText = `New Unique Value  ${index}`;
    index++;
}
// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";


/* Chapter:- 7*/
//DOM-Part-2 

//Attributrs
/* getAttribute(attr) //to get the attribute value // */
// let div41 = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

let divex =document.querySelector("div");
console.log(divex);
// let divname  = div.getAttribute("name");
// console.log(divname);

let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","co-der")); //consoe print = para.setAttribute("class","NEWADD");

/* style */
//node.style
let style = document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.visibility = "hidden";
// div.style.fontSize = "26px";
// div.innerText = "Hello";

//DOM Manipulation
/* Insert Element */
//New Element add

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// console.log(newBtn);

let divbtn = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let Rapa = document.querySelector("p");
// Rapa.remove();
// newHeading.remove();


//Let's Practice:-
/*QS:- Create a new button element. Give it a text "click me",background color of red & text color of white.
        - Insert the button asa the first element inside the body tag. */
        // let newbutton = document.createElement("button");
        // newbutton.innerText = "LCick Me";
        // newbutton.style.color="White";
        // newbutton.style.backgroundColor="red";
        // document.querySelector("body").prepend(newbutton);

/*QS:- Create a <p> tag in html, give it a class & some styling.
        -Now create a new class in CSS and try to append this class to the <p> element.
        -DId you notice, how you overwrite the class name when you add a new one?
        -Solve this prooblem using classlist. */

        let Paragraph = document.querySelector("p");



//Chapter :- 8
/* Events in JS */

//Events in JS
/* The change in the state of an object is known as an Event
    Events are fired to notify code  of "interesting changes" that may affect code execution.

    - Mouse events (click, double click etc.)
    - Keyboard events (keypress, keyup, keydown)
    - Form events (submit etc.)
    - print events & many more
*/

