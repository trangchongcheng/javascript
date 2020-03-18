var co = require('co');
var fs = require('fs');

function readFilePromise(path){
    return new Promise((resolve, reject)=>{
       fs.readFile(path,{encoding:'utf8'},(err,data)=>{
        if(err){ reject(err); return;}
            resolve(data);
       });

});
}

// readFilePromise('./data/student.js')
// .then(data=>{
//     console.log(data);
//   })
// .catch(err=>{
//     console.log(err);
// })

co (function*(){
   var student =  yield readFilePromise('./data/student.js');
   var student2 =  yield readFilePromise('./data/student.js');
   var student3 =  yield readFilePromise('./data/student.js');
   console.log(student,student2,student3)
})
