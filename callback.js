var coffeeMachine = {
    makeCoffee: (onFinish)=>{
        console.log("Making coffee");
        onFinish();
    }
}

coffeeMachine.makeCoffee(()=>{
    console.log("Tit tit...")
});
