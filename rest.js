const a  =[1,2,3];
const spread = [1, ...a,4];
console.log(spread);
// function sum(spread){
//     return spread;
// }

// console.log(sum(1,2,3,5));


// Rest :gom các phần lại thành array
// Spread: trải các giá trị array thành phần từ

function sum (...a){
    console.log(a);
}
sum(1,2,3,4,5);