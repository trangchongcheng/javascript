/*
 Reference
Lưu giá trị vào trong địa chỉ vùng nhớ gồm:
Array, object, function
*
*
*/

/** value
 * Lưu giá trị vào biến
 * number, boolen, underfine, string...
 * 
 * 
 */

 const object1 = {
     a:1,
     b:2,
     c:3
 }
 for (const key in object1) {
    console.log(object1.a);
}