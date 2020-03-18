// Lấy kết quả của phép tínhd dầu tiên để sử dụng cho vòng lặp thứ 2.

var price =[
    {name:"productA",quantily:2, prince:2000},
    {name:"productB",quantily:1, prince:3000},
    {name:"productC",quantily:4, prince:4000}
]

var total = price.reduce((a,b)=>{
    return a + (b.quantily*b.prince);
},0)


var items = ['Tom','Bill','Kim']

var result = items.reduce((a,b)=>{
       return a+'<'.concat(b).concat('>')
},"");

console.log(result);