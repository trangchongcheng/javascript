function Student(name, id) {
    this.name = name;
    this.id=id;
    this.run = function(){
       return "Run...."
    }
}

Student.prototype.say = function(){
    console.log("Helo");
}
// This is a object
var Student1 = {
    name:"cheng",
    id:"01"
}

// var student = new Student('chien',1);
// console.log(student.name +"he is " + student.run())


// function Apple (type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = function() {
//         return this.color + ' ' + this.type + ' apple';
//     };
// }

// var apple = new Apple('ipad','red')
// console.log( apple.getInfo());

class Person{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("Di bo")
    }
}

class Teacher extends Person{
    run(){
        console.log("Chạy")
    }
}

var teacher = new Teacher("Thanh");
teacher.run();


class Person{
    constructor(name,id,add){
      this.name = name;
      this.id = id;
      this.add = add;
    }
  }
  //Khi kế thừa từ Base class muốn mở rộng thêm các thuộc tính ở lớp con thì gọi super để kết thừa các thhuộc tính của lớp cha và khởi tạo thêm các thuộc tính mới nm

  class Student extends Person{
    constructor(name,id,add,dob){
      super(name,id,add)
      this.dob = dob;
    }
  }
  
  var person = new Person("Person","0","HCM");
  var cheng = new Student("Cheng","1","DN","20-10-1994");
  
  console.log(cheng)    
