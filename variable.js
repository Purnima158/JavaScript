/*var a=21;
var b="abc";
var c=true;
var d=21.4;
console.log("type of"+a);*/

/*function printme()
{
    var a=21;
var b="abc";
var c=true;
var d=21.4;
console.log("type of"+d);
}

printme();*/

 /*a=10;       //Hoisting means It is move on the top assigned value
console.log(a);
var a;
a=2;*/

/*function abc(){
 var a=20;
 var a=25;
 console.log(a);
}
abc();*/

/*function printme()
{
   let a=20;
    if(true)
    {
        let a=29;
        
    }
    console.log(a);
}
printme();*/

/*function printme()
{
    let a=20;
    if(true)
    {
        console.log(a)
    }
}*/

/*var x=3.142
console.log(Math.PI);*/

//OBJECT SYNTAx

/*const person={
    "id":101,
    "name":"Purnima",
    "age":25
}

console.log(person);*/

/*const person={
    "id":101,
    "name":"Purnima",
    "age":25
}
//modify the existing
console.log(person.age);
console.log(person.name);
console.log(person.gender="female");*/

/*var person={
    "name":"Purnima",
    age:25,
    gender:female
}

var person2=person
console.log(person2);*/

//Spread Operator

/*let a=[10,20,30,40,50,60,70];
let b=[...a];

console.log(a);
console.log(b);
*/
/*let a=[10,20,30,40,50]
let b=[10,30,49];
let mergedarray=[...a,...b];
console.log(mergedarray);*/

/*var a={
    "name":"Punrima",
    gender:"Female",
   age:21,
}
var b={...a}
console.log(b);
b.name="Anshi",
console.log(a);
console.log(b);*/
/*var b={
    job:"Software developer",
    salary:"60k",
    shift:"morning"
}

var totaldetails={...a,...b}
console.log(totaldetails);*/

/*function x(callback){
callback();
}
function y()
{
    console.log("hello amar");
}
x(y);*/

/*function x(callback)
{
    callback(5,4)
}
function add(a,b)
{
    console.log(a+b);
   
}
x(add);*/

/*function x(callback)
{
  return callback(2,3)
}
function add(a,b)
{
    return(a+b);
}
var res=x(add)
console.log(res);*/

/*function a(callback)
{
    return callback(14);
}
function even(n)
{
    return(n%2==0)
}
var res=a(even)
console.log(res);
*/

/*function a(callback)
{
  callback(14);
}
function even(n)
{
    if(n%2==0)
    {
        console.log("even");
    }
    else{
        console.log("not");
    
}
var res=a(even);*/
//Higher order function
/*function check(callback)
{
    callback([10,20,30,40,50]);
}
check(arraybig)
function arraybig (arr)
{
    var big=0;
    for(var i=0;i<=arr.length-1;i++)
    {
        if(arr[i]>big)
        {
            big=arr[i];

        }
    }
    console.log("biggst is:"+big);
}*/

/*function arraybig (arr)
{
    var big=0;
    for(var i=0;i<=arr.length-1;i++)
    {
        if(arr[i]>big)
        {
            big=arr[i];

        }
    }
    console.log("biggst is:"+big);
    function displayarray(arr)
    {    
       console.log(arr);
    }
}*/

/*for(let i=0;i<=5;i++)
{
    console.log(i);
}*/

//loose qual
//console.log(1=="1");
//Strictly equal Operator
//console.log(1==="1");
//console.log(1==true);
//console.log(1==false);


//Objects

/*var person=
{
    name:"Purnima Prajapati",
    age:25,
    gender:"female"
}
console.log(person);

for(let key in person)
{
    if(key==="name" || key==="gender")
    {
console.log(key+":"+person[key]);
}
}*/

/*let fruits=["apple","orange","grapes"];
for(let index in fruits)
{
    console.log(fruits[index]);
}*/

/*let myset=new Set()
console.log(myset);*/

/*let myset=new set([1,2,3,4,5,5,6])
console.log(myset);
*/
/*let mySet=new set([1,2,3,4,5,5,6])
console.log(mySet);*/

