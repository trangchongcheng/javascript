// Lọc phần từ trong array thỏa đièu kiện theo function

var students = [
    {add:"Da nang"},
    {add:"HCM"},
    {add:"Da nang"},
    {add:"Ha Noi"}
]
var a = 
students.filter((items)=>{
    return items.add==="Da nang";
})

console.log(a);