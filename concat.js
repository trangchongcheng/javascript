var firstName = "Cheng";
var lastName = "Trang";

 var fullName = firstName.concat(lastName);

 var numbers = [1,2,3,4,5,6,7,8,9,10];
//  numbers.pop();

/*
numbers.shift(): xóa phần tử đầu tiên
numbers.unshift(): thêm vào phần tử đầu tiên
*/ 
 numbers.push({name:"cheng",id:"01"});
 numbers.shift();
 numbers.unshift(function(){});
 console.log(numbers);
