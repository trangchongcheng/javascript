// var fs = require('promise-fs');

// fs.readFile('./data/student.js',{encoding:'utf8'})
// .then(data=>{
//     console.log(data);
// })
// .catch(error =>{
//     console.log(error);
// })

// 

// Promise là 1 callback xử lý bất đồng bộ Asynchronice, Promise nhận vào một hàm executor có 2 đối số
// là resolve và reject....Hàm resolve sẽ được gọi khi xử lý thành công, còn reject sẽ được gọi khi xử lý thất bại.
// ta dùng hàm then() để xử lý khi thành công và catch() khi thất bại
// thường được sử dụng kho thực hiện các callback lồng nhau tránh việc callback hell như: ajax request,
// setTimeOut, 

// var fs = require('fs');

// function readFilePromise(path){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path,{encoding:'utf8'}, (err, data)=>{
//             if(err){
//                 reject(err);
//                 return;
//             }
//                 resolve(data);
//         });
//     });
    
// }

// readFilePromise('./data/student.js')
// .then(data =>{
//     console.log(data);
// })
// // .then(undefined, function(error) {
// //     console.log('Error occurred!', error);
// //   })
// .catch(err=>{
//     console.log(err);
// })
var i = 0;

function countFrom(a,b){
    return new Promise((resolve,reject)=>{
        var interval = setInterval(()=>{
            console.log(++a);
            if(a===b){
                 resolve("Xong");
               clearInterval(interval);
            }
        },1000);
    })
}

countFrom(10,20)
.then(done=>{
    console.log(done);
})
