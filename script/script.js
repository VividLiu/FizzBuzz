function FizzBuzz(end){
	var flag = 0; //0: neither; 1: divisible by 3; 2: divisible by 5; 3: divisible by both 
	var result = [];
	for(var i=1; i <=end; i++){
		if(i%3 == 0){
			if(i%5 == 0){
				result.push("fizz buzz");
			}else{
				result.push("fizz");
			}
		}else if(i%5 == 0){
			result.push("buzz");
		}else{
			result.push(i);
		}
	}//for
	return result;
}

var endNum = 0;
var result = [];
$("#submit").click(function(){
	endNum = $("#enterNum").val();

	//validation
	var regEx = /^\d+$/;
	if(!regEx.test(endNum)){
		alert("Please enter integer number.");
		return false;
	}

	endNum = 0 + endNum;
	result = FizzBuzz(endNum);

	var content;
	for(var i = 0; i < result.length; i++){
		content = "<li>"+ result[i] +"</li>"
		$("#result").append(content);	
	}
	
})