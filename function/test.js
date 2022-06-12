

/* 
function add(num1,num2){
	let num3=num1+num2;
	return num3;
}

function sub(num1,num2){
	let num4=num1-num2;
	return num4;
}


HOMEWORK--->prd(),div(),rem(),pow(),sqrt()...


function purchaseMilk(amount){
	const RATE=45;
	if(amount>=45){
		//purchase
		//amount=amount-rate;
		//let qty=1;
		
	}else{
		//cant purchase
		item={
			return_amount=amount,
			qty=0
		}
		return item;
}
}


function displayInfo(id,name,address){
	console.log(id,name,address);
}

displayInfo(1,'shiva','pokhara');


//declare and initialize...
let sid=1;
let name='broadway';
let standard='BIT';
let sub1=99;
let sub2=54;
let sub3=93;
let sub4=67;
let PM=40;
let total;
let avg;
let result='Null';
let grade=null;
//processing...

total=sub1+sub2+sub3+sub4;
avg=total/4;
if((sub1>=PM)&&(sub2>=PM) && (sub3>=PM) && (sub4>=PM)){
//console.log('PASS');
result='PASS';
}else{
	result='Fail';
}
//console.log(result);

if(result=='PASS'){
	if(avg>=90){
		grade='A+';
	}else if((avg>=75) && (avg<90)){
		grade='A';
	}else if((avg>=60) && (avg<75)){
		grade='B+';
	}else if((avg>=50)&& (avg<60)){
		grade='B';
	}else if((avg>=40) && (avg<50)){
		grade='C';
	}else{
		grade='FAIL';
	}
}else{
	grade='FAIL';
}
//Output:
console.log("ID: "+sid);
console.log('Name: '+name);
console.log(`Class: ${standard}`);
console.log('Result: '+result);
console.log('Grade: '+grade);

do check out skillup...
message passing... parameters, return global local




let name='shiva';
function f1(){
	console.log(name);
}

function f2(){
	let address='KTM';
	console.log(name,address);
}

function f3(){
	let email='abc@gmail.com';
	console.log(name,email);
}

f3();
f2();
f1();
*/
////////////////////////////////////////////////////
//keyword, nameofFunction(parameter(s)).
//body of function.
	//input -> parameter.
	//process -> Arithmetic and logical.
	//output -> return.
	/*
	
function f1(){ //signature //no of parameters //
	console.log("Hello from f1");
}	
	
function f2(id,name,address){
	console.log("ID :"+ id);
	console.log("NAME: "+name);
	console.log("ADDRESS: "+address);
}

function f3(){
	let num1=3+5;
	return num1;
}

function f4(num1,num2){
	let num3=num1+num2;
	return num3;
}

function f5(num1,num2){
	return num1+num2;
}

//Default parameter...
function f6(num1=4,num2=9){
	return num1+num2;
}

//Nested function..
function f7(num1=0,num2=0){
	function f8(){
		const num8=num1+num2;
		return num8;
	}
	return f8();	
}

//Function Expression...
let sum=function add(num1,num2){
	return num1+num2;
}

let add=sum(55,66);
console.log(add);

*/
//////////////////////////////////////////////////

//Anonymous function
const product=function(num1,num2){
	return num1*num2;
}


//Arrow Function //One-line function

const sum=(a,b)=>a+b;

const sum3=(a,b)=>{
	let var3=a+b;
	return var3;
}

function f10(...args){
	//console.log(a,b,args);//Array.
	//console.log(args.length);
	let sum=0;
	for(let i=0;i<args.length;i++){
		sum+=args[i];
	}
	return sum;
}

//console.log(f10(22,33,66,66,77,88,33));
let totalSum=f10(33,44,55,66);
console.log(totalSum);





