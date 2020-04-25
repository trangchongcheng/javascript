for...in và for...of đều là vòng lặp danh sách các đối tượng (mảng, object), for...in thì trả về danh sách các key nếu là object, vị trí index nếu là mảng.
for...of thì trả về lần lượt các giá trị của một mảng và không hoạt động với object.


let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}
