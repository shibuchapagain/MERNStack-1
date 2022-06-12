
function process(sub1,sub2,sub3,sub4){
	
	//let total=calculateTotal(sub1,sub2,sub3,sub4);
	let total=calcTotalV4(sub1,sub2,sub3,sub4);
	
	
	//let average=total/3;
	let average=calcAverageV2(total,4);
	
	/*
	const PM=40;
	let result='FAIL';
	if((sub1>=PM) && (sub2>=PM) && (sub3>=PM) && (sub4>=PM))
		result="PASS";
	*/
	let result=calcResultV2(sub1,sub2,sub3,sub4);
	
	/*
	//Grade
	let grade="OTHER";
	if(result=="PASS"){
		if(average>=90){
			grade='A+';
		}else if((average>=75) && (average<90)){
			grade='A';
		}
	}
	*/
	let grade=calcGradeV2(result,average);
	
	obj={
		stu_total:total,
		//stu_average:average(sub1,sub2,sub3,sub4);
		stu_average:average,
		stu_result:result,
		stu_grade:grade,
		
	};
	return obj;
}

//function calcTotal(sub1,sub2,sub3,sub4){
	//return sub1+sub2+sub3+sub4;
//}

//function calcAverage(sub1,sub2,sub3,sub4)=>(sub1+sub2+sub3+sub4)/4;

let calcTotalV2=function calcTotal(sub1,sub2,sub3,sub4){
	return sub1+sub2+sub3+sub4;
}

//annonomous function of calcTotalV2
let calcTotalV3=function(sub1,sub2,sub3,sub4){
	return sub1+sub2+sub3+sub4;
}

let calcTotalV4=(sub1,sub2,sub3,sub4)=> sub1+sub2+sub3+sub4;

let calcAverageV2=function calcAverage(total, subjects){
	return total/subjects;
}



let calcResultV2=function calcResult(sub1,sub2,sub3,sub4){
	const PM=40;
	let result='FAIL';
	if((sub1>=PM) && (sub2>=PM) && (sub3>=PM) && (sub4>=PM))
		result="PASS";
	return result;
}

let calcGradeV2=function calcGrade(result,average){
	let grade="OTHER";
	if(result=="PASS"){
		if(average>=90){
			grade='A+';
		}else if((average>=75) && (average<90)){
			grade='A';
		}
	}
	return grade;
}