/*let myset1=new Set([1,2,3,4,5]);
let myset2=new Set([5,6,7,8,9]);

let myset3=new Set([...myset1,...myset2]);
console.log(myset3);*/
/*ms1=new Set();
ms1.add("hii");
ms1.add("Lalli");
let arr=[...ms1];
console.log(arr);*/
/*ms1=new Set();
ms1.add("hii");
ms1.add("Lalli");
let arr=Array.from(ms1);
console.log(arr);*/
/*let myMap=new Map()
console.log(myMap);*/
/*let myMap=new Map(["name","Hero"],["age",21]);
let myMap=new Map(key,values);
console.log(myMap);*/
/*let myMap=new Map();
myMap.set("key",value);
myMap.set("key",value1);
myMap.set("key3",value2);
myMap.set("key",value3);
myMap.set("key",value4);

myMap.get(key);*/

/*const myMap=new Map();
console.log(myMap.size);*/
/*const myMap=new Map([["key1",value]["key1",value2]]);
console.log(myMap.size);*/
//myMap.delete("key");
//myMap.get("key");

/*const myMap=new Map([["ramu",4],["t",7]]);
console.log(myMap.get("ramu"));
console.log(myMap.has("Ta"));
console.log(myMap.delete("t"));
console.log(myMap.size);
console.log(myMap.clear);
const Values=Array.from(myMap);
console.log(Values);*/
/*const numbers=[1,2,3,4,5,6];
console.log(numbers.push(6));
console.log(numbers.pop());
const val=numbers.shift();
const va2=numbers.unshift("");

console.log(val);*/
/*const numbers=[1,2,3,4,5,6];
const fruits=["apple","orange"];
const newArray=numbers.concat(fruits);
console.log(newArray);*/
/*const fruits=["apple","orange","apple","apple"];
console.log(fruits.indexOf("orange"));
console.loglastindexof("apple");*/

/*const numbers=[1,2,3,4,5];
numbers.forEach(callback)
function callback(value,Index,arr){
console.log(value);
}*/

/*const numbers=[1,2,3,4,5];
numbers.forEach(callback)
function callback(value,Index,arr){
console.log(value);

}*/

/*const numbers=[1,2,3,4,5];
let sum=0;
numbers.forEach((value)=>{
    sum=sum+value
});
console.log(sum);*/
/*const array=[1,"Raju",true,2.45];
array.forEach((value)=>{console.log(value+":"+typeof value)});*/

/*const arr=['a','b','c','a','c','e'];
let count={}
arr.forEach((value)=
{
   if(count.value)
   {
    count[value]++;
   }
   else{
    count[value]=1;
   }
}
console.log(count);*/
/*let arr=[1,2,3,4,5];
arr.forEach((value)=>value*2);
console.log(arr);*/

//let arr=[1,2,3,4,5];
//arr.forEach((value)=value*2);
//const arr=[1,2,3,4,5];
//const arr1=arr.map((value)=>value*2)
/*const arr1=arr.forEach((value)=>value*3)
console.log(arr1);*/

/*const person=[
    {
        name:"Hero",
        age:21,
        gender:"female"
    },
    {
        name:"hero2",
        age:25,
        gender:"male"
    }
    ]
    console.log(person);
    const newArr=person.map((value)=>{return[value.name,value.age]})
    console.log(newArr);*/

    /*const product=[
        {
            name:"laptop",
            price:30000,
            count:5
        },
        {
            name:"mobile",
            price:20000,
            count:4
        },
        {
            name:"headphone",
            price:2500,
            count:3

        }
    ]
    const totalprice=product.map((value)=>{return[value.price*value.count]})
console.log(totalprice);*/
/*const product=[
    {
        name:"laptop",
        totalprice:67590,
        count:5
    },
    {
        name:"mobile",
        pirce:20000,
        count:4
    }
]
const totalprice=product.map((value)=>{return["name="+value.name,"totalPrice"+value.pirce*value.count]})
console.log(totalprice);*/

/*const arr=[10,20,30,40,50];
const evenarr=arr.filter(check)
function check(value)
{
    if(value%2===0)
    {
        return value;
    }
}
console.log(evenarr);*/
/*const arr=[10,20,30,40,50]
const evenarr=arr.filter((value)=>value%2===0)
console.log(evenarr);*/

/*const arr=[1,2,3,4,5];
const newArr=arr.reduce(sum);
function sum(accumulator,value,index,arr)
{
    return accumulator=value;
}
console.log(newArr);*/

let obj={
    name:"RadhaRaani",
    age:21,
   gender:"male"
}
console.log(obj);