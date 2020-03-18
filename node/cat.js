function Cat(name){
    this.name = name,
    this.stomach = [];
}
Cat.prototype.an = function(mouse){
    this.stomach.push(mouse);
    mouse.dead= true;
}

module.exports = Cat;