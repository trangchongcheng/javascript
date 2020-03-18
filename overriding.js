class CoffeMachine{
    makeCoffe(){
        console.log("Making coffee...")
    }
}

class SpeciaCoffeMachine  extends CoffeMachine{
    makeCoffe(){
        console.log("making coffee and do something...")
    }
}

const coffeeMachine = new SpeciaCoffeMachine();
coffeeMachine.makeCoffe();