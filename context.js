var cheng = {
    name:"Trang chong Cheng",
    sayHi: function (){
        console.log(`Toi ten la ${this.name}`);
        function say2(){console.log(this.name)};
        say2();
    }
}

// cheng.sayHi();
cheng.sayHi();
//  Lỗi context this

// var run = cheng.run;
// run();
// khắc phục lỗi bằng bind

// run = cheng.sayHi.bind(cheng);
// run();

