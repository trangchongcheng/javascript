var readlineSync = require('readline-sync');
var fs = require('fs');

var students = []

function showMenu(){
    console.log("Bấm 1 để xem danh sách học sinh");
    console.log("Bấm 2 để thêm mới học sinh");
    console.log("Bấm 3 để thoát");
    choice();
}
showMenu();
function choice(){
    var option = readlineSync.question(">");
    switch(+option){
        case 1:
            showStudentList();
            break;
        case 2:
            addStudent();
            break;
        case 3:
            saveStudents();
            break;
        default:
            break;    
    }
    showMenu();
}

function showStudentList(){
    console.log(students);
}

function addStudent(Ơ){
    var name = readlineSync.question("Input student name?")
    var old = readlineSync.question("Input student old?")
    students.push({name:name,old:old})
}
function saveStudents(){
    var studentsString = JSON.stringify(students);
    fs.writeFileSync('./data/student.js',studentsString)
    console.log('Data to save successfuly');
}