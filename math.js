var randoms = Math.random();
// console.log(randoms);
// Math.ceil: lam tròn lên
// Math.floor: làm tròn xuống

function randomFrom1To9(max){

    return Math.ceil(Math.random() * Math.floor(max));

}
console.log(randomFrom1To9(9));