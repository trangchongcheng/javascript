// Tạo ra một mảng mới từ mảng đã có dựa theo điều kiện của function

var studentList = [
    {firtsName:"cheng",lastName:"trang"},
    {firtsName:"Le",lastName:"Tan"},
    {firtsName:"Tran",lastName:"Hoang"},
    {firtsName:"Nguyen",lastName:"Thi"},
]

var studentNews = studentList.map((itemt)=>{
    return itemt.firtsName.concat(" Đình ") + itemt.lastName;
})

console.log(studentNews);